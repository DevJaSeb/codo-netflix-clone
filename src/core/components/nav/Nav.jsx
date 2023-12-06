import React from "react";
import logo from "../../../assets/logo.jpeg";
import "../../styles/nav.css";
import { useAuth } from "../../auth/hook/useAuth";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const { logout, toggleConfig, showConfig } = useAuth();
  return (
    <div className="nav">
      <img className="nav-logo" src={logo} alt="logo de cineverse" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
      </ul>
      <div
        className={showConfig ? "nav-item-active" : "nav-item"}
        onClick={toggleConfig}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="usuario 1"
          className="nav-user"
        />
        <p>User 1</p>
      </div>
      <div className={showConfig ? "nav-dropdown-active" : "nav-dropdown"}>
        <ul className="nav-dropdown-list">
          <div className="nav-dropdown-content">
            <Icon icon="mi:edit" color="white" />
            <li>Manage Profile</li>
          </div>
          <div className="nav-dropdown-content">
            <Icon icon="line-md:account" color="white" />
            <li className="nav-dropdown-account">Account</li>
          </div>
          <div className="nav-dropdown-content">
            <Icon icon="material-symbols:help-outline" color="white" />
            <li className="nav-dropdown-help">Help Centre</li>
          </div>
          <div className="nav-dropdown-content logout">
            <Icon icon="line-md:logout" color="white" />
            <li className="nav-dropdown-logout" onClick={logout}>
              Cerrar sesion
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
