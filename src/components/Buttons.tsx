import { QuestionType } from "../App";

type Props = {
  showPrevioustButton: boolean;
  currentQuestion: number;
  previousQuestion: () => void;
  showNextButton: boolean;
  questions: QuestionType[];
  nextQuestion: () => void;
  setFinalScore: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Buttons({
  showPrevioustButton,
  currentQuestion,
  previousQuestion,
  showNextButton,
  questions,
  nextQuestion,
  setFinalScore,
}: Props) {
  return (
    <div className="buttons">
      {/* {showPrevioustButton && currentQuestion > 0 ? (
        <button
          className="previous-btn"
          onClick={() => {
            previousQuestion();
          }}
        >
          Previous
        </button>
      ) : null} */}
      {showNextButton && currentQuestion + 1 < questions.length ? (
        <button
          className="bn632-hover bn25"
          onClick={() => {
            nextQuestion();
          }}
        >
          NEXT
        </button>
      ) : null}
      {currentQuestion === 9 ? (
        <button
          className="bn632-hover bn25"
          onClick={() => {
            setFinalScore(true);
          }}
        >
          SUBMIT
        </button>
      ) : null}
    </div>
  );
}
