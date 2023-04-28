import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

function toggleHandler(e) {
  e.preventDefault();
  (e.target.classList.contains("active") === true) ? e.target.classList.remove("active") : e.target.classList.add("active");
}

function Header(){
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
    return(
      <div className="header">
        <div className="container flex">
            <nav class="nav">
            <div onClick={toggleHandler} className="burger"><span></span></div>
              <ul class="menu">
                  <li className=".menu__item">
                      <button className="theme" onClick={toggleTheme}> <i class="Small material-icons">brightness_6</i></button>
                  </li>
                  <li className=".menu__item">
                      <NavLink to="/">HOME</NavLink>
                  </li>
                  <li className=".menu__item">
                      <NavLink to="/newfilms">NEW FILMS</NavLink>
                  </li>
                  <li className=".menu__item">
                      <NavLink to="/about" >ABOUT</NavLink>
                  </li>
              </ul>
              <div className="logo">
                <img className="logo_img" src="./assets/img/0.2.png" alt="photo"/>
                <div className="logo_txt">
                  <p>BEST</p>
                  <p>MOVIES</p>
                </div>
              </div>
            </nav>

        </div>
      </div>
    )
}


export {Header};