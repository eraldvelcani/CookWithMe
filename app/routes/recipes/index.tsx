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
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDifficulty, setSelectedDifficulty] = useState('Difficult');

    const recipesPerPage = 6;
    const { recipes } = loaderData as {recipes:Recipe[]};
    const difficulties = ['All', ...new Set(recipes.map((recipe) => recipe.difficulty))];
    const filteredRecipes = selectedDifficulty === 'All' ? recipes : recipes.filter((recipe) => recipe.difficulty === selectedDifficulty);

    const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
    const indexOfLast = currentPage * recipesPerPage;
    const indexOfFirst = indexOfLast - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirst, indexOfLast);


    return ( 
    <>
        <h2 className="text-3xl font-bold mb-5">🍳Recipes:</h2>
        <div className="flex flex-wrap gap-2 mb-8">
            {difficulties.map((difficulty) => (
                <button onClick={() => {setSelectedDifficulty(difficulty); setCurrentPage(1)}} key={difficulty} className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedDifficulty === difficulty ? 'bg-orange-500 text-white font-bold' : 'bg-yellow-400 text-gray-700'}`}>
                    {difficulty}
                </button>
            ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
            {currentRecipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id}/>
            ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPaginationSelection={setCurrentPage}/>
    </> );
}
 
export default RecipesPage;