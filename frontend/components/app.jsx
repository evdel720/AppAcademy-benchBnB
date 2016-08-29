import React from 'react';
import GreetingContainer from './greeting_container.js';
import { Link } from 'react-router';

const App = ({children}) => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    <Link to={'/'}>Home</Link>
    {children}
  </div>
);

export default App;
