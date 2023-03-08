import React, { useEffect, useState } from "react";
import "./candidatScreen.scss";
import { Container, Row, Col, Table } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
import avatar from "../home/assets/rc.jpg";
import { useNavigate, useParams } from "react-router-dom";

const OneCandidatScreen = () => {
  const [candidat, setCandidat] = useState([]);
  const nom = useParams();
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/candidat/lists");
  };
  let candidate = nom.nom.slice(0, -1);

  useEffect(() => {
    fetch(
      `http://www.de-vie.com/processus_E_api/api/list_candidat?filtre=Tous&search=${candidate}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data[0]);
      });
  }, [candidate]);
  return (
    <Container>
      <div className="back">
        <MdArrowBack size={26} onClick={handleClick} />
        <span onClick={handleClick}>Retour sur la liste des candidats</span>
      </div>
      <Row className="card_candidat row">
        <Col lg={4} className="pictures">
          <img
            src={`http://elektion.ecoki.net/web/assets/images/PhotoCandidats/${candidat.photoCandidat}`}
            alt="candidat"
            className="candidat"
          />
          <p className="name">{candidat.nom}</p>
          <div className="parti_politique">
            <img
              src={`http://elektion.ecoki.net/web/assets/images/logoParti/${candidat.logo_parti}`}
              alt="parti_politique"
              className="parti"
            />
            <p>{candidat.parti_politique}</p>
          </div>
        </Col>
        <Col className="tab">
          <Table hover>
            <tbody>
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
export default OneCandidatScreen;
