import React from "react";

function ScrollDownIcon() {
  return (
    <img
      src="./images/scrolldown.png"
      alt=""
      className="ScrollIcon"
      onClick={() => window.location.replace("/#Page3")}
    />
  );
}

export default ScrollDownIcon;
