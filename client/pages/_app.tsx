import "../src/styles/styles.scss";
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import {
  ACTION_CATEGORY_ADD,
  ACTION_CATEGORY_DELETE,
  ACTION_TRANSACTION_ADD,
  ACTION_TRANSACTION_DELETE,
} from "../src/context/actionHelper";
import { Transaction } from "../src/types/transaction";
import { Category } from "../src/types/category";
import { loadStateFromLocalstorage } from "../src/common/localstorageHelper";
import AppReducer from "../src/context/AppReducer";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Initial State
const getInitialState = (): GlobalState => {
  const localstorageState = loadStateFromLocalstorage();
  if (localstorageState) {
    return localstorageState;
  }
  return {
    transactions: [],
    categories: [],
  };
};

export type GlobalState = {
  transactions: Transaction[];
  categories: Category[];
};

export type GlobalContextType = {
  transactions: Transaction[];
  categories: Category[];
  addTransaction: (transaction: Omit<Transaction, "id">) => void;
  deleteTransaction: (id: number) => void;
  addCategory: (category: Omit<Category, "id">) => void;
  deleteCategory: (id: number) => void;
};
// Create GlobalStateContext
export const AppContext = createContext<GlobalContextType>({
  transactions: getInitialState().transactions,
  categories: getInitialState().categories,
  addTransaction: () => {},
  deleteTransaction: () => {},
  addCategory: () => {},
  deleteCategory: () => {},
});

export function useAppContext() {
  return useContext<GlobalContextType>(AppContext);
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const [state, disptach] = useReducer(AppReducer, getInitialState());

  // Actions
  function deleteTransaction(id: number) {
    disptach({
      type: ACTION_TRANSACTION_DELETE,
      payload: id,
    });
  }

  function addTransaction(transaction: Omit<Transaction, "id">) {
    disptach({
      type: ACTION_TRANSACTION_ADD,
      payload: transaction,
    });
  }

  function deleteCategory(id: number) {
    disptach({
      type: ACTION_CATEGORY_DELETE,
      payload: id,
    });
  }

  function addCategory(category: Omit<Category, "id">) {
    disptach({
      type: ACTION_CATEGORY_ADD,
      payload: category,
    });
  }

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        categories: state.categories,
        addTransaction,
        deleteTransaction,
        addCategory,
        deleteCategory,
      }}
    >
      {getLayout(<Component {...pageProps} />)}
    </AppContext.Provider>
  );
}
