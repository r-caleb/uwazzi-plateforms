import React from "react";
import "./centerScreen.scss";
import { Col, Container, Form, Row } from "react-bootstrap";

const CenterScreen = () => {
  return (
    <div className="container__center">
      <Container>
        <Row className="center_title title">
          <Col>Kinshasa</Col>
          <Col>300 centres électoraux</Col>
        </Row>
        <Row className="center_title title">
          <Col>Commune de </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>Selectionner une commune</option>
              <option value="1">Bandalungwa</option>
              <option value="2">Barumbu</option>
              <option value="3">Bumbu</option>
              <option value="3">Gombe</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="town__center">
          <div className="quarter">Kauka</div>
          <Row className="data_center">
            <Col>Centre 1</Col>
            <Col>Ecole saint Jean Berckmans</Col>
            <Col>Avenue des écoliers N°13 Réf: École de navigation</Col>
          </Row>
          <Row className="data_center">
            <Col>Centre 2</Col>
            <Col>Ecole saint Jean Berckmans</Col>
            <Col>Avenue des écoliers N°13 Réf: École de navigation</Col>
          </Row>
          <Row className="data_center">
            <Col>Centre 3</Col>
            <Col>Ecole saint Jean Berckmans</Col>
            <Col>Avenue des écoliers N°13 Réf: École de navigation</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CenterScreen;
