import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Tooltip.css";

const Tooltip = ({ children, tooltipText }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && <div className="tooltip-box">{tooltipText}</div>}
    </span>
  );
};

Tooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
