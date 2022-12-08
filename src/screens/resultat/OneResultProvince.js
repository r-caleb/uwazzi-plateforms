import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./resultatScreen.scss";

const OneResultProvince = () => {
  const [provinces, setProvince] = useState([]);
  const [candidatResult, setCandidatResult] = useState([]);
  const [candidats, setCandidat] = useState([]);
  const [provinceResult, setProvinceResult] = useState([]);
  const id = useParams();
  const idCandidat = id.id;
  const fetchData = () => {
    fetch("https://ecoki.net/processus_E_api/api/list_province?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvince(data.data);
      });
  };

  const fetchResult = () => {
    fetch(
      `https://ecoki.net/processus_E_api/api/resultats/candidat_pays?id_candidat=${idCandidat}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidatResult(data.datas);
      });
  };

  useEffect(() => {
    fetchData();
    fetchResult();
    fetch(
      "https://ecoki.net/processus_E_api/api/list_candidat?filtre=Presidentielle&search="
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data);
      });
  }, []);
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/resultats/data");
  };
  const candidate = candidats.filter(
    (candidat) => candidat.id && candidat.id === idCandidat
  );
  console.log(candidate);
  return (
    <Container>
      <h3 className="h3">
        <Link to="/">Accueil</Link> >
        <Link to="/resultats/data"> Résultats</Link> >
        <em style={{ color: "#00A2DD" }}> Provinces</em>
      </h3>
      <hr />
      <Row className="card_candidat_result row">
        <Col lg={3} className="pictures">
          <img
            src={`http://elektion.ecoki.net/web/assets/images/PhotoCandidats/${candidate[0]?.photoCandidat}`}
            alt="avatar"
            className="candidat"
          />
          <p>{candidate[0]?.nom}</p>
          <div className="parti_politique">
            <img
              src={`http://elektion.ecoki.net/web/assets/images/logoParti/${candidate[0]?.logo_parti}`}
              alt="avatar"
              className="parti"
            />
            <p>{candidate[0]?.parti_politique}</p>
          </div>
          <p style={{ color: "#00A2DD" }}>
            {candidatResult.total} %{" "}
            <span>({candidatResult.total_voix} voix)</span>
          </p>
        </Col>
        <Col className="tab">
          {provinces?.map((province) => (
            <Link
              to={`/center/result/lists/${province.id},${candidate[0]?.id},${province.nom}`}
              key={province.id}
            >
              <Row className="data">
                <Col>{province.nom}</Col>
              </Row>
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OneResultProvince;
