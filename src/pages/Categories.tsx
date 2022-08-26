import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoriesMain } from "../components/CategoriesMain";
import { Navbar } from "../components/Navbar";
export type Category = {
  name: string;
  id: number;
};
type Props = {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};
export function Categories({ setCategory, setDifficulty }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((rsp) => rsp.json())
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer.trivia_categories);
      });
  }, []);

  if (categories.length === 0) return <h1>Loading...</h1>;
  return (
    <div className="categories">
      <Navbar />
      <CategoriesMain
        setCategory={setCategory}
        categories={categories}
        setDifficulty={setDifficulty}
      />
    </div>
  );
}
