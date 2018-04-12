import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Screen.scss';

class Screen extends Component {
  static propTypes = {
    info: PropTypes.string,
  };

  render() {
    return (
        <div className="screen-container">
          <span className='info-box'>{this.props.info}</span>
        </div>
    );
  }
}

export default Screen;
