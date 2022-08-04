import React, { createContext, ReactNode, useReducer } from 'react';
import { loadStateFromLocalstorage } from '../common/localstorageHelper';
import { Category } from '../types/category';
import { Transaction } from '../types/transaction';
import {
  ACTION_CATEGORY_ADD,
  ACTION_CATEGORY_DELETE,
  ACTION_TRANSACTION_ADD,
  ACTION_TRANSACTION_DELETE
} from './actionHelper';
import AppReducer from './AppReducer';

// Initial State
const getInitialState = (): GlobalState => {
  const localstorageState = loadStateFromLocalstorage();
  if (localstorageState) {
    return localstorageState;
  }
  return {
    transactions: [],
    categories: []
  };
};

export type GlobalState = {
  transactions: Transaction[];
  categories: Category[];
};

export type GlobalContextType = {
  transactions: Transaction[];
  categories: Category[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: number) => void;
  addCategory: (transaction: Omit<Category, 'id'>) => void;
  deleteCategory: (id: number) => void;
};
// Create GlobalStateContext
export const GlobalContext = createContext<GlobalContextType>({
  transactions: getInitialState().transactions,
  categories: getInitialState().categories,
  addTransaction: () => {},
  deleteTransaction: () => {},
  addCategory: () => {},
  deleteCategory: () => {}
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

  function deleteCategory(id: number) {
    disptach({
      type: ACTION_CATEGORY_DELETE,
      payload: id
    });
  }

  function addCategory(category: Omit<Category, 'id'>) {
    disptach({
      type: ACTION_CATEGORY_ADD,
      payload: category
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        categories: state.categories,
        addTransaction,
        deleteTransaction,
        addCategory,
        deleteCategory
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
