import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';
import {useDispatch} from "react-redux"
import * as sessionActions from "../../store/session";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const handelDemo = () => {
    dispatch(sessionActions.login({credential : "Demo-lition", password: "password"}))
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="sessionDiv">
        <span className="hiUser">Welcome {sessionUser.username}!</span>
        <NavLink to="/create-car">Add Car</NavLink>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <button type="button" onClick={()=>handelDemo()}>Demo</button>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    );
  }

  return (
    <ul className="navigation">
      <li className = "navigationLinks">
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
