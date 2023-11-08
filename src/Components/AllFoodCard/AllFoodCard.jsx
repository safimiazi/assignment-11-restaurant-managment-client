import { Link } from "react-router-dom";


const AllFoodCard = ({ singleData }) => {
    const { Quantity, Count, _id, FoodCategory, FoodImage, FoodName, Price, ShortDescription, LongDescription } = singleData;

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={FoodImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="card-title">{FoodName}</h2>
                        <p>Category: {FoodCategory}</p>
                        <p>Price: {Price}</p>
                        <p>Quantity: {Quantity}</p>
                    </div>
                    <Link to={`/card-details/${_id}`}>
                        <button type="button" className="flex items-center btn justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Details</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;




