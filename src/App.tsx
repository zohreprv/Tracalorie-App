import Navbar from './components/Navbar';
import Progress from './components/Progress';
import Stats from './components/Stats';
import AddMeal from './components/AddMeal';
import AddWorkout from './components/AddWorkout';
import { useState } from 'react';
import MealFilter from './components/MealFilter';
import WorkoutFilter from './components/WorkoutFilter';
import Footer from './components/Footer';

const App = () => {
  const [mealFilter, setMealFilter] = useState<string>('');
  const [workoutFilter, setWorkoutFilter] = useState<string>('');
  return (
    <>
      <Navbar />
      <Stats />
      <Progress />
      <section className="mx-5">
        <div
          className="d-flex flex-column flex-lg-row gap-4"
          style={{ marginBottom: '5rem' }}
        >
          <div className="w-100 d-flex flex-column gap-4">
            <MealFilter setMealFilter={setMealFilter} />
            <AddMeal mealFilter={mealFilter} />
          </div>

          <div className="w-100 d-flex flex-column gap-4">
            <WorkoutFilter setWorkoutFilter={setWorkoutFilter} />
            <AddWorkout workoutFilter={workoutFilter} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
