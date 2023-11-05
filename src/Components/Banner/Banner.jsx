
const Banner = () => {
    return (

        <div className="max-w-screen-xl mx-auto md:px-10">
            <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="/src/assets/images/banner1.png" className="w-full" />
                <div className="absolute rounded-xl flex items-center left-[25%] right-[25%] z-10 h-full  top-0 ">
                    <div className='text-white text-center md:space-y-7 space-y-2'>
                        <h5 className='text-xl font-bold'>Hello, We Are Granny</h5>
                        <h2 className="md:text-5xl text-2xl">Real Cooking, Perfect Taste</h2>
                        <div>
                        <button className="btn bg-white">Read more</button>
                        </div>
                    </div>
                </div>
                <div className=" absolute inset-0 bg-[#2e3130] opacity-70">

                </div>
                <div className="absolute   flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/src/assets/images/banner1.png" className="w-full" />
                <div className="absolute rounded-xl flex items-center left-[25%] right-[25%] z-10 h-full  top-0 ">
                    <div className='text-white text-center md:space-y-7 space-y-2'>
                        <h5 className='text-xl font-bold'>Hello, We Are Granny</h5>
                        <h2 className="md:text-5xl text-2xl">Real Cooking, Perfect Taste</h2>
                        <div>
                            <button className="btn bg-white">Read more</button>
                        </div>
                    </div>
                </div>
                <div className=" absolute inset-0 bg-[#2e3130] opacity-70">

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/src/assets/images/banner3.png" className="w-full" />
                <div className="absolute rounded-xl flex items-center left-[25%] right-[25%] z-10 h-full  top-0 ">
                    <div className='text-white text-center md:space-y-7 space-y-2'>
                        <h5 className='text-xl font-bold'>Hello, We Are Granny</h5>
                        <h2 className="md:text-5xl text-2xl">Real Cooking, Perfect Taste</h2>
                        <div>
                        <button className="btn bg-white">Read more</button>
                        </div>
                    </div>
                </div>
                <div className=" absolute inset-0 bg-[#2e3130] opacity-70">

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/src/assets/images/banner3.png" className="w-full" />
                <div className="absolute rounded-xl flex items-center left-[25%] right-[25%] z-10 h-full  top-0 ">
                    <div className='text-white text-center md:space-y-7 space-y-2'>
                        <h5 className='text-xl font-bold'>Hello, We Are Granny</h5>
                        <h2 className="md:text-5xl text-2xl">Real Cooking, Perfect Taste</h2>
                        <div>
                        <button className="btn bg-white">Read more</button>
                        </div>
                    </div>
                </div>
                <div className=" absolute inset-0 bg-[#2e3130] opacity-70">

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Banner;