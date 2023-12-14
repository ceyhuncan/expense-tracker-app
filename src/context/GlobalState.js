import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial State.Any global state will go to this object.
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
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

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions
    }}>
      {children}
    </GlobalContext.Provider>
  )

}
