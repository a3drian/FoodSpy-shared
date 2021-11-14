import { IFood } from './IFood';

export interface IMealFood {
   mfid: string;
   quantity: number;
   unit: string;
   food: IFood;
}