import React from 'react';
import WeatherText from 'WeatherText';
import WeatherForm from 'WeatherForm';

const Weather = React.createClass({
  render() {
    return (
      <div>
        <WeatherText/>
        <WeatherForm/>
      </div>
    );
  }
});

export default Weather;
