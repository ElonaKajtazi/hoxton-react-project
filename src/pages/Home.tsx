import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="header-logo"> Quizz App</div>
        <nav>
          <ul className="nav-list-items">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="main-container">
        <img
            className="main-img"
            src="https://cdn.woorise.com/wp-content/uploads/2020/10/quiz-maker-apps-tools.png"
            alt=""
          />
          <div className="main-text">
            <h2>
              Put your knowledge to the test with curious quizzes for all levels
            </h2>

            <p className="description">
              You will find all sorts of topics such as general knowledge, food,
              TV, movies, history, geography, sports but also some themed
              quizzes (cars, cricket…).
            </p>
            <Link to="/categories">
              <Button variant="contained" color="success">
                Take your first quiz
              </Button>
            </Link>
          </div>
         
        </div>
      </main>
    </div>
  );
}
