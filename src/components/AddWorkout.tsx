import { useRef, useState } from 'react';
import WorkoutItem from './WorkoutItem';
import { useStat } from '../contexts/statContext';
import type { StatContextType } from '../types';

const AddWorkout = ({ workoutFilter }: { workoutFilter: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { burned, setBurned } = useStat() as StatContextType;
  const workoutName = useRef<HTMLInputElement>(null);
  const workoutCalorie = useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setBurned(burned.filter((item) => item.id !== id));
  };
  const filteredWorkout = burned.filter((item) =>
    item.workoutName.toLowerCase().includes(workoutFilter.toLowerCase()),
  );
  const handleOnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!workoutName.current || !workoutCalorie.current) return;
    setBurned([
      ...burned,
      {
        id: new Date().getTime(),
        workoutName: workoutName.current?.value,
        calorie: Number(workoutCalorie.current?.value),
      },
    ]);
    workoutName.current.value = '';
    workoutCalorie.current.value = '';
  };
  return (
    <div>
      <div className="d-flex align-items-center">
        <h2 className="border-start border-secondary border-3 p-2">Workouts</h2>
        <button
          className="btn btn-secondary btn-sm ms-auto text-white fw-bold py-2 px-3 h-100"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-workout"
          aria-expanded="false"
          aria-controls="collapse-workout"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-plus"></i> Add Workout
        </button>
      </div>

      {/* <!-- Add Workout Form --> */}
      <div
        className={`collapse  ${isOpen ? 'show' : ''} `}
        id="collapse-workout"
      >
        <div className="card card-body bg-light">
          <form id="workout-form" onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="workout-name"
                placeholder="Enter Workout"
                ref={workoutName}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="workout-calories"
                placeholder="Enter Calories"
                ref={workoutCalorie}
              />
            </div>
            <button type="submit" className="btn btn-primary text-white">
              Add Workout Item
            </button>
          </form>
        </div>
      </div>
      <div id="workout-items">
        {filteredWorkout.map((item) => (
          <WorkoutItem
            name={item.workoutName}
            calorie={item.calorie}
            id={item.id}
            handleDelete={handleDelete}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AddWorkout;
