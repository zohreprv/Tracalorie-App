type WorkoutFilterProps = {
  setWorkoutFilter: React.Dispatch<React.SetStateAction<string>>;
};
const WorkoutFilter = ({ setWorkoutFilter }: WorkoutFilterProps) => {
  return (
    <div className="mt-3">
      <input
        type="text"
        id="filter-workouts"
        className="form-control"
        placeholder="Filter Workouts..."
        onChange={(e) => setWorkoutFilter(e.target.value)}
      />
    </div>
  );
};

export default WorkoutFilter;
