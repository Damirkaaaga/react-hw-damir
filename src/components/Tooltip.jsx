import { useState } from "react";

function Tooltip({ children, tooltipText }) {
  const [show, setShow] = useState(false);

  return (
    <span
      style={{ position: "relative", cursor: "pointer", color: "blue" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          style={{
            position: "absolute",
            background: "black",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            top: "100%",
            left: "0",
            whiteSpace: "nowrap",
            marginTop: "5px",
            fontSize: "12px"
          }}
        >
          {tooltipText}
        </div>
      )}
    </span>
  );
}

export default Tooltip;
