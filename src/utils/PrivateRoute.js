import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from '../context/Auth';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthState();

  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: rest.location } }} />
      )}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
