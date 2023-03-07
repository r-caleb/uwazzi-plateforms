import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResultGeneral = ({ candidat }) => {
  const [candidatResult, setCandidatResult] = useState([]);

  useEffect(() => {
    fetch(
      `http://de-vie.com/processus_E_api/api/resultats/candidat_pays?id_candidat=${candidat.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidatResult(data.datas);
      });
  }, []);
  return (
    <Link to={`/resultats/data/${candidat.id}`}>
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
        <Col>
          <p style={{ color: "#00A2DD" }}>
            {candidatResult.total} %{" "}
            <span>({candidatResult.total_voix} voix)</span>
          </p>
        </Col>
        <Col>Voir Plus</Col>
      </Row>
    </Link>
  );
};

export default ResultGeneral;
