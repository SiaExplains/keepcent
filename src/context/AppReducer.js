export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((item) => item.id !== action.payload)
      };
    case 'ADD_TRANSACTION':
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
