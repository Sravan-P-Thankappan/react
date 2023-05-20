import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import {AuthContext} from '../../store/authContext';

const Navigation = () => {

  const ctx = useContext(AuthContext)

  console.log('ctx....', ctx)

  return (

    // <AuthContext.Consumer>
    //   {
    //     (ctx) => {

    //       console.log('ctx........',ctx)
    //       return (

    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIN && (
          <li>
            <a>Users</a>
          </li>
        )}
        {ctx.isLoggedIN && (
          <li >
            <a>Admin</a>
          </li>
        )}
        {ctx.isLoggedIN && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    //       )
    //     }
    //   }
    // </AuthContext.Consumer>
  );
};

export default Navigation;
