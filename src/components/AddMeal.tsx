import { useRef, useState } from 'react';
import MealItem from './MealItem';
import { useStat } from '../contexts/statContext';
import type { StatContextType } from '../types';

const AddMeal = ({ mealFilter }: { mealFilter: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { consumed, setConsumed } = useStat() as StatContextType;
  const mealName = useRef<HTMLInputElement>(null);
  const mealCalorie = useRef<HTMLInputElement>(null);
  const handleDelete = (id: number) => {
    setConsumed(consumed.filter((item) => item.id !== id));
  };
  const filteredMeal = consumed.filter((item) =>
    item.mealName.toLowerCase().includes(mealFilter.toLowerCase()),
  );
  const handleOnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mealName.current || !mealCalorie.current) return;
    setConsumed([
      ...consumed,
      {
        id: new Date().getTime(),
        mealName: mealName.current.value,
        calorie: Number(mealCalorie.current.value),
      },
    ]);
    mealName.current.value = '';
    mealCalorie.current.value = '';
  };
  return (
    <div>
      <div className="d-flex align-items-center">
        <h2 className="border-start border-primary border-3 p-2">
          Meals / Food Items
        </h2>
        <button
          className="btn btn-primary btn-sm ms-auto text-white fw-bold py-2 px-3 h-100"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-meal"
          aria-expanded="false"
          aria-controls="collapse-meal"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-plus"></i> Add Meal
        </button>
      </div>

      {/* <!-- Add Meal Form --> */}
      <div className={`collapse  ${isOpen ? 'show' : ''} `} id="collapse-meal">
        <div className="card card-body bg-light">
          <form id="meal-form" onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="meal-name"
                placeholder="Enter Meal or Item"
                ref={mealName}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="meal-calories"
                placeholder="Enter Calories"
                ref={mealCalorie}
              />
            </div>
            <button type="submit" className="btn btn-primary text-white">
              Add Meal Item
            </button>
          </form>
        </div>
      </div>

      <div id="meal-items">
        {filteredMeal.map((item) => (
          <MealItem
            key={item.id}
            mealName={item.mealName}
            calorie={item.calorie}
            id={item.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AddMeal;
