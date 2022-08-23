import { useState } from "react";

export function Form({
  questions,
  currentQuestion,
  answer,
  setCurrentQuestion,
}) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevioustButton, setShowPrevioustButton] = useState(false);
  const showButtonNext = () => {
    setShowNextButton(true);
  };
  const showButtonPrevious = () => {
    if (currentQuestion === 1) setShowPrevioustButton(true);
    // if (currentQuestion >= questions.results.length ) return
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  console.log(currentQuestion);
  return (
    <>
      <div
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
          <ul className="options">
            <li
              className="option"
              onClick={(event) => {
                event.currentTarget.classList.add("correct");
                showButtonNext();
                showButtonPrevious();
              }}
            >
              {" "}
              {questions.results[currentQuestion].correct_answer}
            </li>
            {/* <label
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
            </label> */}
            {questions.results[currentQuestion].incorrect_answers.map(
              (incorrectAnswer) => (
                <>
                  <li
                    className="option"
                    onClick={(event) => {
                      event.currentTarget.classList.add("incorrect");
                      showButtonNext();
                      showButtonPrevious();
                    }}
                  >
                    {incorrectAnswer}
                  </li>
                  {/* <label
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
                  </label> */}
                </>
              )
            )}
          </ul>
        </>
        {/* ))} */}
        {/* <button>SUBMIT</button> */}
      </div>
      <>
        {showPrevioustButton && currentQuestion > 0? (
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
      </>
    </>
  );
}
