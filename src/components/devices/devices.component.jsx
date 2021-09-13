import React, {useEffect} from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';

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

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item xs={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {
          devicesData
            .filter((device, idx) => idx < Math.floor(devicesData.length/2))
            .map(device => <Avatar key={device.id} style={{backgroundColor: 'white', padding: '10px', margin: '4px', color: 'tomato'}}>{device.name[0]}</Avatar>)
        }
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h1'>{devicesData.length}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1'> DEVICES</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1'> ONLINE</Typography>
      </Grid>
      <Grid item xs={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {
          devicesData
            .filter((device, idx) => idx >= Math.floor(devicesData.length/2))
            .map(device => <Avatar key={device.id} style={{backgroundColor: 'white', padding: '10px', margin: '4px', color: 'tomato'}}>{device.name[0]}</Avatar>)
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