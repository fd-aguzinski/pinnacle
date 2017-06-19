import React, { Component } from 'react';
import EdsonLogo from './logo.png';

import './Logo.css';

class Logo extends Component {
  render() {
    return (
        <img src={EdsonLogo} className="logo" alt="logo" />
    );
  }
}

export default Logo;
