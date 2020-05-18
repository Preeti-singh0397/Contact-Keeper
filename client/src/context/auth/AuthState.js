import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESSFULL,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialStates = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  };
  const [state, dispatch] = useReducer(authReducer, initialStates);

  // Load User

  // Register User

  //   Login User

  //   Logout

  //   Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
