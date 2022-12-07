import React, { useEffect, useState } from "react";
import "./statScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
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
    arr = arr.filter((item) => item !== "RDC" && item !== "National");
    arr.sort();
  }

  return (
    <div className="stat">
      <Container>
        <h3 >
          <Link to="/">Accueil</Link> >
          <em style={{ color: "#00A2DD" }}> Statistiques</em>
        </h3>
        <hr/>
        <Row>
          <Col className="total_stat">
            <div className="stat_enrolement">
              <p>Total :</p>
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
              <p>Hommes :</p>
              <p>{stat?.total_pays?.nombre_total_homme || 0} enrolés</p>
            </div>
          </Col>
          <Col className="total_stat">
            <div className="stat_enrolement">
              <p>Femmes :</p>
              <p>{stat?.total_pays?.nombre_total_femme || 0} enrolées</p>
            </div>
          </Col>
        </Row>
        <Row className="bar_container total_stat">
          <Chart
            type="donut"
            width={"100%"}
            height={550}
            series={[
              stat?.bas_uele?.total ? stat?.bas_uele?.total : 0,
              stat?.haut_katanga?.total ? stat?.haut_katanga?.total : 0,
              stat?.haut_lomami?.total ? stat?.haut_lomami?.total : 0,
              stat?.haut_uele?.total ? stat?.haut_uele?.total : 0,
              stat?.ituri?.total ? stat?.ituri?.total : 0,
              stat?.Kasai?.total ? stat?.Kasai?.total : 0,
              stat?.Kasai_central?.total ? stat?.Kasai_central?.total : 0,
              stat?.Kasai_oriental?.total ? stat?.Kasai_oriental?.total : 0,
              stat?.kinshasa?.total ? stat?.kinshasa?.total : 0,
              stat?.Kongo_Central?.total ? stat?.Kongo_Central?.total : 0,
              stat?.kwango?.total ? stat?.kwango?.total : 0,
              stat?.kwilu?.total ? stat?.kwilu?.total : 0,
              stat?.lomami?.total ? stat?.lomami?.total : 0,
              stat?.lualaba?.total ? stat?.lualaba?.total : 0,
              stat?.mai_ndombe?.total ? stat?.mai_ndombe?.total : 0,
              stat?.maniem?.total ? stat?.maniem?.total : 0,
              stat?.mongala?.total ? stat?.mongala?.total : 0,
              stat?.Nord_kivu?.total ? stat?.Nord_kivu?.total : 0,
              stat?.Nord_ubangi?.total ? stat?.Nord_ubangi?.total : 0,
              stat?.sankuru?.total ? stat?.sankuru?.total : 0,
              stat?.sud_kivu?.total ? stat?.sud_kivu?.total : 0,
              stat?.sud_ubangi?.total ? stat?.sud_ubangi?.total : 0,
              stat?.tanganyika?.total ? stat?.tanganyika?.total : 0,
              stat?.tshopo?.total ? stat?.tshopo?.total : 0,
              stat?.tshuapa?.total ? stat?.tshuapa?.total : 0,
              stat?.Equateur?.total ? stat?.Equateur?.total : 0,
            ]}
            options={{
              labels: arr,
              title: {
                text: "Statistiques par provinces",
                // align:"center",
              },
              colors: [
                "#FF0000",
                "#008000",
                "#000000",
                "#00FFFF",
                "#FF00FF",
                "#808080",
                "#00FF00",
                "#000080",
                "#008080",
                "#FFFF00",
                "#C0C0C0",
                "#800080",
                "#808000",
                "#A0522D",
                "#FF6347",
                "#87CEEB",
                "#ffbfff",
                "#7396ff",
                "#3600d9",
                "#90EE90",
                "#F0E68C",
                "#20B2AA",
                "#FFEFD5",
                "#FFA500",
                "#8B4513",
                "#ff99ff",
              ],
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        fontSize: 16,
                        color: "#f90000",
                      },
                    },
                  },
                },
              },

              dataLabels: {
                enabled: true,
              },
            }}
          />
        </Row>
        <Row>
          <Link to="/province/stat/lists" className="voir_stats">
            Voir les Statistiques par centre
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default StatScreen;
