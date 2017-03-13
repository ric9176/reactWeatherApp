import React from 'react';

const WeatherText = ({temp, location}) => {
    return (
      <h3>The weather in {location} is {temp} degrees</h3>
  );
};

export default WeatherText;
