export function Buttons({
  showPrevioustButton,
  currentQuestion,
  previousQuestion,
  showNextButton,
  questions,
  nextQuestion
}) {
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
