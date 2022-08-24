import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
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
export type QuestionsType = {
  response_code: number;
  results: Question[];
};
function App() {
  const [questions, setQuestions] = useState<QuestionsType[]>([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((resultsFromServer) => {
        setQuestions(resultsFromServer);
        console.log(resultsFromServer);
      });
  }, []);
  {
    if (questions.length === 0) return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="quiz"
          element={
            <Quiz
              questions={questions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
            />
          }
        />
        <Route path="home" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
