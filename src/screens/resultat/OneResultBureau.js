import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Chart from "react-apexcharts";

const OneResultBureau = () => {
  const [bureaux, setBureau] = useState([]);
  const [bureaux2, setBureau2] = useState([]);
  const center = useParams();
  let idCenter = center.center.split(",")[0];
  let idCandidat = center.center.split(",")[1];
  let idProvince = center.center.split(",")[2];
  let nomCenter = center.center.split(",")[3];
  let nomProvince = center.center.split(",")[4];

  const fetchData = () => {
    fetch(
      `http://de-vie.com/processus_E_api/api/resultats/candidat_centre/bureau?id_candidat=${idCandidat}&id_province=${idProvince}&id_centre=${idCenter}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBureau(data);
      });
  };
  const fetchData2 = () => {
    fetch(
      `http://de-vie.com/processus_E_api/api/resultats/candidat_centre/bureau?id_candidat=${idCandidat}&id_province=${idProvince}&id_centre=${idCenter}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBureau2(data.data);
      });
  };
  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);
  console.log(bureaux2);
  const bureauxFilter = bureaux2.map((bureau) => {
    return parseInt(bureau.NombreVoix);
  });
  const bureauxNameFilter = bureaux2.map((bureau) => { 
    return bureau.NomBureau;
  });
  return (
    <Container>
      <h3 className="h3">
        <Link to="/resultats/data"> Résultats</Link> {`>`}
        <Link to={`/resultats/data/${idCandidat}`}> Provinces</Link> {`>`}
        <Link
          to={`/center/result/lists/${idProvince},${idCandidat},${nomProvince}`}
        >
          Centres
        </Link>
        {`>`}<em style={{ color: "#00A2DD" }}> Bureaux</em>
      </h3>
      <hr />
      <Row className="card_candidat_result row">
        <Col className="pictures">
          <p>
            Total des voix : {bureaux?.total_voix} ({bureaux?.total} %)
          </p>
          <Chart
            type="donut"
            width={300}
            series={[...bureauxFilter]}
            options={{
              labels: [...bureauxNameFilter],
              legend: {
                position: "top",
              },
              title: {
                text: "Résultats par bureau de vote",
                align: "center",
              },
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
        </Col>
        <Col className="tab">
          <p>Les différents bureaux de vote du centre : {nomCenter}</p>
          {bureaux?.data?.map((bureau) => (
            <Row className="data" key={bureau.NomBureau}>
              <Col>{bureau.NomBureau}</Col>
              <Col>{bureau.NombreVoix} voix</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OneResultBureau;
