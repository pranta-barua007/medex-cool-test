import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper, Grid} from '@material-ui/core';

import LoginForm from '../components/login-form/login-form.component';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3} justifyContent='center' alignItems='center'>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <LoginForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}