// state.js
import React, { createContext, useReducer } from "react";

const initialState = {
  login: false,
  roomName: null
};

const StateContext = createContext(initialState);

function stateReducer(state:any, action:any) {
  switch (action.type) {
    case "login":
      return { ...state, login: true };
    case "logout":
      return { ...state, login: false };
    default:
      return state;
  }
}

function StateProvider({ children }: any) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={{...state, dispatch}}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
