import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResultGeneral from "../../components/resultGeneral/ResultGeneral";
import "./resultatScreen.scss";

const ResultatScreen = () => {
  const [candidats, setCandidat] = useState([]);
  const [candidatResult, setCandidatResult] = useState([]);

  const fetchData = () => {
    fetch(
      "http://de-vie.com/processus_E_api/api/list_candidat?filtre=Presidentielle&search="
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, [candidats]);
  return (
    <div className="container__resultat">
      <h3>
        <Link to="/">Accueil</Link> {`>`}
        <em style={{ color: "#00A2DD" }}> Résultats</em>
      </h3>
      <hr />
      <Container>
        <h3>
          Totals des candidats : <span>{candidats.length}</span>
        </h3>
        {candidats.map((candidat) => (
          <ResultGeneral candidat={candidat} key={candidat.nom} />
        ))}
      </Container>
    </div>
  );
};

export default ResultatScreen;
