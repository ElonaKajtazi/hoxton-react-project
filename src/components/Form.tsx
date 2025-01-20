import he from 'he';
import { QuestionType } from '../App'
import { Option } from '../components/Option'

interface IForm {
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  questions: QuestionType[];
  currentQuestion: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

export function Form({
  showButtonNext,
  showButtonPrevious,
  questions,
  currentQuestion,
  setScore,
  score,
}: IForm) {
  const options = Object.keys(questions[currentQuestion].answers).map((key) => questions[currentQuestion].answers[key])
  const filteredOptions = options.filter((option) => option !== null)

  return (
      <form className='options'>
        {filteredOptions.map((option) => (
          <Option
            key={option}
            showButtonNext={showButtonNext}
            showButtonPrevious={showButtonPrevious}
            option={he.decode(option)}
            questions={questions}
            currentQuestion={currentQuestion}
            score={score}
            setScore={setScore}
          />
        ))}
      </form>
  );
}
