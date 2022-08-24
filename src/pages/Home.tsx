export function Home() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="header-logo"> Quizz App</div>
        <nav>
          <ul className="nav-list-items">
            <li>Home</li>
            <li>Categories</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="main-container">
          <div className="main-text">
            <h2>
              Put your knowledge to the test with curious quizzes for all levels
            </h2>
            <p>
              Play daily to Improve your general knowledge. Sharpen your mind
              and your cognitive skills. It's fun, easy and free.
            </p>
            <p>
              You will find all sorts of topics such as general knowledge, food,
              TV, movies, history, geography, sports but also some themed
              quizzes (cars, cricket…).
            </p>
          </div>
          <img
            className="main-img"
            src="https://thebloggingbuddha.com/wp-content/uploads/2019/03/Online-Quizzes.jpg"
            alt=""
          />
        </div>
        {/* <button> Take a quiz </button> */}
      </main>
    </div>
  );
}
