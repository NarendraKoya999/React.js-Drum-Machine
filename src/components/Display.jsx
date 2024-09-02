import React from "react";
import "../styles/Display.css"; // Ensure CSS is correctly linked

const Display = ({ display }) => {
  return (
    <div id="display" className="display-animation">
      {display}
    </div>
  );
};

export default Display;
