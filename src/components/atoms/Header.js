import React from 'react';

import Footer from './Footer';
import avatar from '../../assets/images/ka.jpg';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="gmail.com" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Kaushal Caterers </strong>are one of the reckoned service providers and engaged in rendering
            <br />
            Wedding Catering Service to our respected patrons. We are backed with uniformed,
            <br />
            friendly and highly cooperative wedding planners, who ensures memorable experience{' '}
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
