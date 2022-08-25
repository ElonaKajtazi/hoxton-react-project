import { QuestionType } from "../App";
import { Option } from "../components/Option";
type Props = {
  shuffledOptions: string[];
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  questions: QuestionType[];
  currentQuestion: number;

  // answer: string;
};
export function Form({
  shuffledOptions,
  showButtonNext,
  showButtonPrevious,
  questions,
  currentQuestion,

}: // answer,
Props) {
  return (
    <>
      {/* {userAnswered && option === questions[currentQuestion].correct_answer ? (
        <div>YAY</div>
      ) : null}
      {userAnswered && option !== questions[currentQuestion].correct_answer ? (
        <div>Nope</div>
      ) : null} */}
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
    </>
  );
}
