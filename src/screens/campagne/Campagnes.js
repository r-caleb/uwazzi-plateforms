import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./campagnes.scss";
import ceni from "./ceni.png";
import texte from "./justice.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Campagnes = () => {
  const [textes, setTextes] = useState([]);
  const [input, setInput] = useState("");
  let url = "https://uwazzi-plateforms.vercel.app/infos/2";

  useEffect(() => {
    fetch(`https://de-vie.com/processus_E_api/api/get_loi_text_legeaux`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTextes(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(textes);
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
  const textesLegaux = groupObjectByField(textes, "nom");
  return (
    <Container className="textes">
      <Row>
        <Col xs={7} md={7}>
          <h3>
            <Link to="/">Accueil</Link> >
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
      <Row className="textes__banner">
        <Col md={4}>
          <img src={ceni} alt="logo" />
        </Col>
        <Col>
          <p>
            Pour une intégrité totale aux elections, garder la confiance de la
            population et la transparence à chaque étape du processus électorale
            est importante.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {textesLegaux.map((text) => (
          <Col md={3} className="textes__design m-4" key={text.id}>
            <div className="card_texte">
              <h5>Dispositions légales</h5>
              <img src={texte} alt="totem" />
              <p className="line"></p>
              <p>{text.nom}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Campagnes;
