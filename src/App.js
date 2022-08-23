import { Route, Routes } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import React from "react";

function App() {
  const navigate = useNavigate();

  const handleSignIn = async (propEmail, propPassword) => {
    try {
      const response = await fetch("http://localhost:3001/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: propEmail,
          password: propPassword,
        }),
      });
      if (response.ok === true) {
        navigate("home");
        alert("successfully logged In");
      }
    } catch (e) {
      alert("login unsuccessful");
    }
  };

  const handleSignUp = async (propsName, propEmail, propPassword) => {
    try {
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: propsName,
          email: propEmail,
          password: propPassword,
        }),
      });
      if (response.ok === true) {
        navigate("home");
        alert("account successfully created");
      }
      if (response.status >= 400) {
        alert(response.statusText);
      }
    } catch (e) {
      alert("login unsuccessful");
    }
  };
  return (
    <div className="App">
      <div className="nav">
        <Link to="signup">
          <button style={{ marginLeft: "15px" }}>Sign Up</button>
        </Link>
        <Link to="signin">
          <button style={{ marginLeft: "15px" }}>Sign in</button>
        </Link>
      </div>

      <Routes>
        <Route path="signin" element={<SignIn handleSignIn={handleSignIn} />} />
        <Route path="signup" element={<SignUp handleSignUp={handleSignUp} />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
