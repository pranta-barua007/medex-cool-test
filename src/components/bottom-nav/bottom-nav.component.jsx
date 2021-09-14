import React from 'react';
import {Button, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { requestLogOut } from '../../redux/user/user.actions';
import { requestNotify } from '../../redux/notify/notify.actions';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    container: {
      display: 'flex',
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '10vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  }));

function BottomNav({ logOutStart, notifyStart }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Button variant='contained' onClick={() => notifyStart()} style={{marginRight: '4px'}}>
        Notify
      </Button>
      <Button variant='contained' color='primary' onClick={() => logOutStart()} style={{marginLeft: '4px', backgroundColor: '#292d31', color: 'white'}}>
        Log Out
      </Button>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => (
  {
    logOutStart: () => dispatch(requestLogOut()),
    notifyStart: () => dispatch(requestNotify())
  }
);

export default connect(null, mapDispatchToProps)(BottomNav);