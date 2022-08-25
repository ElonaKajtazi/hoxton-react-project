import { useState } from "react";
import { QuestionType } from "../App";
import { Buttons } from "../components/Buttons";
import { Form } from "../components/Form";
import { Question } from "../components/Question";
type Props = {
  questions: QuestionType[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  // setUserAnswered: React.Dispatch<React.SetStateAction<boolean>>;
  // userAnswered: boolean
  // option: string
  setFinalScore: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
export function Quiz({
  questions,
  currentQuestion,
  setCurrentQuestion,
  setFinalScore,
  score,
  setScore,
}: // userAnswered,
// option,

Props) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevioustButton, setShowPrevioustButton] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  // const [answer, setAnswer] = useState(
  //   questions[currentQuestion].correct_answer
  // );
  const submitBtn = () => {
    if (currentQuestion === questions.length) setShowSubmitButton(true);
  };

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

  const options: string[] = [
    questions[currentQuestion].correct_answer,
    ...questions[currentQuestion].incorrect_answers,
  ];

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
          score={score}
          setScore={setScore}
        />
        <Buttons
          setFinalScore={setFinalScore}
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
