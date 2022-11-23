import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./candidatScreen.scss";

const keywords = [
  "Tout",
  "Presidentiel",
  "Depute National",
  "Depute Provincial",
];

const CandidatScreen = () => {
  const [activeElement, setActiveElement] = useState("Tout");
  const [candidats, setCandidat] = useState([]);

  const fetchData = () => {
    fetch("https://ecoki.net/processus_E_api/api/list_candidat?filtre=&search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.list);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <div className="container__candidat">
      <h2>Candidats</h2>
      <Container>
        <div className="categoriesBar">
          {keywords.map((value, i) => (
            <span
              onClick={() => handleClick(value)}
              key={i}
              className={activeElement === value ? "active" : ""}
            >
              {value}
            </span>
          ))}
        </div>
        <h3>
          Totals des candidats : <span>1000</span>
        </h3>
        <Row className="candidat_title">
          <Col></Col>
          <Col>Nom Complet</Col>
          <Col>Numéro</Col>
          <Col>Type</Col>
          <Col>Genre</Col>
          <Col>Parti</Col>
        </Row>
        {candidats
          .filter((candidat) =>
            activeElement !== "Tout" ? candidat.type === activeElement : true
          )
          ?.map((candidat) => (
            <Link to={`/candidat/lists/${candidat.nom}}`} key={candidat.nom}>
              <Row className="data">
                <Col>
                  <img src={candidat.photoCandidat} alt="candidat" />
                </Col>
                <Col>{candidat.nom}</Col>
                <Col>{candidat.numeroCandidat}</Col>
                <Col>{candidat.scrutin}</Col>
                <Col>{candidat.sexe}</Col>
                <Col>{candidat.parti_politique}</Col>
              </Row>
            </Link>
          ))}
      </Container>
    </div>
  );
};

export default CandidatScreen;
