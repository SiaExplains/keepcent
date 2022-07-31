import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
};

// Create GlobalStateContext
export const GlobalContext = createContext(initialState);

// Provide Component (HOC)
export const GlobalProvider = ({ children }) => {
  const [state, disptach] = useReducer(AppReducer, initialState);

  // Actions

  function deleteTransaction(id) {
    disptach({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    disptach({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
