import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import avatar from "../home/assets/rc.jpg";
import "./resultatScreen.scss";

const OneResultProvince = () => {
  const [provinces, setProvince] = useState([]);
  const [candidatResult, setCandidatResult] = useState([]);

  const id = useParams();
  const idCandidat = id.id;
  const fetchResult = () => {
    fetch(
      `https://ecoki.net/processus_E_api/api/resultats/candidat_centre/bureau?id_candidat=${id}&id_province=1&id_centre=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const fetchData = () => {
    fetch("https://ecoki.net/processus_E_api/api/list_province?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvince(data.data.sort());
      });
  };
  useEffect(() => {
    fetchData();
    fetchResult();
  }, []);

  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/resultats/data");
  };
  return (
    <Container>
      <h3 className="h3">
        <Link to="/">Accueil</Link> >
        <Link to="/resultats/data"> Résultats</Link> >
        <em style={{ color: "#00A2DD" }}> Provinces</em>
      </h3>
      <hr />
      <Row className="card_candidat_result row">
        <Col lg={3} className="pictures">
          <img
            src={/* candidat.photoCandidat */ avatar}
            alt="avatar"
            className="candidat"
          />
          <p>René Caleb AKASA</p>
          <div className="parti_politique">
            <img
              src={/* candidat.logo_parti */ avatar}
              alt="avatar"
              className="parti"
            />
            <p>UDPS</p>
          </div>
        </Col>
        <Col className="tab">
          {provinces.map((province) => (
            <Link to={`/center/lists/${province.nom}`} key={province.id}>
              <Row className="data">
                <Col>{province.nom}</Col>
                <Col>10% (5 000 000) </Col>
              </Row>
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OneResultProvince;
