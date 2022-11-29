import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Carousel,
} from "react-bootstrap";
import "./homeScreen.scss";
import banner from "./banner.jpg";
import candidat from "./rc.jpg";
import map from "./map.png";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [infos, setInfo] = useState([]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
  let recent = [];
  recent = infos && infos[infos.length - 1];
  console.log(recent);
  return (
    <Container className="home">
      <Row className="home__banner">
        <img src={banner} alt="banner" />
      </Row>
      <h3>A LA UNE</h3>
      <div>
        <Row className="home__news">
          <Col lg={4}>
            <h3>{recent?.titre}</h3>
            <p className="date">{recent?.date}</p>
          </Col>
          <Col>
            <p
              className="contenu"
              dangerouslySetInnerHTML={{ __html: recent?.contenu }}
            />
            <Link to={`/infos/${recent?.id}`} className="voir__plus">
              <p>Lire l'article</p>
            </Link>
          </Col>
        </Row>
      </div>
      <hr />
      <h3>Les informations sur tous les candidats </h3>
      <div>
        <Row className="home__candidate">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={candidat}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={candidat}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={candidat}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
