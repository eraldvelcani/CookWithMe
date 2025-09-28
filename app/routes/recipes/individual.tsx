import type { Route } from "./+types/individual";
import type { Recipe, StrapiRecipe, StrapiResponse } from "~/types";
import { Link } from "react-router";
import { FaA, FaAngleLeft } from "react-icons/fa6";

export async function loader({request, params}:Route.LoaderArgs) {
    const { id } = params;
    const res = await fetch(`${import.meta.env.VITE_API_URL}/recipes?filters[documentId][$eq]=${id}&populate=*`); //id comes from routes.ts -> recipes/:id; if documendId equals id from RecipeCard.tsx (which is now changed to documentId)
    if (!res.ok) throw new Response('Recipe not found...', {status: 404});

    const json:StrapiResponse<StrapiRecipe> = await res.json();
    const item = json.data[0];
    const recipe:Recipe = {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        url: item.url,
        difficulty: item.difficulty,
        featured: item.featured
    };
    return {recipe};
}

export function HydrateFallback () { //what will be shown on-screen during client hydration
    return <div>Loading Page...</div>
}

const IndividualRecipePage = ({loaderData}:Route.ComponentProps) => {
    const { recipe } = loaderData;
    return ( 
        <>
            <Link to="/recipes" className="flex items-center max-w-47 text-xl text-orange-600 hover:text-orange-900 mb-6 transition"><FaAngleLeft />Return to Recipes</Link>
            <div className="grid gap-8 items-start md:grid-cols-2 items-start">
                <div>
                    <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg shadow-md" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-orange-500 mb-2">{recipe.title}</h1>
                    <span className="font-semibold">Difficulty Level: </span><span className={`text-base font-semibold 
                    ${recipe.difficulty === "Easy" ? "text-green-600" 
                    : recipe.difficulty === "Medium" ? "text-orange-500" 
                    : "text-red-600"}`}>{recipe.difficulty}</span>
                    <p className="text-black mb-6 mt-5">{recipe.description}</p>
                    <h3 className="text-lg text-orange-800">Ingredients:</h3>
                </div>
            </div>
        </>
     );
}
 
export default IndividualRecipePage;