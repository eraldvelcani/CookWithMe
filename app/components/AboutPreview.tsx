import { Link } from "react-router";

const AboutPreview = () => {
    return ( 
        <section className="mt-12 p-10 flex md:flex-row flex-col items-center gap-8 bg-orange-300">
            <img className="max-w-70" src="/images/logo-black-sm.png"/>
            <div>
                <h2 className="text-3xl font-bold text-black mb-2">About Us</h2>    
                <p className="text-black mb-4 max-w text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus, saepe expedita cumque, hic adipisci quaerat culpa voluptatum, enim veniam vero aspernatur? Quae praesentium, repellat quaerat ratione minima excepturi in, facere, magni quam consectetur consequatur quia hic! Adipisci cupiditate illo eius, voluptatem similique beatae, nam ad praesentium amet laboriosam aspernatur!</p>
                <Link to="/about" className="inline-block text-pink-900 hover:underline text-lg">Learn More</Link>
            </div>
        </section>
     );
}
 
export default AboutPreview;