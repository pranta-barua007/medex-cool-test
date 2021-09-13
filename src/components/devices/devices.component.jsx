import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography} from '@material-ui/core';

import { connect } from 'react-redux';
import { requestDevices } from '../../redux/devices/devices.actions';
import { createStructuredSelector } from 'reselect';
import { selectDevicesData } from '../../redux/devices/devices.selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    display: 'flex',
    height: '40vh',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 28px rgb(0 0 0 / 8%)',
  },
}));

function Devices({ devicesData, onDevicesMount }) {
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      onDevicesMount();
    }, 5000);

    return () => clearInterval(interval); //cleanup while componentUnmount
  }, [onDevicesMount]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant='h1'>{devicesData.length}</Typography>
          <Typography variant='h2' gutterBottom> Devices</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector(
  {
    devicesData: selectDevicesData
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onDevicesMount: () => dispatch(requestDevices())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Devices);