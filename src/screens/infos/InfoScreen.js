import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import avatar from "../home/rc.jpg";
import "./infoScreen.scss";
import ceni from "./ceni.png";

const InfoScreen = () => {
  const [infos, setInfo] = useState([]);

  const fetchData = () => {
    fetch("https://ecoki.net/processus_E_api/api/articles?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfo(data.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container className="news">
      Actualités
      <Row className="news__banner">
        <Col md={4}>
          <img src={ceni} alt="logo" />
        </Col>
        <Col>
          <p>
            Pour une intégrité totale aux elections, la confiance de la
            population à chaque étape du processus électorale est importante
            <br />
            <br />
            Les données reccueillies fournissent une base pour les processus de
            prise de decision au niveau de politique et des projets
          </p>
        </Col>
      </Row>
      <Row xs={2} md={3} className="g-4">
        {infos.map((info) => (
          <Col key={info.id}>
            <Card className="bg-dark text-white news__card">
              <Card.Img src={avatar} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Body className="bottom_left">
                  <Card.Title>{info.titre}</Card.Title>
                  <Card.Text className="contenu"
                    dangerouslySetInnerHTML={{ __html: info.contenu }}
                  />
                  <Card.Text>{info.date}</Card.Text>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InfoScreen;
