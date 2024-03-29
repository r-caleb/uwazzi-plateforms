import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./infoScreen.scss";
import flag from "./flag.png";
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
import { AiOutlineSearch } from "react-icons/ai";
import moment from "moment/min/moment-with-locales";

const InfoScreen = () => {
  const [infos, setInfo] = useState([]);
  const [input, setInput] = useState("");
  let url = "https://uwazzi-plateforms.vercel.app/infos/2";

  useEffect(() => {
    fetch(`https://de-vie.com/processus_E_api/api/articles?search=${input}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfo(data.data);
      });
  }, [input]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  moment.locale("fr");

  return (
    <Container className="news">
      <Row>
        <Col xs={7} md={7}>
          <h3>
            <Link to="/">Accueil</Link> {`>`}
            <em style={{ color: "#00A2DD" }}> Actualités</em>
          </h3>
        </Col>
        <Col>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Chercher un article"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <AiOutlineSearch size={22} />
            </button>
          </form>
        </Col>
      </Row>
      <hr />
      <Row className="news__banner">
        <Col md={4}>
          <img src={flag} alt="logo" />
        </Col>
        <Col>
          <p>
            Pour une intégrité totale aux elections, garder la confiance de la
            population et la transparence à chaque étape du processus électorale
            est importante.
          </p>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
        {infos?.map((info) => (
          <Link to={`/infos/${info.id}`} key={info.id}>
            <Col>
              <Card className="bg-dark text-white news__card">
                <Card.Img
                  src={`http://elektion.de-vie.com/web/assets/images/ImageArticle/${info?.image}`}
                  alt="image du news"
                />
                <Card.ImgOverlay>
                  <Card.Body className="bottom_left">
                    <Card.Title className="title__news">
                      {info.titre}
                    </Card.Title>
                    <Card.Text >
                      {moment(info.date).fromNow()}
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
