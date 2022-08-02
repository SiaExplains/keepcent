import React, { createContext, ReactElement, ReactNode, useReducer } from 'react';
import {
  loadStateFromLocalstorage,
  storeStateIntoLocalstorage
} from '../common/localstorageHelper';
import { Transaction } from '../types/transaction';
import { ACTION_TRANSACTION_ADD, ACTION_TRANSACTION_DELETE } from './actionHelper';
import AppReducer from './AppReducer';

// Initial State
const getInitialState = (): GlobalState => {
  const localstorageState = loadStateFromLocalstorage();
  if (localstorageState) {
    return localstorageState;
  }
  return {
    transactions: []
  };
};

export type GlobalState = {
  transactions: Transaction[];
};

export type GlobalContextType = {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
};
// Create GlobalStateContext
export const GlobalContext = createContext<GlobalContextType>({
  transactions: getInitialState().transactions,
  deleteTransaction: () => {},
  addTransaction: () => {}
});

type GlobalProviderProps = {
  children: ReactNode;
};

// Provide Component (HOC)
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, disptach] = useReducer(AppReducer, getInitialState());

  // Actions

  function deleteTransaction(id: number) {
    disptach({
      type: ACTION_TRANSACTION_DELETE,
      payload: id
    });
  }

  function addTransaction(transaction: Omit<Transaction, 'id'>) {
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
