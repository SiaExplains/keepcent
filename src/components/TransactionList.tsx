import React, { useContext } from 'react';
import { GlobalContext, GlobalContextType } from '../context/GlobalState';
import { Transaction } from '../types/transaction';
import { TransactionItem } from './TransactionItem';
import sortBy from 'lodash/sortBy';

export const TransactionList = () => {
  const { transactions } = useContext<GlobalContextType>(GlobalContext);
  const sortedCategories = sortBy(transactions, ['type', 'title']);
  const hasAnyTransaction = sortedCategories && sortedCategories.length > 0;

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {sortedCategories.map((transaction: Transaction) => (
          <TransactionItem
            key={transaction.id}
            id={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            category={transaction.category}
            transactionType={transaction.transactionType}
          />
        ))}
        {!hasAnyTransaction && <>There is no transaction added yet!</>}
      </ul>
    </>
  );
};
