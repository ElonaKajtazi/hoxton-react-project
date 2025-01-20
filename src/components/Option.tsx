import { useState } from 'react';
import { QuestionType } from '../App';

interface IOption  {
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  option: string;
  questions: QuestionType[];
  currentQuestion: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
};

export function Option({
  showButtonNext,
  showButtonPrevious,
  option,
  questions,
  currentQuestion,
  setScore,
  score,
}: IOption) {
  const [userAnswered, setUserAnswered] = useState(false);

  function getKeyByValue(object: any, value: string) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  let correctAnswer: any
  if (questions[currentQuestion].correct_answer) {
    correctAnswer =  Object.keys(questions[currentQuestion].answers).filter((key) => key === questions[currentQuestion].correct_answer).join(' ')
  } else {
    let findCorrectAnswer = Object.keys(questions[currentQuestion].correct_answers).find((key) => questions[currentQuestion].correct_answers[key] === 'true')
    correctAnswer = findCorrectAnswer
  }
  
  const correctAnswerKey = option && getKeyByValue(questions[currentQuestion].answers, option)
  const isCorrectAnswer = correctAnswerKey && correctAnswer && correctAnswer.includes(correctAnswerKey)

  const handleChooseAnswer = () => {
    showButtonNext();
    showButtonPrevious();    

    if(isCorrectAnswer) {
      setScore(score + 1);
      setUserAnswered(true);
    }
  }

  return (
     <>
      <label className='option' onClick={handleChooseAnswer}>
        <input
          type='radio'
          name='question'
          value={option.toLowerCase()}
          required
        />
        <span className={ isCorrectAnswer ? 'radio-value right' : 'radio-value' }>{option}</span>
      </label>
    </>
  );
}
