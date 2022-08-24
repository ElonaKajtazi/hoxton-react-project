export function Form({
  shuffledOptions,
  showButtonNext,
  showButtonPrevious,
  questions,
  currentQuestion,
}) {
  return (
    <form className="options">
      {shuffledOptions.map((option) => (
        <label
          className="option"
          onClick={(event) => {
            showButtonNext();
            showButtonPrevious();
            // let answer = event.target;
            const rightAnswer = event.target.question.value;
            console.log(rightAnswer);

            // if (answer === rightAnswer) {
            //   alert("Correct");
            // } else {
            //   alert("Incorrect");
            // }
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
              option === questions.results[currentQuestion].correct_answer
                ? "radio-value right"
                : "radio-value"
            }
          >
            {option}
          </span>
        </label>
      ))}

      {/* {questions.results[currentQuestion].incorrect_answers.map(
            (incorrectAnswer) => (
              <>
                <label
                  className="option"
                  onClick={() => {
                    showButtonNext();
                    showButtonPrevious();
                  }}
                >
                  <input
                    type="radio"
                    name={`Question${currentQuestion}`}
                    value={incorrectAnswer.toLowerCase()}
                  />
                  <span className="radio-value">{incorrectAnswer}</span>
                </label>
              </>
            )
          )} */}
    </form>
  );
}
