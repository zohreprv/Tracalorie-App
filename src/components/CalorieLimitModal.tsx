import { useRef } from 'react';
import { useStat } from '../contexts/statContext';
import type { StatContextType } from '../types';
const CalorieLimitModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: Boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setLimit } = useStat() as StatContextType;
  const limitInput = useRef<HTMLInputElement>(null);
  return (
    <div
      className={`modal ${isModalOpen ? 'show' : ''}`}
      id="limit-modal"
      aria-labelledby="limitModalLabel"
      aria-hidden={!isModalOpen}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="limitModalLabel">
              Set Daily Limit
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="limit-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (!limitInput.current) return;
                setLimit(Number(limitInput.current.value));
                setIsModalOpen(false);
              }}
            >
              <div className="mb-3">
                <label htmlFor="limit" className="form-label">
                  Daily Calorie Limit
                </label>
                <input
                  type="text"
                  ref={limitInput}
                  className="form-control"
                  id="limit"
                  placeholder="2000"
                />
              </div>

              <button type="submit" className="btn btn-primary text-white">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieLimitModal;
