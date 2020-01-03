import React from "react";
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul className="navigation">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/test1">test1</NavLink>
        </li>
      </ul>
    </>
  )
}

export default Navigation;