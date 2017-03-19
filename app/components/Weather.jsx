import React from 'react';
import WeatherText from 'WeatherText';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function (err) {
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });

  },
  render() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetaching weather...</h3>;
      } else if (temp && location) {
        return <WeatherText location={location} temp={temp}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }
    return (
      <div>
        <h1 className="text-center">Get weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

export default Weather;
