import { Link } from "react-router-dom";


const AllFoodCard = ({singleData}) => {
    const { Count, _id, FoodCategory, FoodImage, FoodName, Price, ShortDescription, LongDescription } = singleData;

    return (
        <div>
        <div className="card h-96 hover: bg-zinc-700 text-white shadow-xl">
            <figure className="px-10 pt-10 rounded-xl mt-5">
                <img src={FoodImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{FoodName}</h2>
                <p>Category: {FoodCategory}</p>
                <p>Price: {Price}</p>
                <div className="card-actions">
                    <Link to={`/card-details/${_id}`}><button className="btn btn-neutral">Details</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AllFoodCard;