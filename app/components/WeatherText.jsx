import React from 'react';

const WeatherText = ({temp, location}) => (
      <h3 className="text-center">The weather in {location} is {temp} degrees</h3>
  );

export default WeatherText;
