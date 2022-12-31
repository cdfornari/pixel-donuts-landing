import { Category } from './';

export interface Product {
    id: number;
    titleVE: string;
    titleJP: string;
    price: number;
    priceYen: number;
    comparativePrice: number;
    image: string;
    category: Category;
}