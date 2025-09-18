import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home/index.tsx"), route('about', './routes/about/index.tsx'), route('contact', './routes/contact/index.tsx'), route('recipes', './routes/recipes/index.tsx'), route('subscription', './routes/subscription/index.tsx')] satisfies RouteConfig;
