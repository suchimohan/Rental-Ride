import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css';

function SignupFormPage({modalState}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city,setCity] = useState("");
  const [image, setImage] = useState(null)
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && (image.name.match(/\.(jpg|jpeg|png)$/))){
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password,city,image}))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field && upload photos of file type .jpg, .jpeg or .png ']);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className="SignUpContainer">
      <form className="SignUpForm" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        All fields are required*
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          Profile Photo
          <input
            type="file"
            required
            onChange={updateFile}
            required
          />
        </label>
        <div className="signUpButtonDiv">
          <button className= "signUpButtons" type="submit">Sign Up</button>
          <button className= "signUpButtons" type="button" onClick={() => modalState(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormPage;
