import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';

import Login from './pages/login.page';
import Profile from './pages/profile.page';

function Routes({ currentUser }) {
  useEffect(() => { //only for testing purpose till now
    console.log('Rerendered in routes')
  },[currentUser])

  return (
    <Switch>
      <Route exact path='/' render={() => 
        currentUser ? (
          <Redirect to={`profile/${currentUser.now}`} /> //tere is no 'id' in response from server, using 'now' instead
        ) : (
          <Login />
        )
      } />
      <Route path='/profile/:id' render={() => 
        currentUser ? (
          <Profile />
        ) : (
          <Redirect to='/' />
        )
      } />
    </Switch>
  );
}

const mapStateToProps = createStructuredSelector(
  {
      currentUser: selectCurrentUser
  }
);

export default connect(mapStateToProps, null)(Routes);