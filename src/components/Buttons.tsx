import { QuestionType } from "../App";

type Props = {
  showPrevioustButton: boolean;
  currentQuestion: number;
  previousQuestion: () => void;
  showNextButton: boolean;
  questions: QuestionType[];
  nextQuestion: () => void;
};

export function Buttons({
  showPrevioustButton,
  currentQuestion,
  previousQuestion,
  showNextButton,
  questions,
  nextQuestion,
}: Props) {
  return (
    <div className="buttons">
      {showPrevioustButton && currentQuestion > 0 ? (
        <button
          className="previous-btn"
          onClick={() => {
            previousQuestion();
          }}
        >
          Previous
        </button>
      ) : null}
      {showNextButton && currentQuestion + 1 < questions.length ? (
        <button
          className="next-btn"
          onClick={() => {
            nextQuestion();
          }}
        >
          NEXT
        </button>
      ) : null}
    </div>
  );
}
