import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, signOut }) => {
  if (currentUser) {
    return (
      <div>
        <p>Welcome, {currentUser.username} !</p>
        <button onClick={ signOut }>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <Link to={'/signup'}>Sign Up</Link>
      <Link to={'/signin'}>Sign In</Link>
    </div>
  );
};

export default Greeting;
