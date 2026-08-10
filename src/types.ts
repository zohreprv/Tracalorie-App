export type StatContextType = {
  limit: number;
  consumed: ConsumedType[];
  burned: BurnedType[];
  setLimit: (limit: number) => void;
  setConsumed: React.Dispatch<React.SetStateAction<ConsumedType[]>>;
  setBurned: React.Dispatch<React.SetStateAction<BurnedType[]>>;
};
export type ConsumedType = {
  id: number;
  mealName: string;
  calorie: number;
};
export type BurnedType = {
  id: number;
  workoutName: string;
  calorie: number;
};
