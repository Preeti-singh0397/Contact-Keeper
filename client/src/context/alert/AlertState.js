import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import AlerContext from "./AlertContext";
import alertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialStates = [];
  const [state, dispatch] = useReducer(alertReducer, initialStates);

  //   SetAlert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlerContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlerContext.Provider>
  );
};

export default AlertState;
