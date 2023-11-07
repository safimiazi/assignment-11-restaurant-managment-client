import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const OrderedCard = ({ singleData, handleDelete }) => {
    console.log(singleData);
    const { _id, FoodImage, foodName, price, buyingDate, buyerName } = singleData

    return (
        <div className="card card-side bg-slate-300 shadow-xl flex justify-between pr-2 items-center">
            <figure><img className="w-[200px] h-full" src={FoodImage} alt="Movie" /></figure>
            <div className="">
                <div>
                    <h2 className="card-title">{foodName}</h2>
                    <p>Price: {price}</p>
                    <p>buyingDate: {buyingDate}</p>
                    <p>food owner: {buyerName}</p>
                </div>
            </div>
            <button onClick={()=>handleDelete(_id)} className="btn btn-neutral">delete</button>

        </div>
    );
};

export default OrderedCard;