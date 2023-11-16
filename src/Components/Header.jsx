import React from "react";
import Logo from "../assets/images/logo.svg";
import {
  MdOutlineAccountCircle,
  MdOutlineHelpOutline,
  MdClear,
} from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { carData } = useSelector((state) => state.car);
  const [Menu, setMenu] = useState(false);
  return (
    <div className="nav-container">
      <a href="/">
        <img src={Logo} />
      </a>
      <div className="menu">
        <ul>
          <li>
            <a href="#0">Model Y</a>
          </li>
          <li>
            <a href="#1">Model S</a>
          </li>
          <li>
            <a href="#2">Model X</a>
          </li>
          <li>
            <a href="#3">Model 3</a>
          </li>
        </ul>
      </div>
      <div className="rightMenu">
        <a href="#" className="Icon">
          <MdOutlineHelpOutline />
        </a>
        <a href="#" className="Icon">
          <MdOutlineAccountCircle />
        </a>
      </div>
      <button className="menuItem" onClick={() => setMenu(!Menu)}>
        Menu
      </button>

      {Menu && (
        <div className="BurgerNav">
          <div className="closeIcon">
            <MdClear onClick={() => setMenu(!Menu)} />
          </div>
          <ul>
            {carData.map((item) => {
              const { title, id } = item;
              return (
                <li>
                  <a href="#" key={id}>
                    {title}
                  </a>
                </li>
              );
            })}
            <li>
              <div className="Account">
                <span>
                  <MdOutlineAccountCircle />
                </span>
                <p>Account</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
