import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Banner = () => {
  const slides = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" opacity-90 bg-black  h-[80vh] max-w-screen-xl mx-auto  rounded-xl relative group">
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-xl"></div>


 <div className='absolute bottom-[35%] md:top-[35%] top-[5%] text-center right-[20%] left-[20%] space-y-3'>
        <h1 className='text-4xl font-bold text-white'>Welcome to My Restaurant</h1>
        <p className='text-white'>Discover exquisite flavors and exceptional dining at our restaurant, where passion meets perfection in every dish we serve with love.</p>
       <Link to="/all-food"><button className='btn mt-2'>Explore more</button></Link>
    </div>

    <div
style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
className="w-full h-full bg-center bg-cover duration-500"
    >
    </div>
    {/* Left Arrow */}
    <div className="hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer -translate-x-0 translate-y-[-50%] lg:-translate-x-0 lg:left-5">
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className="hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer -translate-x-0 translate-y-[-50%] lg:-translate-x-0 lg:right-5">
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className="flex -mt-10 justify-center ">
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className="text-2xl cursor-pointer"
        >
          <RxDotFilled className='text-white' />
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Banner;