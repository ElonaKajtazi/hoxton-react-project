import { Link } from "react-router-dom";
type Props = {
  score: number;
  category: number;
  difficulty: string;
  setFinalScore: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};
export function FinalScore({
  score,
  category,
  difficulty,
  setFinalScore,
  setCurrentQuestion,
}: Props) {
  return (
    <div className="quiz">
      <h2>Category: {category}</h2>
      <h2>Difficulty: {difficulty}</h2>
      <h2>FINAL SCORE: {score / 2}</h2>
      <Link to="/categories">
        {" "}
        <button
          className="button"
          onClick={() => {
            setFinalScore(false);
            setCurrentQuestion(0);
          }}
        >
          Take another quiz
        </button>
      </Link>
    </div>
  );
}
