import type { Recipe } from "~/types";
import { Link } from "react-router";

const RecipeCard = ({recipe}:{recipe:Recipe}) => {
    return ( 
    <Link className="block transform transition duration-300 hover:scale-[1.02]" to={`/recipes/${recipe.documentId}`}>
        <div className="bg-rose-200 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
            <img className="w-full h-60 object-cover" src={recipe.image} alt={recipe.title} />
            <div className="p-5">
                <h3 className="text-3xl font-semibold text-orange-500 mb-1">{recipe.title}</h3>
                <p className="text-lg font-semibold text-orange-500 mb-2">{recipe.description}</p>
                <p className={`text-base font-semibold 
                    ${recipe.difficulty === "Easy" ? "text-green-600" 
                    : recipe.difficulty === "Medium" ? "text-orange-500" 
                    : "text-red-600"}`}>{recipe.difficulty}</p>
            </div>
        </div>
    </Link> );
}
 
export default RecipeCard;