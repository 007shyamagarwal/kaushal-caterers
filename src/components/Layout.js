import React from 'react';
import './main.scss';

import Header from './atoms/Header';
import Home from './home';

class Template extends React.Component {
  render() {
    // const { children } = this.props;

    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

Template.propTypes = {
  // children: React.PropTypes.func
};

export default Template;
