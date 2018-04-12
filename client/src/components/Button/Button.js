import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    orange: PropTypes.bool,
    white: PropTypes.bool,
    equalsbtn: PropTypes.bool,
    zerobtn: PropTypes.bool,
    dot: PropTypes.bool,
    divide: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.handleClick(this.props.name);
  }

  render() {
    const className = [
      "small-btn", this.props.orange
        ? "orange"
        : "",
      this.props.white
        ? "white"
        : "",
      this.props.controls
        ? "controls"
        : "",
      this.props.equalsbtn
        ? "equalsbtn"
        : "",
      this.props.zerobtn
        ? "zerobtn"
        : "",
      this.props.dot
        ? "dot"
        : ""
    ];

    return (
      <div className="button-container">
          <button className={className.join(" ").trim()} onClick={this.handleClick}>
            {this.props.name}
          </button>
      </div>
    );
  }
}

export default Button;
