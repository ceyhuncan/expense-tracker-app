import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial State.Any global state will go to this object.
const initialState = {
  transactions: [
    { id: 1, text: 'Gas', amount: -120 },
    { id: 2, text: 'Salary', amount: 4000 },
    { id: 3, text: 'Mortgage', amount: -2000 },
    { id: 4, text: 'Apple Laptop', amount: -1500 }
  ]
}

//Create context. 
export const GlobalContext = createContext(initialState);

// Provider component. 
// Wraps all the components in App.js. 
// Should be exported so we can bring into our App.js. 
// All components inside App.Js will be children of this Global Provider
//used destructring when using chidren

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }
  function addTransaction(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions, deleteTransaction, addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )

}
