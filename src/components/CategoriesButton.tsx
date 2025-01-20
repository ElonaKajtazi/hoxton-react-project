
interface ICategoriesBurron  {
  handleStartQuiz: () => void;
}

export function CategoriesButton({ handleStartQuiz }: ICategoriesBurron) {
  return (
    <div>
      <button className='button' onClick={handleStartQuiz}>Start</button>
    </div>
  );
}
