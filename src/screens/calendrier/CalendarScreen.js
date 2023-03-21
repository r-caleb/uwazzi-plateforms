import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./calendar.scss";
import calendrier from "./calendrier.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import moment from "moment/min/moment-with-locales";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  width: 950,
  color: theme.palette.text.primary,
}));
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
const date = `30 Mars 2023`;
const CalendarScreen = () => {
  const [input, setInput] = useState("");
  const [calendar, setCalendar] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetch(`https://de-vie.com/processus_E_api/api/calend`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCalendar(data.calend);
      });
  }, []);
  console.log(calendar);
  moment.locale("fr");
  return (
    <div className="calendar">
      <Row>
        <Col xs={7} md={7}>
          <h3>
            <Link to="/">Accueil</Link> {`>`}
            <em style={{ color: "#00A2DD" }}> Actualités</em>
          </h3>
        </Col>
        <Col>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Chercher un événement"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <AiOutlineSearch size={22} />
            </button>
          </form>
        </Col>
      </Row>
      <hr />
      <h1>Calendrier électoral</h1>
      <div className="image">
        <img src={calendrier} alt="calendrier" />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {calendar?.map((calend) => (
          <StyledPaper
            sx={{
              my: 1,
              p: 2,
            }}
            key={calend.id}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Typography variant="h1" className="date">
                  {moment(calend.date).format("Do MMMM YYYY")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="py-1" variant="h1">
                  Evénement
                </Typography>
                <Typography className="py-1">{calend.titre}</Typography>
              </Grid>
            </Grid>
          </StyledPaper>
        ))}
      </Box>
    </div>
  );
};

export default CalendarScreen;
