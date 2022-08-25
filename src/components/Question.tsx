import { QuestionType } from "../App";
import he from "he";
type Props = {
  questions: QuestionType[];
  currentQuestion: number;
};

export function Question({ questions, currentQuestion }: Props) {
  return (
    <h2 className="question">
      {he.decode(questions[currentQuestion].question)}
    </h2>
  );
}
