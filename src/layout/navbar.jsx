import React from 'react';
import classes from './navbar.module.css';
import UserIcon from '../svg/UserAccount';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>
        <Link to="/">Trivago Hotels</Link>
      </h2>
      <nav>
        <div>
          <span>John Doe</span>
          <UserIcon />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
