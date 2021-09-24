import React, {useEffect} from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { connect } from 'react-redux';
import { requestDevices } from '../../redux/devices/devices.actions';
import { createStructuredSelector } from 'reselect';
import { selectDevicesData } from '../../redux/devices/devices.selectors';

function Devices({ devicesData, onDevicesMount }) {
  useEffect(() => {
    const interval = setInterval(() => {
      onDevicesMount();
    }, 5000);

    return () => clearInterval(interval); //cleanup while componenWilltUnmount
  }, [onDevicesMount]);

  const useStyles = makeStyles(() => ({
    topDevices: {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },
    bottomDevices: {
      display: 'flex', 
      flexDirection: 'row-reverse', 
      justifyContent: 'space-between'
    },
    avatar: {
      backgroundColor: 'white',
      padding: '10px', 
      margin: '12px 0px', 
      color: 'tomato'
    }
  }));

  const classes = useStyles();

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={4} md={6} className={classes.topDevices}>
        {
          devicesData
            .filter((device, idx) => idx < Math.floor(devicesData.length/2))
            .map(device => <Avatar key={device.id} className={classes.avatar}>{device.name[0]}</Avatar>)
        }
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1' style={{fontFamily: 'Inter'}}>{devicesData.length}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1' style={{fontWeight:'bold'}}>DEVICES</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1' style={{fontWeight:'bold'}}>ONLINE</Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={6} className={classes.bottomDevices}>
        {
          devicesData
            .filter((device, idx) => idx >= Math.floor(devicesData.length/2))
            .map(device => <Avatar key={device.id} className={classes.avatar}>{device.name[0]}</Avatar>)
        }
      </Grid>
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector(
  {
    devicesData: selectDevicesData,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onDevicesMount: () => dispatch(requestDevices())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Devices);