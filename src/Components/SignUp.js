import React from "react";
import "./signup.css";

export default function SignUp(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="signUpContainer">
      <h2>Sign Up</h2>
      <div className="fieldContainer">
        <p>Full Name: </p>{" "}
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </div>
      <div className="fieldContainer">
        <p>Email: </p>{" "}
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
      </div>
      <div className="fieldContainer">
        <p>Password: </p>{" "}
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          props.handleSignUp(name, email, password);
        }}
      >
        Sign Up
      </button>
    </div>
  );
}
