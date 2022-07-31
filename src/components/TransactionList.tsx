import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {
  const { transactions } = useContext<any>(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction: any) => (
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