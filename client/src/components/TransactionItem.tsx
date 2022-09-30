import React from "react";
import { useAppContext } from "../../pages/_app";
import { Transaction } from "../types/transaction";

export const TransactionItem = ({ id, text, amount }: Transaction) => {
  const { deleteTransaction } = useAppContext();
  const itemColor = amount < 0 ? "minus" : "plus";
  const sign = amount < 0 ? "-" : "+";

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
