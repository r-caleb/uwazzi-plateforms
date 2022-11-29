import React, { useState, useEffect } from "react";
import "./centerScreen.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";

const CenterScreen = () => {
  const [activeElement, setActiveElement] = useState(
    "Selectionner un district"
  );
  const [centers, setCenter] = useState([]);
  const province = useParams();
  let nomProvince = province.province;
  const fetchData = () => {
    fetch("https://ecoki.net/processus_E_api/api/list_centre?search&id")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCenter(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const centerProvince = centers.filter(
    (center) => center.province === nomProvince
  );
  const provinceCenter = centerProvince.filter((center) =>
    activeElement !== "Selectionner un district"
      ? center.circonscription === activeElement
      : true
  );

  const handleSelect = (e) => {
    setActiveElement(e.target.value);
  };
  const categoryAll = centerProvince.map((center) => center.circonscription);
  var categories = [...new Set(categoryAll)];
  return (
    <div className="container__center">
      <Container>
        <Row className="center_title title">
          <Col>{nomProvince}</Col>
          <Col>{provinceCenter.length} centres électoraux</Col>
        </Row>
        <Row className="center_title title">
          <Col>Circonscription de </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={handleSelect}
            >
              <option>Selectionner un district</option>
              {categories.map((center) => (
                <option value={center} key={center}>
                  {center}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        {provinceCenter.map((center) => (
          <div className="town__center" key={center.nomCentre}>
            <div className="quarter">{center.territoire}</div>
            <div className="data_center">
              <Row>
                <Col><strong>{center.nomCentre}</strong></Col>
                <Col>{center.NbrDesBureaux} bureaux de votes</Col>
                <Col>Avenue des écoliers N°13 Réf: École de navigation</Col>
              </Row>
              <Row>
                <Col className="total_stat">
                  <div className="stat_enrolement">
                    <p>Total :</p>
                    <p>{center?.nbrElecteur || 0} enrolés</p>
                  </div>
                  <div>
                    <Chart
                      type="donut"
                      width={240}
                      series={[
                        center?.nbrHommes ? parseInt(center?.nbrHommes) : 1,
                        center?.nbrFemmes ? parseInt(center?.nbrFemmes) : 1,
                      ]}
                      options={{
                        labels: ["Hommes", "Femmes"],
                      }}
                    />
                  </div>
                </Col>
                <Col className="total_stat">
                  <div>
                    <p>Hommes :</p>
                    <span>{center?.nbrHommes || 0} enrolés</span>
                  </div>
                </Col>
                <Col className="total_stat">
                  <div>
                    <p>Femmes :</p>
                    <span>{center?.nbrFemmes || 0} enrolées</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default CenterScreen;
