import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
