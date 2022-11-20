import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./candidatScreen.scss";

const keywords = [
  "Tout",
  "Présidentiel",
  "Deputé National",
  "Deputé Provincial",
];
const candidats = [
  {
    nom: "Romain MBULU",
    number: "5",
    type: "Présidentiel",
    gender: "M",
    side: "UDPS",
  },
  {
    nom: "Nadine NZUKI",
    number: "3",
    type: "Présidentiel",
    gender: "F",
    side: "LAMUKA",
  },
  {
    nom: "Philippe MBALA",
    number: "5",
    type: "Deputé National",
    gender: "M",
    side: "FCC",
  },
  {
    nom: "Bernadette KAPINGA",
    number: "3",
    type: "Présidentiel",
    gender: "F",
    side: "FCC",
  },
  {
    nom: "Jean ISEVULA MBIRE",
    number: "5",
    type: "Deputé National",
    gender: "M",
    side: "LAMUKA",
  },
  {
    nom: "Jemima MYNDA",
    number: "3",
    type: "Deputé Provincial",
    gender: "F",
    side: "LAMUKA",
  },
  {
    nom: "Romain MBULU",
    number: "5",
    type: "Présidentiel",
    gender: "M",
    side: "UDPS",
  },
  {
    nom: "Nadine NZUKI",
    number: "3",
    type: "Présidentiel",
    gender: "F",
    side: "LAMUKA",
  },
  {
    nom: "Romain MBULU",
    number: "5",
    type: "Présidentiel",
    gender: "M",
    side: "UDPS",
  },
  {
    nom: "Nadine NZUKI",
    number: "3",
    type: "Présidentiel",
    gender: "F",
    side: "LAMUKA",
  },
  {
    nom: "Romain MBULU",
    number: "5",
    type: "Présidentiel",
    gender: "M",
    side: "UDPS",
  },
  {
    nom: "Nadine NZUKI",
    number: "3",
    type: "Présidentiel",
    gender: "F",
    side: "LAMUKA",
  },
  {
    nom: "Romain MBULU",
    number: "5",
    type: "Présidentiel",
    gender: "M",
    side: "UDPS",
  },
  {
    nom: "Nadine NZUKI",
    number: "3",
    type: "Présidentiel",
    gender: "F",
    side: "LAMUKA",
  },
  {
    nom: "Romain MBULU",
    number: "5",
    type: "Présidentiel",
    gender: "M",
    side: "UDPS",
  },
  {
    nom: "Nadine NZUKI",
    number: "3",
    type: "Deputé Provincial",
    gender: "F",
    side: "LAMUKA",
  },
];
const CandidatScreen = () => {
  const [activeElement, setActiveElement] = useState("Tout");

  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <div className="container__candidat">
      <h2>Candidats</h2>
      <Container>
        <div className="categoriesBar">
          {keywords.map((value, i) => (
            <span
              onClick={() => handleClick(value)}
              key={i}
              className={activeElement === value ? "active" : ""}
            >
              {value}
            </span>
          ))}
        </div>
        <h3>
          Totals des candidats : <span>1000</span>
        </h3>
        <Row className="candidat_title">
          <Col>Nom Complet</Col>
          <Col>Numéro</Col>
          <Col>Type</Col>
          <Col>Genre</Col>
          <Col>Parti</Col>
        </Row>
        {candidats
          .filter((candidat) =>
            activeElement !== "Tout" ? candidat.type === activeElement : true
          )
          .map((candidat) => (
            <Row className="data">
              <Col>{candidat.nom}</Col>
              <Col>{candidat.number}</Col>
              <Col>{candidat.type}</Col>
              <Col>{candidat.gender}</Col>
              <Col>{candidat.side}</Col>
            </Row>
          ))}
      </Container>
    </div>
  );
};

export default CandidatScreen;
