import { QuestionsType } from "../App";

type Props = {
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  option: any;
  questions: QuestionsType[];
  currentQuestion: number;
};
export function Option({
  showButtonNext,
  showButtonPrevious,
  option,
  questions,
  currentQuestion,
}: Props) {
  return (
    <label
      className="option"
      onClick={(event) => {
        showButtonNext();
        showButtonPrevious();
        //@ts-ignore
        const rightAnswer = event.target.question.value;
        console.log(rightAnswer);
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
            //@ts-ignore
          option === questions.results[currentQuestion].correct_answer
            ? "radio-value right"
            : "radio-value"
        }
      >
        {option}
      </span>
    </label>
  );
}
