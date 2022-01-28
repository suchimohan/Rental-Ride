import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';
import {useDispatch} from "react-redux"
import * as sessionActions from "../../store/session";
import Search from './Search'
import { search } from '../../store/search';

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
      <div className="nav2">
        <span className="hiUser">Welcome {sessionUser.username}!</span>
        <NavLink to="/create-car">ListCar</NavLink>
        <button className= "navButton" onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="nav2">
        <button className= "navButton" type="button" onClick={()=>handelDemo()}>Demo</button>
        <LoginFormModal />
        <SignUpFormModal />
      </div>
    );
  }



  return (
    <div className='headerDiv'>
      <nav>
        <div className="navigation">
          <div className='rental-ride'>
            <NavLink exact to="/">RentalRide</NavLink>
          </div>
            <Search />
          <div>
              {isLoaded && sessionLinks}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
