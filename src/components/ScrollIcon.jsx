import React from "react";

function ScrollIcon() {
  return (
    <img
      src="./src/images/scrollicon.png"
      alt=""
      className="ScrollIcon"
      onClick={() => window.location.replace("/#Page1")}
    />
  );
}

export default ScrollIcon;
