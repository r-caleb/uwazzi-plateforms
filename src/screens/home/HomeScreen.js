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
        <Row className="home__candidate">
          {/* <Col className="card__map">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <img src={map} alt="map" />
            <p>Trouvez le centre le plus proche de chez vous</p>
          </Col>
          <Col className="card__map">
            <img src={map} alt="map" />
            <p>Suivez toutes les statistiques </p>
          </Col> */}
         {/*  {[   
            "Light",
            "Light",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))} */}
        </Row>
      </div>
    </Container>
  );
};

export default HomeScreen;
