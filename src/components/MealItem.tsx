type MealItemProps = {
  id: number;
  mealName: string;
  calorie: number;
  handleDelete: (id: number) => void;
};

const MealItem = ({ id, mealName, calorie, handleDelete }: MealItemProps) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mx-1">{mealName}</h4>
          <div className="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">
            {calorie}
          </div>
          <button
            className="delete btn btn-danger btn-sm mx-2"
            onClick={() => handleDelete(id)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
