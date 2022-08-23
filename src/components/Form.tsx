import { useState } from "react";

export function Form({
  questions,
  currentQuestion,
  answer,
  setCurrentQuestion,
}) {
  const [showButtons, setShowButtons] = useState(false);
  const showButtonsSection = () => {
    setShowButtons(true);
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const rightAnswer = event.target.question.value;

          if (answer === rightAnswer) {
            alert("Correct");
          } else {
            alert("Incorrect");
          }
          // console.log(rightAnswer)
          // console.log(answer)
        }}
      >
        {" "}
        {/* {questions.results.map((question) => ( */}
        <>
          <h2 className="question">
            {" "}
            {questions.results[currentQuestion].question}
          </h2>
          <div className="options">
            <label
              onClick={() => {
                showButtonsSection();
              }}
            >
              <input
                className="option"
                type="radio"
                name="question"
                value={questions.results[
                  currentQuestion
                ].correct_answer.toLowerCase()}
              />
              <span className="radio-value right">
                {questions.results[currentQuestion].correct_answer}
              </span>
            </label>
            {questions.results[currentQuestion].incorrect_answers.map(
              (incorrectAnswer) => (
                <>
                  <label
                    onClick={() => {
                      showButtonsSection();
                    }}
                  >
                    <input
                      className="option"
                      type="radio"
                      name="question"
                      value={incorrectAnswer.toLowerCase()}
                    />
                    <span className="radio-value">{incorrectAnswer}</span>
                  </label>
                </>
              )
            )}
          </div>
        </>
        {/* ))} */}
        <button>SUBMIT</button>
      </form>
      {showButtons ? (
        <div className="buttons">
          <button
            onClick={() => {
              nextQuestion();
            }}
          >
            NEXT
          </button>
        </div>
      ) : null}
    </>
  );
}
