import React, { useState } from "react";

export const Navbar = (props) => {
  const {} = props;
  const [navItems, setNavItems] = useState([
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]);
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {navItems.map((item, index) => (
          <li className="navbar-item" key={`navItem-${index}`}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
