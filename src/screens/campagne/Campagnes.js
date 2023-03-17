import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./campagnes.scss";
import droit from "./droit.png";
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

const Campagnes = () => {
  const [dispositions, setDispositions] = useState([]);
  const [input, setInput] = useState("");
  let url = "https://uwazzi-plateforms.vercel.app/infos/2";

  useEffect(() => {
    fetch(`https://de-vie.com/processus_E_api/api/campagne`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDispositions(data.data);
      });
  }, []);
  console.log(dispositions);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(dispositions);
  const groupObjectByField = (items, field) => {
    const outputs = {};
    items.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { nom: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
  };
  const textesLegaux = groupObjectByField(dispositions, "nom");
  return (
    <Container className="textes">
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Dispositions légales sur la campagne électoral et le vote</h1>
        <img
          src={droit}
          alt="Dispositons Légaux"
          className="image"
          width={300}
          height={300}
        />
      </div>
      <Row xs={1} md={3} className="g-4">
        {dispositions &&
          dispositions
            .filter((value) =>
              input
                ? value.titre.toLowerCase().includes(input.toLowerCase())
                : true
            )
            .map((info) => (
              <Link to={`/infos/${dispositions.id}`} key={dispositions.id}>
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
                        <Card.Text style={{ textDecoration: "underline" }}>
                          {info.date}
                        </Card.Text>
                        <div className="social_link">
                          <p>Partagez sur :</p>
                          <div>
                            <FacebookShareButton url={url}>
                              <FacebookIcon
                                size={32}
                                round
                                logoFillColor="white"
                              />
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
                              <WhatsappIcon
                                size={32}
                                round
                                logoFillColor="white"
                              />
                            </WhatsappShareButton>
                            <TwitterShareButton url={url}>
                              <TwitterIcon
                                size={32}
                                round
                                logoFillColor="white"
                              />
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

export default Campagnes;
