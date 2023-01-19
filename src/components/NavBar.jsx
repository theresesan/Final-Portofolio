import React from "react";

function NavBar() {
  return (
    <div>
      <ul className="NavBar">
        <li className="NavList" onClick={() => window.location.replace("./#Page2")}>
          Om meg
        </li>
        <li className="NavList" onClick={() => window.location.replace("./#Page3")}>
          Prosjekter
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
