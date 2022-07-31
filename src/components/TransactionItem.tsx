import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionItem = ({ id, text, amount }: any) => {
  const { deleteTransaction } = useContext<any>(GlobalContext);
  const itemColor = amount < 0 ? 'minus' : 'plus';
  const sign = amount < 0 ? '-' : '+';

  return (
    <li className={itemColor} key={id}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};
