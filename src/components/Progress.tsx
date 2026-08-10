import { useStat } from '../contexts/statContext';
import type { StatContextType } from '../types';

const Progress = () => {
  const { limit, consumed, burned } = useStat() as StatContextType;
  const totalConsumed = consumed.reduce((acc, item) => acc + item.calorie, 0);
  const totalBurned = burned.reduce((acc, item) => acc + item.calorie, 0);
  const net = ((totalConsumed - totalBurned) * 100) / limit;
  return (
    <section className="px-5">
      <div className="progress">
        <div
          id="calorie-progress"
          className="progress-bar"
          role="progressbar"
          style={{ width: `${net}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Progress;
