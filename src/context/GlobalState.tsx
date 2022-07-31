import React, { createContext, ReactElement, ReactNode, useReducer } from 'react';
import { ACTION_TRANSACTION_ADD, ACTION_TRANSACTION_DELETE } from './actionHelper';
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
export const GlobalContext = createContext<any>(initialState);

type GlobalProviderProps = {
  children: ReactNode;
};

// Provide Component (HOC)
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, disptach] = useReducer(AppReducer, initialState);

  // Actions

  function deleteTransaction(id: any) {
    disptach({
      type: ACTION_TRANSACTION_DELETE,
      payload: id
    });
  }

  function addTransaction(transaction: any) {
    disptach({
      type: ACTION_TRANSACTION_ADD,
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
