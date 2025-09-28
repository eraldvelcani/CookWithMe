import type { Recipe } from "~/types";
import RecipeCard from "./RecipeCard";

type FeaturedRecipesProps = {
    recipes: Recipe[],
    count: number
};

const FeaturedRecipes = ({ recipes, count=4 }:FeaturedRecipesProps) => {
    if (recipes.length === 0) return null;

    const featured = recipes.filter((r) => r.featured).slice(0, count);

    return ( 
    <section>
        <h2 className="text-2xl font-bold mb-6 text-orange-400">Try one of our most beloved recipes:</h2>
        <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    </section> );
}
 
export default FeaturedRecipes;