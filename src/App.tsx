import { useEffect, useState } from "react";
import "./App.css";
// let Question = {
//   "category": "Entertainment: Video Games",
//   "type": "multiple",
//   "difficulty": "medium",
//   "question": "What is the main character of Metal Gear Solid 2?",
//   "correct_answer": "Raiden",
//   "incorrect_answers": [
//     "Solidus Snake",
//     "Big Boss",
//     "Venom Snake"
//   ]
// }
type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
type Questions = {
  response_code: number;
  results: Question[];
};
function App() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("franc");
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((resultsFromServer) => {
        setQuestions(resultsFromServer);
        console.log(resultsFromServer);
      });
  }, []);
  // console.log(questions[0].question);
  // console.log(questions[0].correctAnswer);
  {
    if (questions.length === 0) return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      {/* <h1>Let's start this project...</h1> */}

      <form
      // onSubmit={(event) => {
      //   event.preventDefault();
      //   const rightAnswer = event.target.question.value;
      //   if (answer === rightAnswer) {
      //     alert("Correct");
      //   } else {
      //     alert("Incorrect");
      //   }
      //   // console.log(rightAnswer)
      //   // console.log(answer)
      // }}
      >
        <h2 className="question"> {questions.results[0].question}</h2>
        <div className="options">
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions.results[0].correct_answer.toLowerCase()}
            />
            <span className="radio-value right">
              {questions.results[0].correct_answer}
            </span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions.results[0].incorrect_answers[0].toLowerCase()}
            />
            <span className="radio-value">
              {" "}
              {questions.results[0].incorrect_answers[0]}
            </span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions.results[0].incorrect_answers[1].toLowerCase()}
            />
            <span className="radio-value">
              {" "}
              {questions.results[0].incorrect_answers[1]}
            </span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions.results[0].incorrect_answers[2].toLowerCase()}
            />
            <span className="radio-value">
              {" "}
              {questions.results[0].incorrect_answers[2]}
            </span>
          </label>
        </div>

        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
