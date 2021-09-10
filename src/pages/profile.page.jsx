import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper, Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    boxShadow: '0 0 28px rgb(0 0 0 / 8%)',
  },
  container: {
    display: 'flex',
    height: '100vh',
    // margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <Typography>Profile page</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}