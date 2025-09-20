import type { Route } from "./+types/index";
import type { Recipe } from "~/types";
import RecipeCard from "~/components/RecipeCard";

export async function loader({ request }:Route.LoaderArgs):Promise<{recipes:Recipe[]}> { //TS: Route.LoaderArgs is the type/shape of request. Promise is the return type.
    const res = await fetch('http://localhost:8000/recipes');
    const data = await res.json();

    return { recipes: data };
}

const RecipesPage = ({ loaderData}:Route.ComponentProps) => { //the data returned from the function above is passed into the arguments here.
    const { recipes } = loaderData as {recipes:Recipe[]};
    console.log(recipes)

    return ( 
    <>
        <h2 className="text-3xl font-bold mb-5">🍳Recipes:</h2>
        <div className="grid gap-6 sm:grid-cols-2">
            {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id}/>
            ))}
        </div>
    </> );
}
 
export default RecipesPage;