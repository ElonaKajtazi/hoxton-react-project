import { useEffect, useState } from "react";
import "./App.css";
// let Question = {
//   category: "General Knowledge",
//   id: "622a1c357cc59eab6f94fe31",
//   correctAnswer: "Franc",
//   incorrectAnswers: ["Peso", "Dollar", "Gira"],
//   question: "What is the basic unit of currency for Equatorial Guinea?",
//   tags: ["currency", "general_knowledge"],
//   type: "Multiple Choice",
//   difficulty: "medium",
//   regions: [],
// };
type Question = {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: never[];
};
type Questions = Question[];
function App() {
  const [questions, setQuestions] = useState([
    {
      category: "General Knowledge",
      id: "622a1c357cc59eab6f94fe31",
      correctAnswer: "Franc",
      incorrectAnswers: ["Peso", "Dollar", "Gira"],
      question: "What is the basic unit of currency for Equatorial Guinea?",
      tags: ["currency", "general_knowledge"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
    },
    {
      category: "Arts & Literature",
      id: "622a1c397cc59eab6f950ec6",
      correctAnswer: "Haruki Murakami",
      incorrectAnswers: ["Oscar Wilde", "Umberto Eco", "Søren Kierkegaard"],
      question: "Which author wrote 'The Elephant Vanishes'?",
      tags: ["literature", "arts_and_literature"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
    },
    {
      category: "Film & TV",
      id: "622a1c347cc59eab6f94fbd8",
      correctAnswer: '"You motorboatin’ son of a b****!"',
      incorrectAnswers: [
        '"I could do this all day"',
        '"I’m the guy who does his job. You must be the other guy."',
        "\"I'm gonna make him an offer he can't refuse.\"",
      ],
      question: "Which of these quotes is from the film 'Wedding Crashers'?",
      tags: ["quotes", "film", "film_and_tv"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
    },
    {
      category: "Geography",
      id: "623735d1cfe13103f55eb570",
      correctAnswer: "Sierra Leone",
      incorrectAnswers: ["Slovenia", "Slovakia", "Sri Lanka"],
      question:
        "Which region of the world uses '.sl' at the end of its web addresses?",
      tags: ["geography"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
    },
    {
      category: "Food & Drink",
      id: "622a1c3b7cc59eab6f951605",
      correctAnswer: "Tomato ",
      incorrectAnswers: ["Onion", "Garlic", "Mango"],
      question: "'love apple' is a nickname for which food?",
      tags: ["food_and_drink"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
    },
    {
      category: "Music",
      id: "622a1c397cc59eab6f950c3a",
      correctAnswer: "Coldplay",
      incorrectAnswers: ["Level 42", "Deep Purple", "Feeder"],
      question:
        "Which British band released the studio album 'A Head Full of Dreams'?",
      tags: ["music"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
    },
    {
      category: "Science",
      id: "622a1c377cc59eab6f9505ad",
      correctAnswer: "Medicating patients during surgery",
      incorrectAnswers: ["Algae", "Karyotypes", "Spiders"],
      question: "What is Anesthesiology the study of?",
      tags: ["science", "words"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
    },
    {
      category: "Film & TV",
      id: "622a1c367cc59eab6f9501ee",
      correctAnswer: "David Yates",
      incorrectAnswers: ["Steven Spielberg", "Woody Allen", "Martin Scorsese"],
      question:
        "Which director directed Harry Potter and the Deathly Hallows – Part 2?",
      tags: ["harry_potter", "film", "film_and_tv"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
    },
    {
      category: "History",
      id: "622a1c3c7cc59eab6f95181f",
      correctAnswer: "Abraham Lincoln",
      incorrectAnswers: [
        "John F. Kennedy",
        "James Garfield",
        "William McKinley",
      ],
      question: "Which American president was assassinated in a theatre?",
      tags: ["presidents", "usa", "assassinations", "events", "history"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
    },
    {
      category: "History",
      id: "622a1c347cc59eab6f94f9c9",
      correctAnswer: "Ronald Reagan",
      incorrectAnswers: ["John Quincy Adams", "Gerald Ford", "James Polk"],
      question:
        "Who was the 40th president of the USA, in term during the period 1981–1989?",
      tags: ["usa", "presidents", "leaders", "history"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
    },
  ]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/results")
  //     .then((res) => res.json())
  //     .then((resultsFromServer) => {
  //       setQuestions(resultsFromServer);
  //       console.log(resultsFromServer);
  //     });
  // }, []);
  // console.log(questions[0].question);
  // console.log (questions[0].correctAnswer);

  return (
    <div className="App">
      {/* <h1>Let's start this project...</h1> */}
      <form>
        <h2 className="question"> {questions[0].question}</h2>
        <div className="options">
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].correctAnswer.toLowerCase()}
            />
            <span className="radio-value right">{questions[0].correctAnswer}</span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].incorrectAnswers[0].toLowerCase()}
            />
            <span className="radio-value"> {questions[0].incorrectAnswers[0]}</span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].incorrectAnswers[1].toLowerCase()}
            />
            <span className="radio-value"> {questions[0].incorrectAnswers[1]}</span>
          </label>
          <label>
            <input
              className="option"
              type="radio"
              name="question"
              value={questions[0].incorrectAnswers[2].toLowerCase()}
            />
            <span className="radio-value"> {questions[0].incorrectAnswers[2]}</span>
          </label>
        </div>

        {/* <button>SUBMIT</button> */}
      </form>
    </div>
  );
}

export default App;
