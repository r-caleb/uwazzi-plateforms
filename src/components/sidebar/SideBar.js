import React from "react";
import "./_sidebar.scss";
import { MdHome } from "react-icons/md";
import {
  FaUsers,
  FaCity,
  FaMapMarkerAlt,
  FaCalculator,
  FaInfoCircle,
  FaChartBar,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = ({ sidebar, handleToggleSidebar }) => {
  let activeStyle = {
    background: "#00A2DD",
    borderRadius: "20px",
    color: "#ffffff",
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <h2>MENUS</h2>
      <hr />
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        end
      >
        {/* <li>
          <MdHome size={23} />
          <span>Accueil</span>
        </li> */}
      </NavLink>
      <NavLink
        to="/candidat/lists"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaUsers size={23} />
          <span>Candidats</span>
        </li>
      </NavLink>
      <NavLink
        to="/province/lists"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaCity size={23} />
          <span>Centres</span>
        </li>
      </NavLink>
      <NavLink
        to="/center/map"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaMapMarkerAlt size={23} />
          <span>Map Centre</span>
        </li>
      </NavLink>
      <NavLink
        to="/stats"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaChartBar size={23} />
          <span>Statistiques</span>
        </li>
      </NavLink>
      {/* <NavLink
        to="/resultats/data"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaCalculator size={23} />
          <span>Résultats</span>
        </li>
      </NavLink> */}
      <hr />
    </nav>
  );
};

export default SideBar;
