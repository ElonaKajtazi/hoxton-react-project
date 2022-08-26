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
    <>
      <label
        className="option"
        onClick={(event) => {
          showButtonNext();
          showButtonPrevious();
          if (option === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
            console.log(score);

            setUserAnswered(true);
            // {
            //   userAnswered &&
            //   option === questions[currentQuestion].correct_answer
            //     ? console.log("YESSSS")
            //     : null;
            // }
            // {
            //   userAnswered &&
            //   option !== questions[currentQuestion].correct_answer
            //     ? console.log("Noooo")
            //     : null;
            // }
          }
        }}
      >
        <input
          onClick={(event) => {}}
          type="radio"
          name="question"
          value={option.toLowerCase()}
          required
        />
        <span
          className={
            option === questions[currentQuestion].correct_answer
              ? "radio-value right"
              : "radio-value"
          }
        >
          {option}
        </span>
      </label>
    </>
  );
}
