import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/kaushalagarwal007" className="icon fa-dribbble">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="mailto:kaushalagarwal24@gmail.com" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Kaushal Caterers</li>
            <li>Design:Shyam</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
