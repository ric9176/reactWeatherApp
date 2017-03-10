import React from 'react';
import WeatherText from 'WeatherText';
import WeatherForm from 'WeatherForm';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp:88
    };
  },
  handleSearch: function (location) {
    this.setState({
      location,
      temp: 23
    });
  },
  render() {
    let {temp, location} = this.state;
    return (
      <div>
        <h2>Find weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherText location={location} temp={state}/>
      </div>
    );
  }
});

export default Weather;
