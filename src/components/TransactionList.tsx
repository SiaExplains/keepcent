import React, { useContext } from 'react';
import { GlobalContext, GlobalContextType } from '../context/GlobalState';
import { Transaction } from '../types/transaction';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {
  const { transactions } = useContext<GlobalContextType>(GlobalContext);

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
      </ul>
    </>
  );
};
