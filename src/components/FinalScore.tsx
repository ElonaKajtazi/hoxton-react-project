import { useEffect, useState } from 'react';

interface IFinalScore {
  score: number;
  category: number;
  difficulty: string;
  restartQuiz: () => void;
};

export function FinalScore({
  score,
  category,
  difficulty,
  restartQuiz
}: IFinalScore) {

  const [categories, setCategories] = useState([]);
  let score1 = score / 2;

  useEffect(() => {
    fetch('https://quizapi.io/api/v1/categories?apiKey=dEubTUYNPvvPmGEIGYwApgEPEEM8Q1omrS4k8cdj')
      .then((rsp) => rsp.json())
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  const findChoosenCategory = categories.length !== 0 &&  categories.find((cat) => cat.name === category);

  return (
    <div className='quiz score'>
      { findChoosenCategory &&  <h2> Category: {findChoosenCategory?.name} </h2> }
      {
        difficulty !== '' && 
        <h2>
          Difficulty:
          { difficulty === 'easy' && ' Easy' }
          { difficulty === 'medium' && ' Medium' }
          { difficulty === 'hard' && ' Hard' }
        </h2>
      }
      <h2> Score: {score1} out of 10 - ({(score1 / 10) * 100 + "%"}) </h2>
      <div>
        <button className='button' onClick={restartQuiz}>Take another quiz</button>
      </div>
    </div>
  );
}
