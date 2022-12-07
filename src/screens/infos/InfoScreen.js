import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./infoScreen.scss";
import ceni from "./ceni.png";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

const InfoScreen = () => {
  const [infos, setInfo] = useState([]);
  let url = "https://www.npmjs.com/package/react-share";
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
      <h3>
        <Link to="/">Accueil</Link> >
        <em style={{ color: "#00A2DD" }}> Actualités</em>
      </h3>
      <hr />
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
      <Row xs={1} md={3} className="g-4">
        {infos.map((info) => (
          <Link to={`/infos/${info.id}`}>
            <Col key={info.id}>
              <Card className="bg-dark text-white news__card">
                <Card.Img
                  src={`http://elektion.ecoki.net/web/assets/images/ImageArticle/${info?.image}`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Body className="bottom_left">
                    <Card.Title className="title__news">
                      {info.titre}
                    </Card.Title>
                    <Card.Text style={{ textDecoration: "underline" }}>
                      {info.date}
                    </Card.Text>
                    <div className="social_link">
                      <p>Partagez sur :</p>
                      <div>
                        <FacebookShareButton url={url}>
                          <FacebookIcon size={32} round logoFillColor="white" />
                        </FacebookShareButton>
                        <FacebookMessengerShareButton url={url}>
                          <FacebookMessengerIcon
                            size={32}
                            round
                            logoFillColor="white"
                          />
                        </FacebookMessengerShareButton>
                        <WhatsappShareButton
                          title="visitez cet article"
                          url={url}
                        >
                          <WhatsappIcon size={32} round logoFillColor="white" />
                        </WhatsappShareButton>
                        <TwitterShareButton url={url}>
                          <TwitterIcon size={32} round logoFillColor="white" />
                        </TwitterShareButton>
                      </div>
                    </div>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </Container>
  );
};

export default InfoScreen;
