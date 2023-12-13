import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const AddFoodItem = () => {
    const { user } = useContext(AuthContext);
    const customerEmail = user?.email;
    const customerName = user?.displayName

    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const FoodName = form.foodName.value;
        const FoodImage = form.foodImage.value;
        const FoodCategory = form.category.value;
        const Quantity = form.quantity.value;
        const Price = form.price.value;
        const Name = form.name.value;
        const Country = form.country.value;
        const Email = form.email.value;
        const ShortDescription = form.shortDescription.value;
        const LongDescription = form.longDescription.value;

        const product = { FoodName, FoodImage, FoodCategory, Quantity, Price, Name,Email, Country, ShortDescription, LongDescription }
        fetch("https://restuarent-management.vercel.app/api/v1/post-items", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'Item was successfully added!',
                        'success'
                    );
                    form.reset()
                } else {
                    Swal.fire(
                        'Error!',
                        'Failed to add item. Please try again.',
                        'error'
                    );
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire(
                    'Error!',
                    'An error occurred while processing your request.',
                    'error'
                );
            });
    }
    return (
        <div>
            <Helmet>
            <title>Granny|add food item</title>
            </Helmet>
            <div className="min-w-full bg-base-200">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="   w-full  flex items-center justify-center self-center shadow-2xl">
                        <form onSubmit={handleForm} className="card-body">
                            <div className=" grid md:grid-cols-2 grid-cols-1 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Food Name</span>
                                    </label>
                                    <input type="text" name="foodName" placeholder="type food name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Image</span>
                                    </label>
                                    <input type="text" name="foodImage" placeholder="image" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Food Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">customer name</span>
                                    </label>
                                    <input type="text" readOnly defaultValue={customerName} name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <input type="text" name="country" placeholder="Country" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Customer email</span>
                                    </label>
                                    <input type="text" readOnly defaultValue={customerEmail} name="email" placeholder="Country" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">shortDescription</span>
                                </label>
                                <textarea type="text" name="shortDescription" placeholder="shortDescription" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">longDescription</span>
                                </label>
                                <textarea type="text" name="longDescription" placeholder="longDescription" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFoodItem;