import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
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

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="sessionDiv">
        <NavLink to="/create-car">Add Car</NavLink>
        <ProfileButton user={sessionUser} />
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
