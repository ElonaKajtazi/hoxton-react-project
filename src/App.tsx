import { useEffect, useState } from "react";
import "./App.css";
// let Question = {
//   category: "General Knowledge",
//   id: "622a1c357cc59eab6f94fe31",
//   correctAnswer: "Franc",
//   incorrectAnswers: ["Peso", "Dollar", "Gira"],
//   question: "What is the basic unit of currency for Equatorial Guinea?",
//   tags: ["currency", "general_knowledge"],
//   type: "Multiple Choice",
//   difficulty: "medium",
//   regions: [],
// };
type Question = {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: never[];
};
type Questions = Question[];
function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answer, setAnswer] = useState("franc");
  useEffect(() => {
    fetch("http://localhost:5000/results")
      .then((res) => res.json())
      .then((resultsFromServer) => {
        setQuestions(resultsFromServer);
        console.log(resultsFromServer);
      });
  }, []);
  // console.log(questions[0].question);
  // console.log(questions[0].correctAnswer);

  return (
    <div className="App">
      {/* <h1>Let's start this project...</h1> */}
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
        <h2 className="question"> {questions[0].question}</h2>
        <div className="options">
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].correctAnswer.toLowerCase()}
            />
            <span className="radio-value right">
              {questions[0].correctAnswer}
            </span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].incorrectAnswers[0].toLowerCase()}
            />
            <span className="radio-value">
              {" "}
              {questions[0].incorrectAnswers[0]}
            </span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].incorrectAnswers[1].toLowerCase()}
            />
            <span className="radio-value">
              {" "}
              {questions[0].incorrectAnswers[1]}
            </span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].incorrectAnswers[2].toLowerCase()}
            />
            <span className="radio-value">
              {" "}
              {questions[0].incorrectAnswers[2]}
            </span>
          </label>
       
        </div>

        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
