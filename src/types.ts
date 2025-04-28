export interface Food {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image?: string;
}

export interface Intake {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Goal {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}
