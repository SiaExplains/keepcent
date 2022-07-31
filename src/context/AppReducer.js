import { ACTION_TRANSACTION_ADD, ACTION_TRANSACTION_DELETE } from './actionHelper';

export default (state, action) => {
  switch (action.type) {
    case ACTION_TRANSACTION_DELETE:
      return {
        ...state,
        transactions: state.transactions.filter((item) => item.id !== action.payload)
      };
    case ACTION_TRANSACTION_ADD:
      const { transactions } = state;
      const { text, amount } = action.payload;
      let lastId = 1;
      if (transactions && transactions.length > 0) {
        lastId = transactions[transactions.length - 1].id;
      }

      return {
        ...state,
        transactions: [...state.transactions, { id: lastId + 1, text, amount: Number(amount) }]
      };
    default:
      return state;
  }
};
