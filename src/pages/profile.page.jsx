import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper, Grid} from '@material-ui/core';

import Devices from '../components/devices/devices.component';
import BottomNav from '../components/bottom-nav/bottom-nav.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    boxShadow: '0 0 28px rgb(0 0 0 / 4%)',
    background: 'none',
    fontFamily: 'Inter',
    color: 'white'
  },
  container: {
    padding: 0,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Devices />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <BottomNav />
        </Grid>
      </Grid>
    </Container>
  );
}