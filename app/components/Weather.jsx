import React from 'react';
import WeatherText from 'WeatherText';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function (err) {
      that.setState({isLoading: false});
      console.log(err)
      alert(err);
    });

  },
  render() {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetaching weather...</h3>;
      } else if (temp && location) {
        return <WeatherText location={location} temp={temp}/>;
      }
    }
    return (
      <div>
        <h2>Find weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

export default Weather;
