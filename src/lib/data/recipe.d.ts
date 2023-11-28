export interface Author {
    name: string;
    reference?: string;
}

export interface Nutrition {
    calories: string;
}

export interface ReceipeInterface {
    id: string;
    name: string;
    author: Author;
    description?: string;
    prepTime?: number;
    cookTime?: number;
    keywords?: string[];
    yield?: string;
    category?: string;
    recipeCuisine?: string;
    nutrition?: Nutrition;
    ingredients: string[];
    instructions: string[];
}