import {Link} from 'react-router-dom';

export function Navbar() {
  return (
    <header className="header">
      <div className="header-logo"> Quizz App</div>
      <nav>
        <ul className="nav-list-items">
          <li>
            <Link className="link" to="/home">
              Home
            </Link>
          </li>
          <li className="link">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <div className="rightt">
        <Link className="" to="/categories">
          Start quiz
        </Link>
      </div>
    </header>
  );
}
