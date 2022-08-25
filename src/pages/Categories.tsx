import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type Category = {
  name: string;
  id: number;
};
type CategoriesType = {
  trivia_categories: Category[];
};
export function Categories({setCategory}) {
  const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((rsp) => rsp.json())
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
        console.log(categoriesFromServer.trivia_categories);
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
      </header>
      <main className="categories-main">
        <select
          defaultValue="Select Category"
          onChange={(e) => setCategory(e.target.value) }
        >
        
          {categories.trivia_categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
            // console.log(categoryAsNumber)
          ))}
        </select>
      </main>
    </div>
  );
}
