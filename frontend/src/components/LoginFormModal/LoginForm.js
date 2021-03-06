import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'


function LoginForm({modalState}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        All fields are required*
        <label className="loginLabel1">
          Username or Email
          <input
            type="text"
            value={credential}
            required
            onChange={(e) => setCredential(e.target.value)}
          />
        </label>
        <label className="loginLabel2">
          Password
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className = "loginButtonDiv">
        <button type="submit" className ="loginButtons">Log In</button>
        <button type="button" className ="loginButtons" onClick={() => modalState(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
