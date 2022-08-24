export function Question({questions, currentQuestion}) {
  return (
    <h2 className="question">{questions.results[currentQuestion].question}</h2>
  );
}
