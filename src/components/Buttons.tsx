import { QuestionType } from '../App';

interface IButtons  {
  currentQuestion: number;
  previousQuestion: () => void;
  showNextButton: boolean;
  questions: QuestionType[];
  nextQuestion: () => void;
  setFinalScore: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Buttons({
  currentQuestion,
  showNextButton,
  questions,
  nextQuestion,
  setFinalScore,
}: IButtons) {

  const handleFinalQuestion = () => {
    setFinalScore(true)
  }

  const isLastQuestion = currentQuestion === questions.length - 1

  return (
    <div className='buttons'>
      {showNextButton && !isLastQuestion &&  <button className='bn632-hover bn25' onClick={nextQuestion}>NEXT</button>}
      {isLastQuestion && <button className='bn632-hover bn25' onClick={handleFinalQuestion}>SUBMIT</button>}
    </div>
  );
}
