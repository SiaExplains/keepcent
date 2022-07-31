import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext<any>(GlobalContext);

  const addTransactionClickHandler = (e: any) => {
    e.preventDefault();
    addTransaction({ text, amount });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e: any) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" onClick={(e) => addTransactionClickHandler(e)}>
          Add transaction
        </button>
      </form>
    </>
  );
};
