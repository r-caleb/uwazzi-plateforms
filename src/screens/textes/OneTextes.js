import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import justices from "./justices.png";
import { Accordion, Button } from "react-bootstrap";
import "./textes.scss";

const OneTextes = () => {
  const [textes, setTextes] = useState([]);
  const nom = useParams();

  const fetchData = () => {
    fetch(`https://de-vie.com/processus_E_api/api/get_loi_text_legeaux`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTextes(data);
      });
  };
  //
  useEffect(() => {
    fetchData();
  }, []);
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
  const textesLegauxFilter = textesLegaux.filter(
    (texte) => texte.nom === nom.nom
  );
  const textesFilter = textesLegauxFilter[0]?.values;
  return (
    <div>
      <img
        src={justices}
        alt="Textes Legaux"
        className="center"
        width={500}
        height={"auto"}
      />
      <h1>{textesLegauxFilter[0]?.nom}</h1>
      <Button variant="primary" size="sm">
        Télécharger
      </Button>{" "}
      <br />
      <br />
      {textesFilter?.map((texte) => (
        <Accordion key={texte.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{texte?.nomarticle}</Accordion.Header>
            <Accordion.Body
              dangerouslySetInnerHTML={{ __html: texte?.titre }}
            />
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default OneTextes;
