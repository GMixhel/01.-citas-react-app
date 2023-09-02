import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <heade className="header container ">
      <h3 className="header__logo">Logo</h3>
      <div className="header__nav">
        <ul className="nav">
          <li className="nav__item">
            <NavLink className="nav__link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink nav__link to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </heade>
  );
}

export default Header