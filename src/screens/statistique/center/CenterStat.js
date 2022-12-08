import React, { useState, useEffect } from "react";
import "./centerScreen.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CenterStat = () => {
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
  }, [centers]);
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
  const groupObjectByField = (items, field) => {
    const outputs = {};
    items.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { name: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
  };

  const communeCenter = groupObjectByField(provinceCenter, "territoire");
  return (
    <div className="container__center">
      <h3>
        <Link to="/">Accueil</Link> > <Link to="/stats">Statistiques</Link> >
        <Link to="/province/lists"> Provinces</Link> >
        <em style={{ color: "#00A2DD" }}> Centres</em>
      </h3>
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
        {communeCenter?.map((center) => (
          <div className="town__center" key={center.name}>
            <div>
              <div className="quarter">{center.name}</div>
              <Row className="data_center">
                {center.values.map((item) => (
                  <Link
                    to={`/center/stat/${item.nomCentre},${nomProvince}`}
                    title="Cliquez pour voir plus de détails sur le centre"
                  >
                    <Row className="separate">
                      <Col>
                        <strong>{item.nomCentre}</strong>
                      </Col>
                      <Col>{item.NbrDesBureaux} bureaux de votes</Col>
                      <Col>
                        Avenue des écoliers N°13 Réf: École de navigation
                      </Col>
                    </Row>
                  </Link>
                ))}
              </Row>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default CenterStat;
