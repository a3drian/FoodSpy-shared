import { IMeal } from './IMeal';

export interface IIntake {
   id: string; // will be necessary when updating an existing intake
   email: string;
   createdAt: Date;
   mealIDs: string[];
   meals: IMeal[];
}