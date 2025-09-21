import type { Route } from "./+types/index";
import type { Recipe } from "~/types";
import FeaturedRecipes from "~/components/FeaturedRecipes";

export async function loader({request}:Route.LoaderArgs):Promise<{recipes:Recipe[]}> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/recipes`);
    const data = await res.json();
    return {recipes:data};
}

const HomePage = ({loaderData}:Route.ComponentProps) => {
    const {recipes} = loaderData;
    console.log(recipes)
    return(
    <>
        <FeaturedRecipes recipes={recipes} count={2} />
    </>);
}

export default HomePage;