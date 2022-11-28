import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "./homeScreen.scss";
import banner from "./banner.jpg";
import candidat from "./rc.jpg";
import map from "./map.png";

const HomeScreen = () => {
  return (
    <Container className="home">
      <Row className="home__banner">
        <img src={banner} alt="banner" />
      </Row>
      <h3>A LA UNE</h3>
      <div>
        <Row className="home__news">
          <Col lg={4}>
            <h3>Sujet</h3>
          </Col>
          <Col>
            La Commission électorale nationale indépendante (CENI), appelée CEI
            jusqu'en mars 2011, a pour mandat « de garantir des élections libres
            et démocratiques ». Composée de 21 membres, elle est présidée par
            l'abbé Malu Malu...
            <p className="voir__plus">Voir plus</p>
          </Col>
        </Row>
      </div>
      <hr />
      <h3>Les informations sur tous les candidats </h3>
      <div>
        <Row className="home__candidate">
          <Col>
            <img src={candidat} alt="candidat" />
          </Col>
          <Col>
            <img src={candidat} alt="candidat" />
          </Col>
          <Col>
            <img src={candidat} alt="candidat" />
          </Col>
          <p className="voir__candidat voir__plus">Voir tous les candidats</p>
        </Row>
      </div>
      <div className="outils">
        <h3>OUTILS</h3>
        <Row className="home__candidate"></Row>
      </div>
    </Container>
  );
};

export default HomeScreen;
