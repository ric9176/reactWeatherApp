import React from 'react';
import {Link} from 'react-router';

const About = () => (
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>
      This is a simple web app built with react and foundation that hits the
      Open Weather Api and displays the temperature of the location to the user.
    </p>
    <p>
    The repo can be found <a href="https://github.com/ric9176/reactWeatherApp">here</a>
    </p>
    </div>
  );

export default About;
