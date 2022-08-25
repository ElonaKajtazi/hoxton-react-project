import { useState } from "react";
import { QuestionType } from "../App";

type Props = {
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
}: Props) {
  const [userAnswered, setUserAnswered] = useState(false);
  return (
    <label
      className="option"
      onClick={(event) => {
        showButtonNext();
        showButtonPrevious();
        if (option === questions[currentQuestion].correct_answer) {
          setScore((score + 1));
          console.log(score);
        }
        // {
        //   userAnswered &&
        //   option === questions[currentQuestion].correct_answer ? (
        //     <div>YAY</div>
        //   ) : null;
        // }
        // {
        //   userAnswered &&
        //   option !== questions[currentQuestion].correct_answer ? (
        //     <div>Nope</div>
        //   ) : null;
        // }
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
