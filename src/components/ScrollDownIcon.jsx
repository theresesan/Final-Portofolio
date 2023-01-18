import React from "react";

function ScrollDownIcon() {
  return (
    <img
      src="/images/scrollicon 2.png"
      alt=""
      className="ScrollIcon"
      onClick={() => window.location.replace("/#Page3")}
    />
  );
}

export default ScrollDownIcon;
