// all properties of a Food are calculated based off 100 g quantity
export interface IFood {
	id: string;
	name: string;
	energy: number;
	fats: number;
	saturates: number;
	carbohydrates: number;
	sugars: number;
	proteins: number;
	salt: number;
}