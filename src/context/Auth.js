import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const authInitialState = {
  isAuthenticated: Boolean(localStorage.getItem('token')),
  token: localStorage.getItem('token') || null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useAuthState = () => {
  const { state } = useContext(AuthContext);

  if (state === undefined) {
    throw new Error('useAuthState must be used within AuthProvider');
  }

  return state;
};

const useAuthDispatch = () => {
  const { dispatch } = useContext(AuthContext);

  if (dispatch === undefined) {
    throw new Error('useAuthDispatch must be used within AuthProvider');
  }

  return dispatch;
};

export { AuthProvider, useAuthState, useAuthDispatch };
