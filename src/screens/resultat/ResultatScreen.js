import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./resultatScreen.scss";
import avatar from "../home/assets/rc.jpg";

const ResultatScreen = () => {
  const [candidats, setCandidat] = useState([]);

  const fetchData = () => {
    fetch(
      "https://ecoki.net/processus_E_api/api/list_candidat?filtre=Présidentielle&search="
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
  return (
    <div className="container__resultat">
      <h2>Résultats</h2>
      <Container>
        <h3>
          Totals des candidats : <span>{candidats.length}</span>
        </h3>
        {candidats.map((candidat) => (
          <Link to={`/resultats/data/id`} key={candidat.nom}>
            <Row className="data">
              <Col xs={2}>
                <img src={avatar} alt="candidat" />
              </Col>
              <Col>
                <p>{candidat.nom}</p>
                <p> Candidat {candidat.scrutin}</p>
              </Col>
              <Col>{candidat.sexe}</Col>
              <Col>4 443 000 voix</Col>
            </Row>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default ResultatScreen;
