export interface ReceipeInterface {
    id: string;
    name: string;
    author: string;
    reference: string;
    description?: string;
    prepTime?: number;
    cookTime?: number;
    keywords?: string[];
    yield?: string;
    category?: string;
    calories?: number,
    recipeCuisine?: string;
    ingredients: string[];
    instructions: string[];
    additionalNotes: string[];
}