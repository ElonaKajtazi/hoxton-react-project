import { QuestionsType } from "../App";

type Props = {
  showPrevioustButton: boolean;
  currentQuestion: number;
  previousQuestion: () => void;
  showNextButton: boolean;
  questions: QuestionsType[];
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
    <div>
      {showPrevioustButton && currentQuestion > 0 ? (
        <button
          className="previous-btn"
          onClick={() => {
            previousQuestion();
          }}
        >
          Prevous
        </button>
      ) : null}
      {/* @ts-ignore    */}
      {showNextButton && currentQuestion + 1 < questions.results.length ? (
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
