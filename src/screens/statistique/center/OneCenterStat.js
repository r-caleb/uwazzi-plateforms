import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./centerScreen.scss";
import Chart from "react-apexcharts";

const OneCenterStat = () => {
  const [stat, setStat] = useState([]);
  const id = useParams();
  let idCenter = id.id.split(",")[0];
  let nomProvince = id.id.split(",")[1];

  const fetchData = () => {
    fetch(
      `https://ecoki.net/processus_E_api/api/list_centre?search=${idCenter}&id`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStat(data.data[0]);
      });
  };
  const navigateTo = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = () => {
    navigateTo(`/center/lists/${nomProvince}`);
  };
  return (
    <Container>
      <div className="back">
        <MdArrowBack size={26} onClick={handleClick} />
        <span onClick={handleClick}>Retour</span>
      </div>
      <Row className="card_center row">
        <Col className="pictures">
          <Chart
            type="donut"
            width={325}
            series={[parseInt(stat?.nbrHommes), parseInt(stat?.nbrFemmes)]}
            options={{
              labels: ["Hommes", "Femmes"],
              legend: {
                position: "top",
              },
              title: {
                text: "Statistiques des enrolés",
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
        <Col>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Code</td>
                <td>{stat?.codeDucentre}</td>
              </tr>
              <tr>
                <td>Centre</td>
                <td>{stat?.nomCentre}</td>
              </tr>
              <tr>
                <td>Commune</td>
                <td>{stat?.territoire}</td>
              </tr>
              <tr>
                <td>Circonscription</td>
                <td>{stat?.circonscription}</td>
              </tr>
              <tr>
                <td>Province</td>
                <td>{stat?.province}</td>
              </tr>
              <tr>
                <td>Bureaux des votes</td>
                <td>{stat?.NbrDesBureaux}</td>
              </tr>
              <tr>
                <td>Nombres d'électeurs</td>
                <td>{stat?.nbrHommes}</td>
              </tr>
              <tr>
                <td>Nombres d'électrices</td>
                <td>{stat?.nbrFemmes}</td>
              </tr>
              <tr>
                <td>Nombres Total d'électeurs</td>
                <td>{stat?.nbrElecteur}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OneCenterStat;
