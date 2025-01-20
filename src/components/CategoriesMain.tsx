import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../pages/Categories';
import { CategoriesText } from './CategoriesText';
import { CategoriesButton } from './CategoriesButton';
import { CategoriesSelects } from './CategoriesSelects';

interface ICategoriesMain {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[];
  category: number;
  difficulty: string;
};

export function CategoriesMain({
  setCategory,
  categories,
  setDifficulty,
  category,
  difficulty
}: ICategoriesMain) {
  const navigte = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const handleStartQuiz = () => {
    if (!category && difficulty === '') {
      setError('Please choose a category and difficulty')
    } else if (!category) {
      setError('Please choose a category')
    } else if (difficulty === '') {
      setError('Please choose a difficulty')
    } else {
      setError(null)
      navigte('/quiz')
    }
  }

  return (
    <main className='categories-main'>
      <div className='help'>
        <div className='categories-container'>
          <h1>Categories</h1>
          <CategoriesText />
          <CategoriesSelects
            categories={categories}
            setDifficulty={setDifficulty}
            setCategory={setCategory}
          />
          <p className='error'>{error}</p>
          <CategoriesButton handleStartQuiz={handleStartQuiz} />
        </div>
      </div>
    </main>
  );
}
