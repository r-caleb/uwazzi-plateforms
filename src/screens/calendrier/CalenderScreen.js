// import { Card, Col, Container, Row } from 'react-bootstrap';
// import calendrier from './calendrier.png';
import "./calendar.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
const date = `30 Mars 2023`;
export default function AutoGridNoWrap() {
  return (
    <Box sx={{ display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    }}>
  
      <StyledPaper
        sx={{
          my: 1,
          // mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography variant="h1">{date}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>

      

      <StyledPaper
        sx={{
          my: 1,
          // mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography  variant="h1">{date}</Typography>
          </Grid>
          <Grid item xs>
            <Typography >{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>


      <StyledPaper
        sx={{
          my: 1,
          // mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography variant="h1">{date}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>


      <StyledPaper
        sx={{
          my: 1,
          // mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography variant="h1">{date}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
