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

  const loadUser = () => console.log("load User");

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.res.data.mes
      });
    }
  };

  //   Login User
  const login = () => console.log("load User");

  //   Logout
  const logout = () => console.log("load User");

  //   Clear Errors
  const clearErrors = () => console.log("load User");

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
