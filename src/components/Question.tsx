import he from 'he';
import { QuestionType } from '../App';

interface IQuestion  {
  questions: QuestionType[];
  currentQuestion: number;
};

export function Question({ questions, currentQuestion }: IQuestion) {
  return <h2 className='question'>{he.decode(questions[currentQuestion].question)}</h2>
}
