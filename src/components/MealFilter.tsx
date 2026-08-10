type MealFilterProps = {
  setMealFilter: React.Dispatch<React.SetStateAction<string>>;
};
const MealFilter = ({ setMealFilter }: MealFilterProps) => {
  return (
    <div className="mt-3">
      <input
        type="text"
        id="filter-meals"
        className="form-control"
        placeholder="Filter Meals..."
        onChange={(e) => setMealFilter(e.target.value)}
      />
    </div>
  );
};

export default MealFilter;
