import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';
import {useDispatch} from "react-redux"
import * as sessionActions from "../../store/session";
import Search from './Search'

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
        <NavLink to="/create-car">List Car</NavLink>
        <button className= "navButton" onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <button className= "navButton" type="button" onClick={()=>handelDemo()}>Demo</button>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    );
  }

  return (
    <div className='headerDiv'>
      <ul className="navigation">
        <div className='rental-ride'>
        <li><NavLink exact to="/">Rental-Ride</NavLink></li>
        </div>
        <li><Search /></li>
        <li className = "navigationLinks">
            {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
