import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFoodItems = () => {
    const { _id, Country, Email, FoodCategory, FoodImage, FoodName, LongDescription, Name, Price, Quantity, ShortDescription } = useLoaderData()
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const Country = form.country.value;
        const FoodCategory = form.foodCategory.value;
        const FoodImage = form.foodImage.value;
        const FoodName = form.foodName.value;
        const Quantity = form.quantity.value;
        const Price = form.price.value;
        const ShortDescription = form.description.value;
        const LongDescription = form.longDescription.value;

        const updateItem = { Country, FoodCategory, FoodImage, FoodName, Quantity, Price, ShortDescription, LongDescription }

        fetch(`http://localhost:5000/api/v1/products/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => {
                console.log(res.json());
            })
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    //update state
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className="min-h-screen p-6  flex items-center text-black justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <form onSubmit={handleUpdate}>
                    <div>
                        <h2 className="font-semibold text-xl ">Update your Product</h2>
                        <p className="text-gray-500 mb-6">Here You Can Update  A Product and so on . </p>
                        <div className=" rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="">
                                    <p className="font-medium text-lg">Enter Products Details To Be Updated</p>
                                    <p>Please fill out all the fields.</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        {/***Food Name Field=== */}
                                        <div className="md:col-span-5">
                                            <label>Enter Food Name </label>
                                            <input type="text" defaultValue={FoodName} name="foodName" className="h-10 border mt-1 text-gray-800 rounded px-4 w-full bg-gray-50" placeholder="Enter Food Name" />
                                        </div>
                                        {/* ====Food Image url==== */}
                                        <div className="md:col-span-5">
                                            <label>Photo Url </label>
                                            <input type="text" defaultValue={FoodImage} name="foodImage" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800" placeholder="Enter Photo Url" />
                                        </div>
                                        {/* ======Food Description */}
                                        <div className="md:col-span-5">
                                            <label>Enter short Description</label>
                                            <input type="text" name="description" defaultValue={ShortDescription} className="h-10 border mt-1 text-gray-800 rounded px-4 w-full bg-gray-50" placeholder="Enter Description" />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label>Enter Long Description</label>
                                            <input type="text" name="longDescription" defaultValue={LongDescription} className="h-10 border mt-1 text-gray-800 rounded px-4 w-full bg-gray-50" placeholder="Enter Description" />
                                        </div>
                                        {/*===== Food Origin */}
                                        <div className="md:col-span-2">
                                            <label >Country / region</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="country" defaultValue={Country} placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            </div>
                                        </div>
                                        {/* =====Product Price */}
                                        <div className="md:col-span-2">
                                            <label >Price</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="price" defaultValue={Price} placeholder="Product Price" type="number" min={0} className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            </div>
                                        </div>
                                        {/* Enter Product Quantity */}
                                        <div className="md:col-span-1">
                                            <label >Enter Quantity</label>
                                            <input type="number" defaultValue={Quantity} min={0} name="quantity" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full text-gray-800 bg-gray-50" placeholder="Enter Quantity" />
                                        </div>
                                        <div className="md:col-span-3">
                                            <label>Enter Food Category</label>
                                            <input type="text" name="foodCategory" defaultValue={FoodCategory} className="h-10 text-gray-800 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Food Category" />
                                        </div>
                                        {/* Submit Button */}
                                        <div className="md:col-span-2">
                                            <label className="text-black">.</label>
                                            <input type="submit" value='Update Product' className="h-10 border mt-1 rounded px-4 w-full text-white bg-black " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFoodItems;