import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
type Category = {
  name: string;
  id: number;
};
type Props = {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};
export function Categories({ setCategory, setDifficulty }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((rsp) => rsp.json())
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer.trivia_categories);
        // console.log(categoriesFromServer.trivia_categories);
      });
  }, []);
  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=10")
  //     .then((res) => res.json())
  //     .then((resultsFromServer) => {
  //       setQuestions(resultsFromServer);
  //       // console.log(resultsFromServer);
  //     });
  // }, []);
  // if (categories.length === 0) return <h1>Loading</h1>;
  // console.log(categories);
  if (categories.length === 0) return <h1>loadinggggg</h1>;
  return (
    <div className="categories">
      <Navbar />
      <main className="categories-main">
        <div className="help">
          <div className="categories-container">
            <h1>Categories</h1>
            <p className="text">
              Choose a category in which to play the Trivia Quiz from General
              Knowledge, Dictionary, Entertainment, History, Food + Drink,
              Geography and Science + Nature. Answer 10 multiple-choice quiz
              questions as quickly and as accurately as possible in each themed
              game. Your score and daily rank will be displayed on completion of
              the game. Questions are updated daily.
            </p>
            <div className="selects">
              <select
                defaultValue="Select Category"
                onChange={(e) => setCategory(Number(e.target.value))}
              >
                <option>Category</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                  // console.log(categoryAsNumber)
                ))}
              </select>

              {/* <button>Start</button> */}

              <select
                onChange={(e) => {
                  setDifficulty(e.target.value);
                }}
              >
                <option>Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <button className="button">
                <Link to="/quiz">Start</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
