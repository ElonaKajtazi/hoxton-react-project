import { useState } from "react";
import { QuestionType } from "../App";

type Props = {
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  option: string;
  questions: QuestionType[];
  currentQuestion: number;
};
export function Option({
  showButtonNext,
  showButtonPrevious,
  option,
  questions,
  currentQuestion,
}: Props) {
  const [userAnswered, setUserAnswered] = useState(false);
  return (
    <label
      className="option"
      onClick={(event) => {
        showButtonNext();
        showButtonPrevious();
        //@ts-ignore
        // const rightAnswer = event.target.question.value;
        // console.log(rightAnswer);
      }}
    >
      <input
        onClick={(event) => {}}
        type="radio"
        name="question"
        value={option.toLowerCase()}
      />
      <span
        className={
          option === questions[currentQuestion].correct_answer
            ? "radio-value right"
            : "radio-value"
        }
        onClick={() => {
          setUserAnswered(true);
        }}
      >
        {option}
      </span>
    </label>
  );
}
