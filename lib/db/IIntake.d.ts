import { IMeal } from './IMeal';
export interface IIntake {
    id: string;
    email: string;
    createdAt: Date;
    meals: IMeal[];
}
