import React, { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import justices from "./justices.png";
import texte from "./justice.png";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./textes.scss";

const TextesLegaux = () => {
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
            <Link to="/">Accueil</Link> {`>`}
            <em style={{ color: "#00A2DD" }}> Actualités</em>
          </h3>
        </Col>
        <Col>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Rechercher un texte"
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
      <h1>TEXTES LÉGAUX ÉLECTORAUX</h1>
      <img
        src={justices}
        alt="Textes Legaux"
        className="center"
        width={500}
        height={"auto"}
      />
      <Row className="g-4 my-3">
        {textesLegaux &&
          textesLegaux
            .filter((value) =>
              input
                ? value.nom.toLowerCase().includes(input.toLowerCase())
                : true
            )
            .map((text) => (
              <Col md={3} className="textes__design m-4" key={text.id}>
                <Link to={`/info/textes/${text?.nom}`}>
                  <div className="card_texte">
                    <h5>Textes Légaux</h5>
                    <img src={texte} alt="totem" />
                    <p className="line"></p>
                    <p>{text.nom}</p>
                  </div>
                </Link>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default TextesLegaux;
