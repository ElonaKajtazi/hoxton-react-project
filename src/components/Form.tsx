import { useState } from "react";
import { QuestionsType } from "../App";
type Props = {
  questions: QuestionsType[];
  currentQuestion: number;
  // answer: string | null;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};
export function Form({
  questions,
  currentQuestion,
  // answer,
  setCurrentQuestion,
}: Props) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevioustButton, setShowPrevioustButton] = useState(false);
  const [answer, setAnswer] = useState(
    questions.results[currentQuestion].correct_answer
  );
  // console.log(answer);
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
  // options: shuffle(data.incorrect_answers.concat(data.correct_answer))

  const options = questions.results[currentQuestion].correct_answer
    .split()
    .concat(questions.results[currentQuestion].incorrect_answers);
    const shuffledOptions = options.sort(() =>Math.random() - 0.5)
    console.log(shuffledOptions)
  // console.log(options);
  return (
    <>
      {" "}
      {/* {questions.results.map((question) => ( */}
      <>
        <h2 className="question">
          {" "}
          {questions.results[currentQuestion].question}
        </h2>
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
      </>
      {/* ))} */}
      {/* <button>SUBMIT</button> */}
      <>
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
      </>
    </>
  );
}
