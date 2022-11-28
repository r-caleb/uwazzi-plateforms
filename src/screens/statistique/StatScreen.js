import React, { useEffect, useState } from "react";
import "./statScreen.scss";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const StatScreen = () => {
  const [stat, setStat] = useState([]);
  const [province, setProvince] = useState([]);
  let arr = [];
  const fetchCenterNumber = () => {
    fetch("https://ecoki.net/processus_E_api/api/list_province?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvince(data.data);
      });
  };

  const fetchData = () => {
    fetch("https://ecoki.net/processus_E_api/api/statistique")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStat(data);
      });
  };

  useEffect(() => {
    fetchData();
    fetchCenterNumber();
  }, []);
  for (let i = 0; i < province.length; i++) {
    arr.push(province[i].nom);
    arr.sort();
  }

  console.log(stat);
  return (
    <div className="stat">
      <Tabs
        defaultActiveKey="enrolés"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="enrolés" title="Enrolements">
          <Container>
            <Row>
              <Col className="total_stat">
                <div className="stat_enrolement">
                  <p>Total </p>
                  <p>{stat?.total_pays?.nombre_total_inscrit || 0} enrolés</p>
                </div>
                <div>
                  <Chart
                    type="donut"
                    width={240}
                    series={[
                      stat?.total_pays?.nombre_total_homme
                        ? parseInt(stat?.total_pays?.nombre_total_homme)
                        : 1,
                      stat?.total_pays?.nombre_total_femme
                        ? parseInt(stat?.total_pays?.nombre_total_femme)
                        : 1,
                    ]}
                    options={{
                      labels: ["Hommes", "Femmes"],
                    }}
                  />
                </div>
              </Col>
              <Col className="total_stat">
                <div className="stat_enrolement">
                  <p>Hommes</p>
                  <p>{stat?.total_pays?.nombre_total_homme || 0} enrolés</p>
                </div>
              </Col>
              <Col className="total_stat">
                <div className="stat_enrolement">
                  <p>Femmes</p>
                  <p>{stat?.total_pays?.nombre_total_femme || 0} enrolées</p>
                </div>
              </Col>
            </Row>
            <Row className="bar_container total_stat">
              <Chart
                type="bar"
                width={"100%"}
                height={500}
                series={[
                  {
                    name: "Hommes",
                    data: [
                      512000, 220000, 111000, 990000, 968000, 512000, 520000,
                      511000, 590000, 568000, 412000, 120000, 111000, 990000,
                      968000, 512000, 520000, 511000, 590000, 568000, 968000,
                      512000, 520000, 511000, 590000, 568000,
                    ],
                  },
                  {
                    name: "Femmes",
                    data: [
                      412000, 120000, 111000, 990000, 968000, 512000, 520000,
                      511000, 590000, 568000, 412000, 120000, 111000, 990000,
                      968000, 512000, 520000, 511000, 590000, 568000, 968000,
                      512000, 520000, 511000, 590000, 568000,
                    ],
                  },
                ]}
                options={{
                  title: {
                    text: "Statistique des enrôlements par province",
                    style: {
                      fontSize: "20",
                    },
                  },
                  chart: {
                    stacked: true,
                  },
                  xaxis: {
                    categories: arr,
                  },
                }}
              />
            </Row>
            <Row>
              <Link to="/province/lists" className="voir_stats">
                Voir les Statistiques par centre
              </Link>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="résultats" title="Résultats">
          Résultats
        </Tab>
      </Tabs>
    </div>
  );
};

export default StatScreen;
