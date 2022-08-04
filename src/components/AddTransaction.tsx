import React, {
  useContext,
  useState,
  MouseEvent,
  ChangeEvent,
  MutableRefObject,
  useRef
} from 'react';

import { GlobalContext, GlobalContextType } from '../context/GlobalState';
import { Category } from '../types/category';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(0);
  const { addTransaction, categories } = useContext<GlobalContextType>(GlobalContext);
  const htmlElRefTextField: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const addTransactionClickHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    addTransaction({ text, amount, category });
    setAmount(0);
    setText('');
    setCategory(0);
    htmlElRefTextField.current?.focus();
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
            onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
            ref={htmlElRefTextField}
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
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setAmount(Number(event.target.value))
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <select onChange={(event: any) => setCategory(event.target.value)}>
            {categories.map((category: Category) => {
              return <option key={category.id}>{category.title}</option>;
            })}
          </select>
        </div>
        <button
          className="btn"
          onClick={(event: MouseEvent<HTMLElement>) => addTransactionClickHandler(event)}>
          Add transaction
        </button>
      </form>
    </>
  );
};
