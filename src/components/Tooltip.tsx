import React, { useState, ReactNode } from "react";
import "./Tooltip.css";

type TooltipProps = {
  tooltipText: string;
  children: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => {
  const [show, setShow] = useState(false);

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <div className="tooltip-box">{tooltipText}</div>}
    </span>
  );
};

export default Tooltip;
