import React, { useEffect, useState } from "react";
import "./candidatScreen.scss";
import { Container, Row, Col, Table } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
import avatar from "../home/rc.jpg";
import { useNavigate, useParams } from "react-router-dom";

const OneCandidatScreen = () => {
  const [candidat, setCandidat] = useState([]);
  const nom = useParams();
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/candidat/lists");
  };
  let candidate = nom.nom.slice(0, -1);

  const fetchData = () => {
    fetch(
      `https://ecoki.net/processus_E_api/api/list_candidat?filtre=Tous&search=${candidate}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data[0]);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(nom);
  console.log(candidate);
  return (
    <Container>
      <div className="back" onClick={handleClick}>
        <MdArrowBack size={26} />
        <span>Retour sur la liste des candidats</span>
      </div>
      <Row className="card_candidat row">
        <Col lg={4} className="pictures">
          <img
            src={/* candidat.photoCandidat */ avatar}
            alt="avatar"
            className="candidat"
          />
          <img
            src={/* candidat.logo_parti */ avatar}
            alt="avatar"
            className="parti"
          />
          <p>{candidat.parti_politique}</p>
        </Col>
        <Col>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Nom</td>
                <td>{candidat.nom}</td>
              </tr>
              <tr>
                <td>Numero</td>
                <td>{candidat.numeroCandidat}</td>
              </tr>
              <tr>
                <td>Sexe</td>
                <td>{candidat.sexe}</td>
              </tr>
              <tr>
                <td>Programme</td>
                <td>{candidat.fileProgramme}</td>
              </tr>
              <tr>
                <td>CV</td>
                <td>{candidat.fileCV}</td>
              </tr>
              <tr>
                <td>Scrutin</td>
                <td>{candidat.scrutin}</td>
              </tr>
              <tr>
                <td>Fondateur du parti</td>
                <td>{candidat.fondateur_parti}</td>
              </tr>
              <tr>
                <td>Province</td>
                <td>{candidat.province}</td>
              </tr>
              <tr>
                <td>Circonscription</td>
                <td>{candidat.circonscription}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
/** "nom": "Felix tshisekedi",
      "photoCandidat": "portrait-of-expressive-young-man-wearing-formal-suit(1)-6377c66c2c871.jpeg",
      "numeroCandidat": "20",
      "fileProgramme": "certificat d'aptitude-6377c66c2c60e.pdf",
      "sexe": "Masculin",
      "fileCV": "BARREAU DE MAI-NDOMBE-1-6377c66c2b0ed.pdf",
      "scrutin": "Provincial",
      "parti_politique": "ECIDE",
      "logo_parti": "61MY-quvOvL-637792bad6eaa.jpeg",
      "fondateur_parti": "MARTIN FAYULU",
      "province": "National",
      "circonscription": */
export default OneCandidatScreen;
