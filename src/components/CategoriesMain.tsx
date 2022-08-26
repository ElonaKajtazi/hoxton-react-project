import { Link } from "react-router-dom";
import { Category } from "../pages/Categories";
import { CategoriesButton } from "./CategoriesButton";
import { CategoriesSelects } from "./CategoriesSelects";
import { CategoriesText } from "./CategoriesText";
type Props = {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[];
};

export function CategoriesMain({
  setCategory,
  categories,
  setDifficulty,
}: Props) {
  return (
    <main className="categories-main">
      <div className="help">
        <div className="categories-container">
          <h1>Categories</h1>
          <CategoriesText />
          <CategoriesSelects
            categories={categories}
            setDifficulty={setDifficulty}
            setCategory={setCategory}
          />

          <CategoriesButton />
        </div>
      </div>
    </main>
  );
}
