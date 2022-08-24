import { useState } from "react";
import { QuestionsType } from "../App";
import { Buttons } from "../components/Buttons";
import { Form } from "../components/Form";
import { Question } from "../components/Question";
type Props = {
  questions: QuestionsType[];
  currentQuestion: number;
  // answer: string | null;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};
export function Quiz({
  questions,
  currentQuestion,
  // answer,
  setCurrentQuestion,
}: Props) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevioustButton, setShowPrevioustButton] = useState(false);
  const [answer, setAnswer] = useState(
    questions.results[currentQuestion].correct_answer
  );
  // console.log(answer);
  const showButtonNext = () => {
    setShowNextButton(true);
  };
  const showButtonPrevious = () => {
    if (currentQuestion === 1) setShowPrevioustButton(true);
    // if (currentQuestion >= questions.results.length ) return
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  // options: shuffle(data.incorrect_answers.concat(data.correct_answer))

  const options = questions.results[currentQuestion].correct_answer
    .split()
    .concat(questions.results[currentQuestion].incorrect_answers);
  const shuffledOptions = options.sort(() => Math.random() - 0.5);
  console.log(shuffledOptions);
  // console.log(options);
  return (
    <>
      {" "}
      {/* {questions.results.map((question) => ( */}
      <Question questions={questions} currentQuestion={currentQuestion} />
      <Form
        shuffledOptions={shuffledOptions}
        showButtonNext={showButtonNext}
        showButtonPrevious={showButtonPrevious}
        questions={questions}
        currentQuestion={currentQuestion}
      />
      <Buttons
        showPrevioustButton={showPrevioustButton}
        currentQuestion={currentQuestion}
        previousQuestion={previousQuestion}
        showNextButton={showNextButton}
        questions={questions}
        nextQuestion={nextQuestion}
      />
    </>
  );
}
