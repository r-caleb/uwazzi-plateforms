import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResultatProvincial = ({ province, candidate, idCandidat }) => {
  const [provinceResult, setProvinceResult] = useState([]);

  useEffect(() => {
    fetch(
      `http://de-vie.com/processus_E_api/api/resultats/candidat_province?id_candidat=${idCandidat}&id_province=${province.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvinceResult(data.ResultatProv);
      });
  }, []);
  return (
    <Link
      to={`/center/result/lists/${province.id},${idCandidat},${province.nom}`}
    >
      <Row className="data">
        <Col>{province.nom}</Col>
        <Col><p style={{ color: "#00A2DD" }}>
            {provinceResult.total} %{" "}
            <span>({provinceResult.total_voix} voix)</span>
          </p></Col>
      </Row>
    </Link>
  );
};

export default ResultatProvincial;
