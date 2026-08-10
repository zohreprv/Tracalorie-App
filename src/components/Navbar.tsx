import { useState } from 'react';
import CalorieLimitModal from './CalorieLimitModal';
import { useStat } from '../contexts/statContext';
import type { StatContextType } from '../types';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setConsumed, setBurned } = useStat() as StatContextType;
  return (
    <>
      <header className="bg-primary d-sm-flex justify-content-between align-items-center text-white text-center py-2 px-5">
        <h1>
          <i className="fa-solid fa-utensils"></i> Tracalorie
        </h1>
        <div>
          <button
            className="btn btn-outline-light mx-3"
            data-bs-toggle="modal"
            data-bs-target="#limit-modal"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Set Daily Limit
          </button>
          <button
            id="reset"
            className="btn btn-outline-light"
            onClick={() => {
              setBurned([]);
              setConsumed([]);
            }}
          >
            Reset Day
          </button>
        </div>
      </header>
      {isModalOpen && (
        <CalorieLimitModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Navbar;
