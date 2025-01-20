import { useEffect, useState } from 'react';
import { CategoriesMain } from '../components/CategoriesMain';
import { NavBar } from '../components/NavBar'

export type Category = {
  name: string;
  id: number;

};

interface ICategories {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  category: number;
  difficulty: string;
};

export function Categories({ 
  setCategory, 
  setDifficulty,
  category, 
  difficulty 
}: ICategories) {
  
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://quizapi.io/api/v1/categories?apiKey=dEubTUYNPvvPmGEIGYwApgEPEEM8Q1omrS4k8cdj")
      .then((rsp) => rsp.json())
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  if (categories.length === 0) return <h1>Loading...</h1>;

  return (
    <div className='categories'>
      <NavBar />
      <CategoriesMain
        setCategory={setCategory}
        categories={categories}
        setDifficulty={setDifficulty}
        category={category}
        difficulty={difficulty}
      />
    </div>
  );
}
