import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render() {
    return (
      <div>
      <h2>Navbar</h2>
      <Link to="/">Get Weather</Link>
      </div>
    );
  }
});

export default Nav;
