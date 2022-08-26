import { Link } from "react-router-dom";
type Props = {
  score: number;
  category: number;
  difficulty: string;
  setFinalScore: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
export function FinalScore({
  score,
  category,
  difficulty,
  setFinalScore,
  setCurrentQuestion,
  setScore,
}: Props) {
  return (
    <div className="quiz score">
      <h2>
        Category:
        {category === 9 ? " General Knowledge" : null}
        {category === 10 ? " Entertainment: Books" : null}
        {category === 11 ? " Entertainment: Film" : null}
        {category === 12 ? " Entertainment: Music" : null}
        {category === 13 ? " Entertainment: Musicals & Theatres" : null}
        {category === 14 ? " Entertainment: Television" : null}
        {category === 15 ? " Entertainment: Video Games" : null}
        {category === 16 ? " Entertainment: Board Games" : null}
        {category === 17 ? " Science & Nature" : null}
        {category === 18 ? " Science: Computers" : null}
        {category === 19 ? " Science: Mathematics" : null}
        {category === 20 ? " Mythology" : null}
        {category === 21 ? " Sports" : null}
        {category === 22 ? " Geography" : null}
        {category === 23 ? " History" : null}
        {category === 24 ? " Politics" : null}
        {category === 25 ? " Art" : null}
        {category === 26 ? " Celebrities" : null}
        {category === 27 ? " Animals" : null}
        {category === 28 ? " Vehicles" : null}
        {category === 29 ? " Entertainment: Comics" : null}
        {category === 30 ? " Science: Gadgets" : null}
        {category === 31 ? " Entertainment: Japanese Anime & Manga" : null}
        {category === 32 ? " Entertainment: Cartoon & Animations" : null}
      </h2>
      <h2>
        Difficulty:
        {difficulty === "easy" ? " Easy" : null}
        {difficulty === "medium" ? " Medium" : null}
        {difficulty === "hard" ? " Hard" : null}
      </h2>
      <h2>Score: {score / 2} out of 10</h2>
      <Link to="/categories">
        {" "}
        <button
          className="button"
          onClick={() => {
            setFinalScore(false);
            setCurrentQuestion(0);
            setScore(0);
          }}
        >
          Take another quiz
        </button>
      </Link>
    </div>
  );
}
