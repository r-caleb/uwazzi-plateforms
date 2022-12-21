import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./resultatScreen.scss";

const ResultatScreen = () => {
  const [candidats, setCandidat] = useState([]);
  const [candidatResult, setCandidatResult] = useState([]);

  const fetchData = () => {
    fetch(
      "https://ecoki.net/processus_E_api/api/list_candidat?filtre=Presidentielle&search="
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
  }, [candidats]);
  return (
    <div className="container__resultat">
      <h3>
        <Link to="/">Accueil</Link> >
        <em style={{ color: "#00A2DD" }}> Résultats</em>
      </h3>
      <hr />
      <Container>
        <h3>
          Totals des candidats : <span>{candidats.length}</span>
        </h3>
        {candidats.map((candidat) => (
          <Link to={`/resultats/data/${candidat.id}`} key={candidat.nom}>
            <Row className="data">
              <Col xs={2}>
                <img
                  src={`http://elektion.ecoki.net/web/assets/images/PhotoCandidats/${candidat.photoCandidat}`}
                  alt="candidat"
                />
              </Col>
              <Col>
                <p>{candidat.nom}</p>
              </Col>
              <Col>{candidat.sexe}</Col>
              <Col>Voir les resultats</Col>
            </Row>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default ResultatScreen;
