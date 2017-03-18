import React from 'react';

const WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder="Enter City Name"/>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

export default WeatherForm;
