import type { Route } from "./+types/index";
import type { Recipe, StrapiRecipe, StrapiResponse } from "~/types";
import FeaturedRecipes from "~/components/FeaturedRecipes";
import AboutPreview from "~/components/AboutPreview";


export async function loader({request}:Route.LoaderArgs):Promise<{recipes:Recipe[]}> {
    const url = new URL(request.url);

    const [recipeRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/recipes?filters[featured][$eq]=true&populate=*`)
    ]);

    if (!recipeRes.ok) {
        throw new Error('Failed to fetch recipes...')
    };

    const recipesJson:StrapiResponse<StrapiRecipe> = await recipeRes.json();

    const recipes = recipesJson.data.map((item) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        url: item.url,
        difficulty: item.difficulty,
        featured: item.featured
    }))

    return {recipes};
    // const res = await fetch(`${import.meta.env.VITE_API_URL}/recipes`);
    // const data = await res.json();
    // return {recipes:data};
}

const HomePage = ({loaderData}:Route.ComponentProps) => {
    const {recipes} = loaderData;
    console.log(recipes)
    return(
    <>
        <FeaturedRecipes recipes={recipes} count={2} />
        <AboutPreview />
    </>);
}

export default HomePage;