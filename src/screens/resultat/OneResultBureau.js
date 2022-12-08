import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Chart from "react-apexcharts";

const OneResultBureau = () => {
  const [bureaux, setBureau] = useState([]);
  const center = useParams();
  let idCenter = center.center.split(",")[0];
  let idCandidat = center.center.split(",")[1];
  let idProvince = center.center.split(",")[2];
  let nomCenter = center.center.split(",")[3];
  console.log(nomCenter);

  const fetchData = () => {
    fetch(
      `https://ecoki.net/processus_E_api/api/resultats/candidat_centre/bureau?id_candidat=${idCandidat}&id_province=${idProvince}&id_centre=${idCenter}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBureau(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h3 className="h3">
        <Link to="/">Accueil</Link> >
        <Link to="/resultats/data"> Résultats</Link> >
        <Link to={`/resultats/data/${idCandidat}`}> Provinces</Link> >
        <em style={{ color: "#00A2DD" }}> Centres</em>
      </h3>
      <hr />
      <Row className="card_candidat_result row">
        <Col className="pictures">
          <p>
            Total de voix : {bureaux?.total_voix} ({bureaux?.total} %)
          </p>
        </Col>
        <Col className="tab">
          <p>Les différents bureaux de vote du centre : {nomCenter}</p>
          {bureaux?.data?.map((bureau) => (
            <Row className="data">
              <Col>{bureau.NomBureau}</Col>
              <Col>{bureau.NombreVoix} voix</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OneResultBureau;
