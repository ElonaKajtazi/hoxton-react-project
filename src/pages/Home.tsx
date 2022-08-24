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
              <Link className="link" to="/home">Home</Link>
            </li>
            <li className="link">
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="main-container">
          {/* <img
            className="main-img"
            src="https://cdn.woorise.com/wp-content/uploads/2020/10/quiz-maker-apps-tools.png"
            alt=""
          /> */}
          <div className="main-text">
            <h1>
              Put your knowledge to the test with curious quizzes for all levels
            </h1>

            <p className="description">
              You will find all sorts of topics such as general knowledge, food,
              TV, movies, history, geography, sports but also some themed
              quizzes.
            </p>
            <Link to="/categories">
              <button className="button"> Take your first quiz</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
