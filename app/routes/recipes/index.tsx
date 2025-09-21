import type { Route } from "./+types/index";
import type { Recipe } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import RecipeCard from "~/components/RecipeCard";


export async function loader({ request }:Route.LoaderArgs):Promise<{recipes:Recipe[]}> { //TS: Route.LoaderArgs is the type/shape of request. Promise is the return type.
    const res = await fetch('http://localhost:8000/recipes');
    const data = await res.json();

    return { recipes: data };
}

const RecipesPage = ({ loaderData}:Route.ComponentProps) => { //the data returned from the function above is passed into the arguments here.
    const { recipes } = loaderData as {recipes:Recipe[]};

    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 2;
    const totalPages = Math.ceil(recipes.length / recipesPerPage);
    const indexOfLast = currentPage * recipesPerPage;
    const indexOfFirst = indexOfLast - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);

    return ( 
    <>
        <h2 className="text-3xl font-bold mb-5">🍳Recipes:</h2>
        <div className="grid gap-6 sm:grid-cols-2">
            {currentRecipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id}/>
            ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPaginationSelection={setCurrentPage}/>
    </> );
}
 
export default RecipesPage;