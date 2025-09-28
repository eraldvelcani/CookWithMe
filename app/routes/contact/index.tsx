import type { Route } from "./+types";
// import { Form } from "react-router";

// export async function action({ request }:Route.ActionArgs) {
//     const formData = await request.formData();
//     const name = formData.get('name') as string;
//     const email = formData.get('email') as string;
//     const topic = formData.get('topic') as string;
//     const message = formData.get('message') as string;

//     const data = {
//         name,
//         email,
//         topic,
//         message
//     };

//     const errors:Record<string, string> = {}; //the object's name is a string, and its value is a string.
//     if (!name) errors.name = 'Please enter a name.';
//     if (!email) {
//         errors.email = 'Please enter an email.';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         errors.email = 'Email format is not valid!';
//     };
//     if (!topic) errors.topic = 'Please enter a topic.';
//     if (!message) errors.message = 'Please enter a message.';
//     if (Object.keys(errors).length > 0) { //if the errors object declared above contains at least one key, that means there's an error somewhere.
//         return {errors};
//     };

//     return {message: 'Form submitted successfully!'}; 
// }



const ContactPage = ({ actionData }:Route.ComponentProps) => {
    // const errors = actionData?.errors || {}; //Get actionData.errors if possible, but if actionData doesn’t exist, just use an empty object {} instead.

    return ( 
        <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-orange-400">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                💌 Contact Us
            </h2>
            
            <form action="https://formspree.io/f/movkjbgp" method="post" className="space-y-6">
                <div>
                    <label htmlFor="name" className="block font-md font-semibold text-white">Name: </label>
                    <input type="text" id="name" name="name" className="w-full mt-1 px-4 py-2 rounded-lg bg-orange-50 text-black focus:outline-0 focus:bg-orange-100" />
                    {/* {errors.name && <p className="text-red-900 text-sm mt-1 font-semibold">{errors.name}</p>} */}
                </div>
                <div>
                    <label htmlFor="email" className="block font-md font-semibold text-white">E-Mail: </label>
                    <input type="email" id="email" name="email" className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black focus:outline-0 focus:bg-orange-100" />
                    {/* {errors.name && <p className="text-red-900 text-sm mt-1 font-semibold">{errors.email}</p>} */}
                </div>
                <div>
                    <label htmlFor="topic" className="block font-md font-semibold text-white">Topic: </label>
                    <input type="text" id="topic" name="topic" className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black focus:outline-0 focus:bg-orange-100" />
                    {/* {errors.name && <p className="text-red-900 text-sm mt-1 font-semibold">{errors.topic}</p>} */}
                </div>
                <div>
                    <label htmlFor="message" className="block font-md font-semibold text-white">Message: </label>
                    <textarea id="message" name="message" className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-orange-900 focus:outline-0 focus:bg-orange-100" />
                    {/* {errors.name && <p className="text-red-900 text-sm mt-1 font-semibold">{errors.message}</p>} */}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg bg-green-800 cursor-pointer hover:bg-green-50 hover:text-green-800 transition">Submit</button>
                {/* {actionData?.message ? (<p className="mb-6 bg-green-700 text-white text-center rounded-sm shadow-md p-3">{actionData.message}</p>) : null} */}
            </form>
        </div>
     );
}
 
export default ContactPage;