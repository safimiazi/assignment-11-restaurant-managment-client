import { motion } from 'framer-motion';

const ImgSection = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <motion.div
                        transition={{
                            transition: 2,
                            delay: 0.2
                        }}
                        whileHover={{
                            scale: 1.2,
                            opacity: 0.8,
                            
                        }}
                        className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-3xl font-bold">Intimate Dining Experience</h3>
                        <p className="my-6 dark:text-gray-400">Immerse yourself in an ambiance of elegance and intimacy, where each visit is an unforgettable journey through flavors and culinary artistry.</p>
                    </motion.div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-3xl font-bold">Global Flavors, Local Charm</h3>
                        <p className="my-6 dark:text-gray-400"> Explore a diverse menu that fuses international culinary traditions with the warmth of local hospitality, delivering a truly unique dining adventure.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1695653423459-beb6b8a8169b?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h3 className="text-3xl font-bold">Sustainable Dining Practices</h3>
                        <p className="my-6 dark:text-gray-400">We take pride in our commitment to sustainability, ensuring that every meal not only satisfies your palate but also supports our planet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImgSection;