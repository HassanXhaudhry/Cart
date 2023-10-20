import React, { Fragment, useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import pngegg from "../../images/pngegg.png";
import { CgSun } from "react-icons/cg";
import { BiMoon, BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || "light-theme";
  };

  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  
  const icon = theme === "light-theme" ? <BiMoon size={30} /> : <CgSun size={30} />;

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Fragment>
  
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img className="nav-main-logo" src={pngegg} alt="" width="38px" height="38px" />
            </Link>
            <h2 className="heading" style={{ marginTop:"25px"}}>TASKER</h2>
            <div className="input-field">
            <button className="input-filed-icon"><BiSearch/></button>
            <input className="input-field-inner" type="text" placeholder="Type to search" />
            </div>
            <div className="nav-right">
              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimesCircle /> : <FaBars />}
              </div>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : " non")
                    }
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/careers"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : " non")
                    }
                    onClick={closeMobileMenu}
                  >
                    Carrers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : " non")
                    }
                    onClick={closeMobileMenu}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : " non")
                    }
                    onClick={closeMobileMenu}
                  >
                    Projects
                  </NavLink>
                </li><span style={{paddingRight:"15px"}}></span>
                
                <i className="theme-mode" onClick={toggleTheme}>
                
                  {icon}
                </i><span style={{paddingRight:"15px"}}></span>
                <li className="nav-item">
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : " non")
                    }
                    onClick={closeMobileMenu}
                  > 
                    <button className="nav-btn">Signup</button>
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Navbar;
