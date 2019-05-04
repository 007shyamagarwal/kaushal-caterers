import React from 'react';

import Gallery from './atoms/Gallery';

import thumb01 from '../assets/images/thumbs/1.jpg';
import thumb02 from '../assets/images/thumbs/2.jpg';

import full01 from '../assets/images/fulls/1.jpg';
import full02 from '../assets/images/fulls/2.jpg';
import '../assets/main.scss';

/* eslint-disable eslint(jsx-a11y/anchor-is-valid) */
const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Counter 1'
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Counter 2'
  }
];

class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Kaushal Catering & Events Services</h2>
            </header>
            <p>
              Kaushal Caterers is the result of a shared vision to take the art of catering to the next level. Since
              inception in 2105, KC has more than 150 successful events
            </p>
            <ul className="actions">
              <li>
                <a href="www.google.com" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(({
 src, thumbnail, caption, description
}) => ({
                src,
                thumbnail,
                caption,
                description
              }))}
            />

            <ul className="actions">
              <li>
                <a href="www.google.com" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              To experience the world class catering services contact Mr. Kaushal Agarwal of Kaushal caterers who he is
              dedicated to provide best catering experience in jaipur.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="12u">
                      <textarea name="message" id="message" placeholder="Message" rows="4" />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    54,Kalyan Nagar ,V.K.I.A Road No.5
                    <br />
                    Jaipur(302013)
                    <br />
                    Rajasthan
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    +91-9928323188
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:kaushalagarwal24@gmail.com">kaushalagarwal24@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
