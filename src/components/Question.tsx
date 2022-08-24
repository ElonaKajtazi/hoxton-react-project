import { QuestionsType } from "../App";

type Props = {
  questions: QuestionsType[];
  currentQuestion: number;
};

export function Question({ questions, currentQuestion }: Props) {
  return (
    //@ts-ignore
    <h2 className="question">{questions.results[currentQuestion].question}</h2>
  );
}
