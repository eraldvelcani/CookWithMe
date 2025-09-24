const ContactPage = () => {
    return ( 
        <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-orange-400">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                💌 Contact Us
            </h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block font-md font-semibold text-white">Name: </label>
                    <input type="text" id="name" name="name" className="w-full mt-1 px-4 py-2 rounded-lg bg-orange-50 text-black focus:outline-0 focus:bg-orange-100" />
                </div>
                <div>
                    <label htmlFor="email" className="block font-md font-semibold text-white">E-Mail: </label>
                    <input type="email" id="email" name="email" className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black focus:outline-0 focus:bg-orange-100" />
                </div>
                <div>
                    <label htmlFor="topic" className="block font-md font-semibold text-white">Topic: </label>
                    <input type="text" id="topic" name="topic" className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-black focus:outline-0 focus:bg-orange-100" />
                </div>
                <div>
                    <label htmlFor="topic" className="block font-md font-semibold text-white">Message: </label>
                    <textarea id="message" name="message" className="w-full mt-1 px-4 py-2 rounded-lg bg-white text-orange-900 focus:outline-0 focus:bg-orange-100" />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg bg-green-800 cursor-pointer hover:bg-green-50 hover:text-green-800 transition">Submit</button>
            </form>
        </div>
     );
}
 
export default ContactPage;