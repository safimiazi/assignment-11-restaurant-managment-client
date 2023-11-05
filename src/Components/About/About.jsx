import React from 'react';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src="https://i.ibb.co/YBKjj73/mahmoud-fawzy-FBez-BX26dy-Y-unsplash.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/dpk4b5v/jeswin-thomas-z-Pfa-Gze-N9-E-unsplash.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-2xl font-bold'>Granny best offers</h3>
                    <h1 className="text-4xl font-bold">Grilled Seafood Paella</h1>
                    <p className="py-6">Monkfish, onion, paella rice, garlic & smoked paprika, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping. creamy chesapeake crab dip with artichoke, baked and topped with a hot cheddar cheese.</p>
                    <button className="btn btn-neutral">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;