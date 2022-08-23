import React from "react";
import "./signin.css";

export default function SignIn(props) {
  const [newEmail, setNewEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  return (
    <div className="signUpContainer">
      <h2>Sign In</h2>
      <div className="fieldContainer">
        <p>Email: </p>{" "}
        <input
          value={newEmail}
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        ></input>
      </div>
      <div className="fieldContainer">
        <p>Password: </p>{" "}
        <input
          value={newPassword}
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          props.handleSignIn(newEmail, newPassword);
        }}
      >
        Sign In
      </button>
    </div>
  );
}
