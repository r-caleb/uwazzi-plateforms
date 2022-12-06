import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../home/assets/rc.jpg";
import "./resultatScreen.scss";

const OneResultProvince = () => {
  const [provinces, setProvince] = useState([]);

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
  }, []);

  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/resultats/data");
  };
  return (
    <Container>
      <div className="back">
        <MdArrowBack size={26} onClick={handleClick} />
        <span onClick={handleClick}>Revenir aux résultats des candidats</span>
      </div>
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
