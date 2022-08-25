import { useState } from "react";
import { QuestionsType } from "../App";
import { Buttons } from "../components/Buttons";
import { Form } from "../components/Form";
import { Question } from "../components/Question";
type Props = {
  questions: QuestionsType[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};
export function Quiz({
  questions,
  currentQuestion,
  setCurrentQuestion,
}: Props) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevioustButton, setShowPrevioustButton] = useState(false);

  const [answer, setAnswer] = useState(

    questions.results[currentQuestion].correct_answer
  );

  const showButtonNext = () => {
    setShowNextButton(true);
  };
  const showButtonPrevious = () => {
    if (currentQuestion === 1) setShowPrevioustButton(true);
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  //@ts-ignore
  const options = questions.results[currentQuestion].correct_answer
    .split() //@ts-ignore
    .concat(questions.results[currentQuestion].incorrect_answers);
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  return (
    <div className="quiz-contaier">
    <div className="quiz">
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
    </div>
    </div>
  );
}
