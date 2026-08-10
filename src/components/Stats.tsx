import { useStat } from '../contexts/statContext';
import type { StatContextType } from '../types';
const Stats = () => {
  const { limit, consumed, burned } = useStat() as StatContextType;
  const totalConsumed = consumed.reduce((acc, item) => acc + item.calorie, 0);
  const totalBurned = burned.reduce((acc, item) => acc + item.calorie, 0);
  const net = totalConsumed - totalBurned;
  const remaining = limit - net;
  return (
    <>
      <section className="stats my-5 px-5">
        <div className="row g-3 my-3">
          <div className="col-md-6">
            <div className="card text-center bg-dark text-white">
              <div className="card-body">
                <div id="calories-limit" className="fs-1 fw-bold">
                  {' '}
                  {limit}
                </div>
                <p className="fs-4">Daily Calorie Limit</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card text-center bg-primary text-white">
              <div className="card-body">
                <div id="calories-total" className="fs-1 fw-bold">
                  {net}
                </div>
                <p className="fs-4">Gain/Loss</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 text-center">
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <div id="calories-consumed" className="fs-1 fw-bold">
                  {totalConsumed}
                </div>
                <p className="fs-4">Calories Consumed</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <div id="calories-burned" className="fs-1 fw-bold">
                  {totalBurned}
                </div>
                <p className="fs-4">Calories Burned</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <div id="calories-remaining" className="fs-1 fw-bold">
                  {remaining}
                </div>
                <p className="fs-4">Calories Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
<></>;
