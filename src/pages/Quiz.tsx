import { useState } from 'react';
import { QuestionType } from '../App';
import { Question } from '../components/Question'
import { Buttons } from '../components/Buttons'
import { Form } from '../components/Form'

interface IQuiz {
  questions: QuestionType[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setFinalScore: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
export function Quiz({
  questions,
  currentQuestion,
  setCurrentQuestion,
  setFinalScore,
  score,
  setScore,
}: IQuiz) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevioustButton, setShowPrevioustButton] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  if (currentQuestion === questions.length) setShowSubmitButton(true);

  const showButtonNext = () => setShowNextButton(true);
  
  const showButtonPrevious = () => {
    if (currentQuestion === 1) setShowPrevioustButton(true);
  };
  
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className='quiz-contaier'>
      <div className='quiz'>
        <Question questions={questions} currentQuestion={currentQuestion} />
        <Form
          showButtonNext={showButtonNext}
          showButtonPrevious={showButtonPrevious}
          questions={questions}
          currentQuestion={currentQuestion}
          score={score}
          setScore={setScore}
        />
        <Buttons
          setFinalScore={setFinalScore}
          currentQuestion={currentQuestion}
          previousQuestion={previousQuestion}
          showNextButton={showNextButton}
          questions={questions}
          nextQuestion={nextQuestion}
        />
      </div>
    </div>
  );
}
