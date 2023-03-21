import React from "react";
import "./_sidebarInfos.scss";
import { MdHome } from "react-icons/md";
import { FaCalendar, FaInfoCircle, FaFileContract } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBarInfos = ({ sidebar, handleToggleSidebar }) => {
  let activeStyle = {
    background: "#00A2DD",
    borderRadius: "20px",
    color: "#ffffff",
  };

  return (
    <nav
      className={sidebar ? "sidebarInfos open" : "sidebarInfos"}
      onClick={() => handleToggleSidebar(false)}
    >
      <h2>MENUS</h2>
      <hr />

      <NavLink
        to="/infos"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaInfoCircle size={23} />
          <span>Actualités</span>
        </li>
      </NavLink>
      <NavLink
        to="/info/textes"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaFileContract size={23} />
          <span>Textes légaux</span>
        </li>
      </NavLink>
      <NavLink
        to="/info/campagne&vote"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaInfoCircle size={23} />
          <span>Campagne & vote</span>
        </li>
      </NavLink>
      <NavLink
        to="/info/calendrier"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          <FaCalendar size={23} />
          <span>Calendrier éléctoral</span>
        </li>
      </NavLink>
      <hr />
    </nav>
  );
};

export default SideBarInfos;
