import React from 'react';
import WeatherText from 'WeatherText';
import WeatherForm from 'WeatherForm';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading:false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

 handleSearch (location) {
   var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
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

  }
  componentDidMount () {
    let location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps (newProps) {
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  render() {
    var {isLoading, temp, location, errorMessage} = this.state;

     const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetaching weather...</h3>;
      } else if (temp && location) {
        return <WeatherText location={location} temp={temp}/>;
      }
    };

     const renderError = () => {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    };
    return (
      <div>
        <h1 className="text-center page-title">Get weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;
