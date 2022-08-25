import { QuestionType } from "../App";
import { Option } from "../components/Option";
type Props = {
  shuffledOptions: string[];
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  questions: QuestionType[];
  currentQuestion: number;
};
export function Form({
  shuffledOptions,
  showButtonNext,
  showButtonPrevious,
  questions,
  currentQuestion,
}: Props) {
  return (
    <form className="options">

      {shuffledOptions.map((option) => (
        <Option
          key={option}
          showButtonNext={showButtonNext}
          showButtonPrevious={showButtonPrevious}
          option={option}
          questions={questions}
          currentQuestion={currentQuestion}
        />
      ))}
    </form>
  );
}
