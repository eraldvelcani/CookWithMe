export type Recipe = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image: string;
    url: string;
    difficulty: string;
    featured: boolean;
}

export type StrapiResponse<T> = {
    data: T[]
}

export type StrapiRecipe = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image?: {
        url: string;
        formats?: {
            thumbnail?: {url:string};
            small?: {url:string};
            medium?: {url:string};
            large?: {url:string};
        };
    };
    url: string;
    difficulty: string;
    featured: boolean;
}