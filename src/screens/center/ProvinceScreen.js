import React, { useEffect, useState } from "react";
import "./centerScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const ProvinceScreen = () => {
  const [provinces, setProvince] = useState([]);
  const [totalCentre, setTotalCentre] = useState("0");
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch("http://de-vie.com/processus_E_api/api/list_province?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvince(data.data.sort());
      });
  };
  const fetchCenterNumber = () => {
    fetch("http://de-vie.com/processus_E_api/api/list_centre?search&id")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTotalCentre(data.total_centre);
      });
  };
  useEffect(() => {
    fetchData();
    fetchCenterNumber();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container__center">
      <Row>
        <Col xs={7} md={7}>
          <h3>
            <Link to="/">Accueil</Link> >
            <em style={{ color: "#00A2DD" }}>Provinces</em>
          </h3>
        </Col>
        <Col>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Chercher une province"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <AiOutlineSearch size={22} />
            </button>
          </form>
        </Col>
        <hr />
      </Row>
      <Container>
        <h3>
          Totals des centres : <span>{totalCentre}</span>
        </h3>
        <Row className="center_title">
          <Col>Province</Col>
        </Row>
        {provinces &&
          provinces
            .filter((province) =>
              input
                ? province.nom.toLowerCase().includes(input.toLowerCase())
                : true
            )
            .map((province) => (
              <Link to={`/center/lists/${province.nom}`} key={province.id}>
                <Row className="data">
                  <Col>{province.nom}</Col>
                </Row>
              </Link>
            ))}
      </Container>
    </div>
  );
};

export default ProvinceScreen;
