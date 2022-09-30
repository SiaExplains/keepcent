import React, { useContext } from "react";
import { Transaction } from "../types/transaction";
import { TransactionItem } from "./TransactionItem";
import sortBy from "lodash/sortBy";
import { useAppContext } from "../../pages/_app";

export const TransactionList = () => {
  const { transactions } = useAppContext();
  const sortedCategories = sortBy(transactions, ["type", "title"]);
  const hasAnyTransaction = sortedCategories && sortedCategories.length > 0;

  return (
    <>
      <h3>History</h3>
      {/* <ul id="list" className="list">
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
      </ul> */}
    </>
  );
};
