import { QuestionsType } from "../App";

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
      ))}
    </form>
  );
}
