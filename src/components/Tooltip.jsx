import { useState } from "react";
import "./Tooltip.css";

function Tooltip({ children, tooltipText }) {
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
}

export default Tooltip;
