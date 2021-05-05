import { IFood } from './IFood';
import { IMealFood } from './IMealFood';

export interface IMeal {
   id: string;
   type: string;
   createdAt: Date;
   mealFoods: IMealFood[];
   foods: IFood[];
}