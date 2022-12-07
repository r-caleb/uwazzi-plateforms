import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./candidatScreen.scss";
import avatar from "../home/assets/rc.jpg";

const keywords = [
  "Tout",
  "Presidentielle",
  "Législatif national",
  "Législatif provincial",
];

const CandidatScreen = () => {
  const [activeElement, setActiveElement] = useState("Tout");
  const [candidats, setCandidat] = useState([]);

  const fetchData = () => {
    fetch(
      "https://ecoki.net/processus_E_api/api/list_candidat?filtre=Tous&search="
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data);
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
      <h3>
        <Link to="/">Accueil</Link> >{" "}
        <em style={{ color: "#00A2DD" }}>Candidats</em>
      </h3>
      <hr />
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
          Totals des candidats :{" "}
          <span>
            {
              candidats.filter((candidat) =>
                activeElement !== "Tout"
                  ? candidat.scrutin === activeElement
                  : true
              )?.length
            }
          </span>
        </h3>
        <Row className="candidat_title">
          <Col xs={2}></Col>
          <Col>Nom</Col>
          <Col>Genre</Col>
          <Col>Parti Politique</Col>
        </Row>
        {candidats
          .filter((candidat) =>
            activeElement !== "Tout" ? candidat.scrutin === activeElement : true
          )
          ?.map((candidat) => (
            <Link to={`/candidat/lists/${candidat.nom}}`} key={candidat.nom}>
              <Row className="data">
                <Col xs={2}>
                  <img
                    src={`http://elektion.ecoki.net/web/assets/images/PhotoCandidats/${candidat.photoCandidat}`}
                    alt="candidat"
                  />
                </Col>
                <Col>{candidat.nom} </Col>
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
