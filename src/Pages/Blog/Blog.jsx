import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <Helmet>
                <title>Granny|Blog</title>
            </Helmet>
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm items-center lg:flex-row">
                    <img src="https://i.ibb.co/1Zx23fG/angularjs-one-way-data-binding.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-4xl font-bold text-blue-600">1. What is One way data binding?</h3>
                        <p className="my-6 text-xl font-semibold dark:text-gray-400">
                            One-way data binding is a programming concept where data moves in a single direction, typically from a data source to the user interface (UI) elements of a software application. In this model, changes in the data source automatically update the corresponding UI components, ensuring that the displayed information is always synchronized with the underlying data. However, any modifications made by users within the UI do not affect the original data source. This unidirectional flow simplifies the management of complex user interfaces by providing a clear and predictable way to update and display data without the risk of unintended changes propagating back to the data source. One-way data binding is a fundamental principle in many modern front-end frameworks, enhancing the efficiency and maintainability of web and software applications.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://cdn-images-1.medium.com/max/800/1*4KFhVONFQiqqnuXBMu8wCA.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-4xl font-bold text-blue-600">2. What is NPM in node.js?</h3>
                        <p className="my-6 text-xl dark:text-gray-400">
                            NPM, short for Node Package Manager, is a powerful and widely used package manager for Node.js, a popular JavaScript runtime environment. NPM simplifies the process of installing, managing, and sharing libraries, frameworks, and tools within Node.js applications. It provides a vast ecosystem of open-source packages and modules created by developers worldwide, enabling Node.js developers to leverage existing solutions and enhance their projects without reinventing the wheel. With NPM, developers can easily install packages, manage dependencies, and update libraries, streamlining the development workflow and fostering collaboration among the Node.js community. NPM also includes a command-line interface that allows developers to initiate various tasks, such as installing packages, running scripts, and managing project configurations, making it an essential tool for Node.js developers.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm items-center lg:flex-row">
                    <img src="https://3.bp.blogspot.com/-Zhqz2GbQ-_M/VDN6JqYaWYI/AAAAAAAAA_0/tXR3w6hXaN0/s1600/dark_gray.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-4xl font-bold text-blue-500">
                            3. Mongodb vs mySQL database.</h3>
                        <p className="my-6 text-xl dark:text-gray-400">MongoDB stores data in flexible, JSON-like documents, which makes it highly suitable for unstructured or semi-structured data. It provides excellent scalability and can handle large volumes of data, making it a preferred choice for big data applications. MongoDB uses a flexible schema, allowing fields to vary between documents.
                            <br />
                            On the other hand, MySQL uses a structured, tabular format with fixed schemas. It is ideal for well-defined, structured data and complex queries. MySQL is ACID-compliant, ensuring data integrity, while MongoDB sacrifices some degree of transactional consistency for improved scalability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;