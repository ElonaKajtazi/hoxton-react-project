import { Category } from "../pages/Categories";

type Props = {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[];
};
export function CategoriesSelects({
  categories,
  setDifficulty,
  setCategory,
}: Props) {
  return (
    <div className="selects">
      <select
        defaultValue="Select Category"
        onChange={(e) => setCategory(Number(e.target.value))}
      >
        <option>Category</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
          // console.log(categoryAsNumber)
        ))}
      </select>

      {/* <button>Start</button> */}

      <select
        onChange={(e) => {
          setDifficulty(e.target.value);
        }}
      >
        <option>Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
