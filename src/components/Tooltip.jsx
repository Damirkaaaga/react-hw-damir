import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Tooltip.css";

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ show: true });
  };

  handleMouseLeave = () => {
    this.setState({ show: false });
  };

  render() {
    const { children, tooltipText } = this.props;
    const { show } = this.state;

    return (
      <span
        className="tooltip-wrapper"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        {show && <div className="tooltip-box">{tooltipText}</div>}
      </span>
    );
  }
}

Tooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
