import React, { useState } from "react";
import "./Menu.css";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Menu">
      <button onClick={toggleMenu}>
        {" "}
        <img src="/menu.png" className="menu-bar"></img>{" "}
      </button>

      {isOpen && (
        <ul className="menulist">
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> About</a>
          </li>
          <li>
            <a href="/"> Work</a>
          </li>
          <li>
            <a href="/">ContactMe</a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Menu;
