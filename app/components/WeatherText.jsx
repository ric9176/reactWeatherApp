import React from 'react';

const WeatherText = React.createClass({
  render() {
    let location = this.props.location;
    let temp = this.props.temp;

    return (
      <h3>{location} {temp}</h3>
    );
  }
});

export default WeatherText;
