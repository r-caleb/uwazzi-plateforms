import React from "react";
import "./centerScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProvinceScreen = () => {
  const provinces = [
    {
      id: 1,
      nom: "Bas-Uele",
      number: 100,
    },
    {
      id: 2,
      nom: "Equateur",
      number: 150,
    },
    {
      id: 3,
      nom: "Haut-Katanga",
      number: 150,
    },
    {
      id: 4,
      nom: "Kinshasa",
      number: 300,
    },
    {
      id: 5,
      nom: "Bas-Uele",
      number: 100,
    },
    {
      id: 6,
      nom: "Equateur",
      number: 150,
    },
    {
      id: 7,
      nom: "Haut-Katanga",
      number: 150,
    },
    {
      id: 8,
      nom: "Kinshasa",
      number: 300,
    },
    {
      id: 9,
      nom: "Bas-Uele",
      number: 100,
    },
    {
      id: 10,
      nom: "Equateur",
      number: 150,
    },
    {
      id: 11,
      nom: "Haut-Katanga",
      number: 150,
    },
    {
      id: 12,
      nom: "Kinshasa",
      number: 300,
    },
  ];

  return (
    <div className="container__center">
      <h2>Provinces</h2>
      <Container>
        <h3>
          Totals des centres : <span>1000</span>
        </h3>
        <Row className="center_title">
          <Col>Province</Col>
          <Col>Centre</Col>
        </Row>
        {provinces.map((province) => (
          <Link to={`/center/lists/${province.id}`}>
            <Row className="data" key={province.id}>
              <Col>{province.nom}</Col>
              <Col>{province.number}</Col>
            </Row>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default ProvinceScreen;
