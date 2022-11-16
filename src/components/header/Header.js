import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${input}`);
  };

  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <img src={logo} alt="" className="header__logo" />

      <div className="header__icons">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch size={22} />
          </button>
        </form>
        <FaLanguage size={40} />
      </div>
    </div>
  );
};

export default Header;
