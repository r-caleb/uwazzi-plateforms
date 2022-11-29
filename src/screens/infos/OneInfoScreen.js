import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import avatar from "../home/rc.jpg";
import "./infoScreen.scss";

const OneInfoScreen = () => {
  const [infos, setInfo] = useState([]);
  const id = useParams();

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
  console.log();
  const news = infos.filter((info) => info && info.id === id.id);
  console.log(news[0]);
  return (
    <Container className="news">
      <h4 className="title">Actualités</h4>
      <hr />
      <Row>
        <Col>
          <div className="news__read">
            <h2>{news[0]?.titre}</h2>
            <hr />
            <p>{news[0]?.date}</p>
            <img src={avatar} alt="info_image" />
            <br />
            <br />
            <p dangerouslySetInnerHTML={{ __html: news[0]?.contenu }} />
          </div>
        </Col>
        <Col md={3} className="g-4">
          {infos.map((info) => (
            <Link to={`/infos/${info.id}`}>
              <Col key={info.id}>
                <Card className="bg-dark text-white news__card1">
                  <Card.Img src={avatar} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Body className="bottom_left">
                      <Card.Title>{info.titre}</Card.Title>
                      <Card.Text
                        className="contenu"
                        dangerouslySetInnerHTML={{ __html: info.contenu }}
                      />
                      <Card.Text style={{ textDecoration: "underline" }}>
                        {info.date}
                      </Card.Text>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OneInfoScreen;
