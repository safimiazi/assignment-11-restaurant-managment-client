import { Link } from "react-router-dom";

const MyAddedFoodCard = ({ singleData }) => {
    const {_id, FoodImage, FoodName, Price } = singleData
   
    return (
        <div className="card card-side bg-slate-300 shadow-xl flex items-center gap-10 pr-2">
            <figure className="w-[200px] h-full"><img className="w-full h-full" src={FoodImage} alt="Movie" /></figure>
            <div className="">
                <h2 className="card-title">Food: {FoodName}</h2>
                <p>Food price: {Price}</p>
            </div>
            <div className="">
                <Link to={`/update-food-items/${_id}`}><button className="btn btn-neutral">update</button></Link>
            </div>
        </div>
    );
};

export default MyAddedFoodCard;