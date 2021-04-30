import { IFood } from './IFood';

export interface IMeal {
   id: string;
   type: string;
   createdAt?: Date;
   foodIDs: string[];
   foods: IFood[];
}