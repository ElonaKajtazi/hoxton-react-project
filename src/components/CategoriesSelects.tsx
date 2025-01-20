import { Category } from '../pages/Categories';

interface ICategoriesSelects {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[];
};

export function CategoriesSelects({
  categories,
  setDifficulty,
  setCategory,
}: ICategoriesSelects) {

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value)
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value)
  }

  return (
    <div className='selects'>
      <select defaultValue='Select Category' onChange={handleCategoryChange}>
        <option>Category</option>
        {categories?.map((category) => (
          <option value={category.name} key={category.id}>{category.name}</option>
        ))}
      </select>
      <select onChange={handleDifficultyChange}>
        <option>Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  )
}
