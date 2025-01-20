import { Link, useNavigate } from 'react-router-dom';

export function HomeMain() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/categories')
  }
    return (
        <main className='main'>
        <div className='main-container'>
          <div className="main-text">
            <h1> Put your <span>knowledge</span> to the test with curious quizzes for all levels</h1>
            <p className='description'>
              You will find all sorts of topics such as general knowledge, food,
              TV, movies, history, geography, sports but also some themed
              quizzes.
            </p>
            <div>
              <button className='button' onClick={handleClick}> Take your first quiz</button>
            </div>
          </div>
        </div>
      </main>
    )
}