import { QuestionType } from "../App";

type Props = {
  showButtonNext: () => void;
  showButtonPrevious: () => void;
  option: any;
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
        // onClick={()=>{
        //   option === questions.results[currentQuestion].correct_answer alert("Right")
        // }}
      >
        {option}
      </span>
    </label>
  );
}
