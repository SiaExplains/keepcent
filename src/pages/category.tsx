import { MutableRefObject, useContext, useRef, useState, MouseEvent, ChangeEvent } from 'react';
import { GlobalContext, GlobalContextType } from '../context/GlobalState';
import { Category } from '../types/category';

const CategoryPage = () => {
  const { categories, deleteCategory, addCategory } = useContext<GlobalContextType>(GlobalContext);
  const hasAnyCategory = categories && categories.length > 0;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const htmlElRefTextField: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const addCategoryClickHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    addCategory({ title, description });
    setDescription('');
    setTitle('');
    htmlElRefTextField.current?.focus();
  };

  const deleteCategoryHandler = (category: Category) => {
    if (window.confirm(`Are you sure for deleting,"${category.title}"?`)) {
      deleteCategory(category.id);
    }
  };

  return (
    <div>
      <span>You can manage you categories here.</span>
      <br />

      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter category name..."
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
            ref={htmlElRefTextField}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="text"
            placeholder="Enter description..."
            value={description}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
          />
        </div>
        <button
          className="btn"
          onClick={(event: MouseEvent<HTMLElement>) => addCategoryClickHandler(event)}>
          Add Category
        </button>
      </form>
      <div>
        <h4>List of category:</h4>
        {hasAnyCategory && (
          <ul className="et-list">
            {categories.map((category: Category) => {
              return (
                <li key={category.id} className="et-list__item">
                  <div className="category-title">{category.title}</div>
                  <button className="delete-button" onClick={() => deleteCategoryHandler(category)}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
