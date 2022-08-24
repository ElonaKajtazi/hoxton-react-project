import { QuestionsType } from "../App";
import { Option } from "../components/Option";
type Props = {
  shuffledOptions: any;
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  questions: QuestionsType[];
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
      {/* @ts-ignore */}
      {shuffledOptions.map((option) => (
        <Option
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
