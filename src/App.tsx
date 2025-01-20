import './App.css';
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { FinalScore } from './components/FinalScore'
import { PageNotFound } from './pages/PageNotFound'
import { Categories } from './pages/Categories'
import { Home } from './pages/Home'
import { Quiz } from './pages/Quiz'
import { IQuestion } from './interfaces/questions';


function App() {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [finalScore, setFinalScore] = useState(false);
  const [score, setScore] = useState(0);


  useEffect(() => {
    fetch(`https://quizapi.io/api/v1/questions?apiKey=dEubTUYNPvvPmGEIGYwApgEPEEM8Q1omrS4k8cdj&limit=3&category=${category}&difficulty=${difficulty}`)
      .then((res) => res.json())
      .then((resultsFromServer) => setQuestions(resultsFromServer));

  }, [category, difficulty]);

  const handlleRestartQuiz = () => {
    setFinalScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setCategory(0);
    setDifficulty('');
    navigate('/categories')
  }

  if (questions && questions.length === 0) return <h1>Loading...</h1>

  return (
    <div className='App'>
      <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route
          path='quiz'
          element={finalScore ? (
              <FinalScore
                score={score}
                category={category}
                difficulty={difficulty}
                restartQuiz={handlleRestartQuiz}
              />
            ) : (
              <Quiz
                score={score}
                setScore={setScore}
                setFinalScore={setFinalScore}
                questions={questions}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
              />
            )
          }
        />
        <Route path='home' element={<Home />} />
        <Route
          path='categories'
          element={
            <Categories
              setCategory={setCategory}
              setDifficulty={setDifficulty}
              category={category}
              difficulty={difficulty}
            />
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
