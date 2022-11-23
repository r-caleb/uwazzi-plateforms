import React, { useEffect, useState } from "react";
import "./centerScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProvinceScreen = () => {
  const [provinces, setProvince] = useState([]);
  const [totalCentre, setTotalCentre] = useState("0");

  const fetchData = () => {
    fetch("https://ecoki.net/processus_E_api/api/list_province?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvince(data.list);
      });
  };
  const fetchCenterNumber = () => {
    fetch("https://ecoki.net/processus_E_api/api/list_centre?search&id")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTotalCentre(data.total_centre);
      });
  };

  useEffect(() => {
    fetchData();
    fetchCenterNumber();
  }, []);

  return (
    <div className="container__center">
      <h2>Provinces</h2>
      <Container>
        <h3>
          Totals des centres : <span>{totalCentre}</span>
        </h3>
        <Row className="center_title">
          <Col>Province</Col>
          <Col>Centre</Col>
        </Row>
        {provinces.map((province) => (
          <Link to={`/center/lists/${province.nom}`}>
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
