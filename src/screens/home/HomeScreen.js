import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./homeScreen.scss";
import slide2 from "./assets/electa.jpg";
import candidate from "./assets/vote.jpg";
import slide1 from "./assets/batiment.jpg";
import slide3 from "./assets/elec.jpg";
import center from "./assets/center.jpg";
import slide4 from "./assets/jeu.jpg";
import diagram from "./assets/diagramme.jpg";
import stat from "./assets/stat.png";
import map from "./assets/map.png";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [infos, setInfo] = useState([]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const fetchData = () => {
    fetch("https://www.de-vie.com/processus_E_api/api/articles?search=")
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
  return (
    <Container fluid className="home">
      <Row className="home__banner gx-0">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
            <Carousel.Caption>
              <h3>Ensemble, rétablissons la confiance aux électeurs</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Ensemble, rétablissons la confiance aux électeurs</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Ensemble, rétablissons la confiance aux électeurs</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide4} alt="Fourth slide" />

            <Carousel.Caption>
              <h3>Ensemble, rétablissons la confiance aux électeurs</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="home__layout_content">
        <div className="home__actuality">
          <h3 className="title">A LA UNE</h3>
          <Row className="home__news">
            <Col lg={5} className="over">
              <img
                src={`http://elektion.de-vie.com/web/assets/images/ImageArticle/${recent?.image}`}
                alt="info"
              />
            </Col>
            <Col>
              <h3>{recent?.titre}</h3>
              <p
                className="contenu"
                dangerouslySetInnerHTML={{ __html: recent?.contenu }}
              />
              <p className="date">{recent?.date}</p>

              <Link to={`/infos/${recent?.id}`} className="voir__plus">
                <p>Lire l'article</p>
              </Link>
            </Col>
          </Row>
        </div>
        <p className="presentation">
          La plateforme propose un environnement pour vous permettre d'avoir
          accès à toutes les informations concernant le processus électoral.
          Cette vulgarisation des informations, contribuera à la transparence de
          ce processus et rétablir la confiance aux électeurs.
        </p>
        <Row className="home__candidate">
          <h4>Uwazzi vous propose : </h4>
          <p>
            Les informations concernant tous les candidats (présidentiels et
            deputés nationaux et provinciaux) et différents centre de votes
          </p>
          <Col className="card_candidate">
            <Card style={{ width: "16rem" }}>
              <Link to={`/candidat/lists`}>
                <Card.Img variant="top" src={candidate} />
                <Card.Body>
                  <Card.Text>
                    Qui voter ?<br />
                    Trouver la liste de tous les candidats
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="card_candidate">
            <Card style={{ width: "16rem" }}>
              <Link to={`/province/lists`}>
                <Card.Img variant="top" src={center} />
                <Card.Body>
                  <Card.Text>
                    Où voter ?<br />
                    Trouver la liste de tous les centres de vote
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6} className="card_candidate"></Col>
        </Row>
        <div className="outils">
          <h3 className="title">OUTILS</h3>
          <Row className="home__outils">
            <Col className="card_outils">
              <Card style={{ width: "16rem" }}>
                <Link to={`/center/map`}>
                  <Card.Img variant="top" src={map} />
                  <Card.Body>
                    <Card.Text>
                      Retrouver Le centre le plus proche dans la carte
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col className="card_outils">
              <Card style={{ width: "16rem" }}>
                <Link to={`/stats`}>
                  <Card.Img variant="top" src={stat} />
                  <Card.Body>
                    <Card.Text>
                      Consulter les statistiques sur les enrolements
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col className="card_outils">
              <Card style={{ width: "16rem" }}>
                <Link to={`/resultats/data`}>
                  <Card.Img variant="top" src={diagram} />
                  <Card.Body>
                    <Card.Text>
                      Voir les tendances des résultats électoraux
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col className="card_outils"></Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default HomeScreen;
