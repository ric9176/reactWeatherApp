import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = React.createClass({
  render() {
    return (
      <div>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
      </div>
    );
  }
});

export default Nav;
