import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const Header = ({ handleToggleSidebar }) => {
  const [value, setValue] = React.useState("fr");
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${input}`);
  };
  let activeStyle = {
    background: "#00A2DD",
    borderRadius: "20px",
    color: "#ffffff",
  };
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      backgroundColor: "transparent",
      fontSize: 14,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.,
      "&:focus": {
        borderRadius: 4,
        borderColor: "#0082001f",
        boxShadow: "0 0 0 0.1rem #0082001f",
      },
    },
  }));
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <div className="header__icons">
        <Navbar expand="md">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="" className="header__logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Accueil</Nav.Link>
                  <Nav.Link href="/candidat/lists">
                    Candidats & Centres
                  </Nav.Link>
                  <Nav.Link href="#action3">Informations</Nav.Link>
                  <Nav.Link>
                    {/* <FaLanguage size={40} /> */}
                    {/*  <FormControl sx={{ m: 1, minWidth: 100 }}>
                      <Select
                        id="demo-customized-select"
                        value={value}
                        onChange
                        inputProps={{ "aria-label": "Without label" }}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value="fr">Français</MenuItem>
                        <MenuItem value="li">Lingala</MenuItem>
                        <MenuItem value="ki">Kikongo</MenuItem>
                        <MenuItem value="tsh">Tshiluba</MenuItem>
                        <MenuItem value="sw">Swahili</MenuItem>
                      </Select>
                    </FormControl> */}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
