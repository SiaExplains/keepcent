import React, {
  useContext,
  useState,
  MouseEvent,
  ChangeEvent,
  MutableRefObject,
  useRef,
  useEffect
} from 'react';

import { GlobalContext, GlobalContextType } from '../context/GlobalState';
import { Category, CategoryType } from '../types/category';
import filter from 'lodash/filter';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(0);
  const { addTransaction, categories } = useContext<GlobalContextType>(GlobalContext);
  const [transactionType, setTransactionType] = useState(CategoryType.OutCome);
  const htmlElRefTextField: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(
    categories.filter((c) => c.categoryType == CategoryType.OutCome)
  );

  useEffect(() => {
    setFilteredCategories(filter(categories, (cat) => cat.categoryType == transactionType));
  }, [transactionType]);

  const addTransactionClickHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const normalisedAmount =
      transactionType == CategoryType.Income ? Math.abs(amount) : Math.abs(amount) * -1;

    addTransaction({ text, amount: normalisedAmount, category, transactionType });
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
          <label htmlFor="text">Type</label>
          <select
            onChange={(event: any) => setTransactionType(event.target.value)}
            value={transactionType}>
            <option value={CategoryType.OutCome}>Outcome</option>
            <option value={CategoryType.Income}>Income</option>
          </select>
        </div>
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
          <label htmlFor="amount">Amount</label>
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
          <label htmlFor="amount">Category</label>
          <select onChange={(event: any) => setCategory(event.target.value)} value={category}>
            {filteredCategories.map((category: Category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.title}
                </option>
              );
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
