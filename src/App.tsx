import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router";
import "./App.css";
import { FinalScore } from "./components/FinalScore";
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
export type QuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
// export type QuestionType = {
//   response_code: number;
//   results: Question[];
// };
type Category = {
  name: string;
  id: number;
};
type CategoriesType = {
  trivia_categories: Category[];
};
function App({ }) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [finalScore, setFinalScore] = useState(false);
  const [score, setScore] = useState(0);
  // const categoryAsNumber = Number(category);
  // console.log(categoryAsNumber);

  // console.log(Number(category));
  // const params = useParams();
  useEffect(() => {
    console.log(category);
    console.log(difficulty);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((res) => res.json())
      .then((resultsFromServer) => {
        setQuestions(resultsFromServer.results);
      });
  }, [category, difficulty]);
  {
    if (questions.length === 0) return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      {/* <h1>hello &#039;</h1> */}
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="quiz"
          element={
            finalScore ? (
              <FinalScore
                setScore={setScore}
                setCurrentQuestion={setCurrentQuestion}
                setFinalScore={setFinalScore}
                score={score}
                category={category}
                difficulty={difficulty}
              />
            ) : (
              <Quiz
                score={score}
                setScore={setScore}
                setFinalScore={setFinalScore}
                questions={questions}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                // option={option}
                // userAnswered={userAnswered}
                // setDifficulty={setDifficulty}
              />
            )
          }
        />
        <Route path="home" element={<Home />} />
        <Route
          path="categories"
          element={
            <Categories
              setCategory={setCategory}
              setDifficulty={setDifficulty}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
