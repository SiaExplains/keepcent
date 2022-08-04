import { storeStateIntoLocalstorage } from '../common/localstorageHelper';
import { Category } from '../types/category';
import { Transaction } from '../types/transaction';
import {
  ACTION_CATEGORY_ADD,
  ACTION_CATEGORY_DELETE,
  ACTION_TRANSACTION_ADD,
  ACTION_TRANSACTION_DELETE
} from './actionHelper';
import { GlobalState } from './GlobalState';

type ActionType = {
  type: string;
  payload: any;
};

const persistOnClient = (state: GlobalState) => {
  storeStateIntoLocalstorage(state);
  return state;
};

export default (state: GlobalState, action: ActionType) => {
  switch (action.type) {
    case ACTION_TRANSACTION_ADD:
      const { transactions } = state;
      const { text, amount, category } = action.payload;
      let lastTransactionId = 1;
      if (transactions && transactions.length > 0) {
        lastTransactionId = transactions[transactions.length - 1].id;
      }

      return persistOnClient({
        ...state,
        transactions: [
          ...state.transactions,
          { id: lastTransactionId + 1, text, amount: Number(amount), category }
        ]
      });
    case ACTION_TRANSACTION_DELETE:
      return persistOnClient({
        ...state,
        transactions: state.transactions.filter((item: Transaction) => item.id !== action.payload)
      });

    case ACTION_CATEGORY_ADD:
      const { categories } = state;
      const newCategories = categories ?? [];
      const { title, description } = action.payload;
      let lastCatgoryId = 1;
      if (newCategories && newCategories.length > 0) {
        lastCatgoryId = newCategories[newCategories.length - 1].id;
      }

      return persistOnClient({
        ...state,
        categories: [...newCategories, { id: lastCatgoryId + 1, title, description }]
      });

    case ACTION_CATEGORY_DELETE:
      return persistOnClient({
        ...state,
        categories: state.categories.filter((item: Category) => item.id !== action.payload)
      });
    default:
      return persistOnClient(state);
  }
};
