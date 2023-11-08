const FaQuestion = () => {
    return (
        <section className="dark:bg-gray-800 max-w-screen-xl mx-auto dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Hey ? STop !! Do you have any questions? Feel Free To Knock Us !!!!!!!</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Do you offer vegetarian or vegan menu options?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, we have a variety of vegetarian and vegan menu options available. Our chefs have crafted delicious dishes to cater to different dietary preferences. You can find these options marked on our menu for your convenience.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What are your restaurants operating hours?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Our restaurant is open from [10:00 am] to [11::00 pm] every [Days of the Week]. We serve both lunch and dinner during these hours. Please note that these hours are subject to change on holidays and special occasions, so its a good idea to check our website or contact us for the latest information</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Is there parking available at your restaurant?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, we have on-site parking available for our customers. You can park your vehicle conveniently and enjoy your meal without worrying about parking. If our parking lot is full, there are usually nearby parking options we can suggest.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FaQuestion;
