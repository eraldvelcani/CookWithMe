import type { Route } from "./+types/individual";
import type { Recipe } from "~/types";
import { Link } from "react-router";

export async function loader({request, params}:Route.LoaderArgs) {
    const { id } = params;
    const res = await fetch(`${import.meta.env.VITE_API_URL}/recipes?filters[documentId][$eq]=${id}&populate=*`); //id comes from routes.ts -> recipes/:id; if documendId equals id from RecipeCard.tsx (which is now changed to documentId)
    if (!res.ok) throw new Response('Recipe not found...', {status: 404});

    const json:StrapiResponse<StrapiProject> = await res.json();
    const item = json.data[0];
    const recipe:Recipe = {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}` : '/images/no-image.png',
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
            <Link to="/recipes" className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition">Return to Recipes</Link>
            <div className="grid gap-8 items-start md:grid-cols-2 items-start">
                <div>
                    <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg shadow-md" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-300 mb-4">{recipe.title}</h1>
                    <span>Difficulty Level: </span><span className="text-gray-300 text-sm mb-4">{recipe.difficulty}</span>
                    <p className="text-gray-200 mb-6">{recipe.description}</p>
                </div>
            </div>
        </>
     );
}
 
export default IndividualRecipePage;