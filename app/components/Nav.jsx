import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render() {
    return (
      <div>
      <h2>Navbar</h2>
      <Link to="/">Get Weather</Link>
      <Link to="/about">About</Link>
      <Link to="/example">Example</Link>
      </div>
    );
  }
});

export default Nav;
