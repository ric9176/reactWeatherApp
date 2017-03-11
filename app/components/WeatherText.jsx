import React from 'react';

const WeatherText = React.createClass({
  render() {
    let location = this.props.location;
    let temp = this.props.temp;

    return (
      <h3>The weather in {location} is {temp} degrees</h3>
    );
  }
});

export default WeatherText;
