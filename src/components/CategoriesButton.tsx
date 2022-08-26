import { Link } from "react-router-dom";

export function CategoriesButton() {
  return (
    <div>
      <Link to="/quiz">
        <button className="button">Start</button>
      </Link>
    </div>
  );
}
