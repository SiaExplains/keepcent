import {
  MutableRefObject,
  useRef,
  useState,
  MouseEvent,
  ChangeEvent,
} from "react";
import { Category, CategoryType } from "../src/types/category";
import sortBy from "lodash/sortBy";
import Layout from "../src/components/Layout/Layout";
import { useAppContext } from "./_app";
import { isBrowser } from "react-device-detect";

const CategoryPage = () => {
  const { categories, deleteCategory, addCategory } = useAppContext();
  const sortedCategories = sortBy(categories, ["type", "title"]);
  const hasAnyCategory = sortedCategories && sortedCategories.length > 0;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryType, setCategoryType] = useState(CategoryType.OutCome);
  const htmlElRefTextField: MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const addCategoryClickHandler = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    addCategory({ title, description, categoryType });
    setDescription("");
    setTitle("");
    htmlElRefTextField.current?.focus();
  };

  const deleteCategoryHandler = (category: Category) => {
    if (isBrowser) {
      if (window.confirm(`Are you sure for deleting,"${category.title}"?`)) {
        deleteCategory(category.id);
      }
    }
  };

  return (
    <Layout>
      <div className="container">
        <span>You can manage you categories here.</span>
        <br />

        <form>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              placeholder="Enter category name..."
              value={title}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setTitle(event.target.value)
              }
              ref={htmlElRefTextField}
            />
          </div>
          <div className="form-control">
            <label htmlFor="description">
              Description <br />
            </label>
            <input
              type="text"
              placeholder="Enter description..."
              value={description}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setDescription(event.target.value)
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="type">
              Type <br />
            </label>
            <select
              onChange={(event: any) => setCategoryType(event.target.value)}
            >
              <option value={CategoryType.OutCome}>Outcome</option>
              <option value={CategoryType.Income}>Income</option>
            </select>
          </div>
          <button
            className="btn"
            onClick={(event: MouseEvent<HTMLElement>) =>
              addCategoryClickHandler(event)
            }
          >
            Add Category
          </button>
        </form>
        <div>
          <h4>List of categories:</h4>
          {hasAnyCategory && (
            <ul className="et-list">
              {sortedCategories.map((category: Category) => {
                return (
                  <li key={category.id} className="et-list__item">
                    <div className="category-title">{category.title}</div>
                    <button
                      className="delete-button"
                      onClick={() => deleteCategoryHandler(category)}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
