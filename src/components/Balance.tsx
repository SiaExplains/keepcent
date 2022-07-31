import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../types/transaction';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((item: Transaction) => item.amount);
  const total = amount
    .reduce((accumulated: number, current: number) => (accumulated += current), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
