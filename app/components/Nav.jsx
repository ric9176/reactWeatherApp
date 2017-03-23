import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = React.createClass({
  onSearch (e) {
    e.preventDefault();
    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search" ref="search" placeholder="Search weather by city" />
            </li>
            <li>
              <input type="submit" className="button" value="Get Weather" />
            </li>
          </ul>
          </form>
        </div>
      </div>
    );
  }
});

export default Nav;
