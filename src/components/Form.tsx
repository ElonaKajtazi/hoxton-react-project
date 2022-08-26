import { QuestionType } from "../App";
import { Option } from "../components/Option";
type Props = {
  shuffledOptions: string[];
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  questions: QuestionType[];
  currentQuestion: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setFinalScore: React.Dispatch<React.SetStateAction<boolean>>;
  // answer: string;
};
export function Form({
  shuffledOptions,
  showButtonNext,
  showButtonPrevious,
  questions,
  currentQuestion,
  setScore,
  score,
  setFinalScore,
}: // answer,
Props) {
  return (
    <>
      <form className="options">
        {shuffledOptions.map((option) => (
          <Option
            key={option}
            showButtonNext={showButtonNext}
            showButtonPrevious={showButtonPrevious}
            option={option}
            questions={questions}
            currentQuestion={currentQuestion}
            score={score}
            setScore={setScore}
          />
        ))}
      </form>
    </>
  );
}
