import React, { useContext } from 'react';
import { GlobalContext, GlobalContextType } from '../context/GlobalState';
import { Transaction } from '../types/transaction';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {
  const { transactions } = useContext<GlobalContextType>(GlobalContext);
  const hasAnyTransaction = transactions && transactions.length > 0;

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction: Transaction) => (
          <TransactionItem
            key={transaction.id}
            id={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
          />
        ))}
        {!hasAnyTransaction && <>There is no transaction added yet!</>}
      </ul>
    </>
  );
};
