import React from 'react';
import '../assets/main.scss';

import Header from './atoms/Header';
import Home from './Home';

class Template extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

Template.propTypes = {};

export default Template;
