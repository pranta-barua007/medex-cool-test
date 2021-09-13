import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import Login from './pages/login.page';
import Profile from './pages/profile.page';

function Routes({ currentUser, onRoutesMountCheckUserSession }) {
  useEffect(() => {
    onRoutesMountCheckUserSession();
  }, [onRoutesMountCheckUserSession]);

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

const mapDispatchToProps = (dispatch) => (
  {
    onRoutesMountCheckUserSession: () => dispatch(checkUserSession())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);