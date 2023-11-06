import Swal from "sweetalert2";


const AddFoodItem = () => {
    const handleForm = e => {
        e.preventDefault()
        const FoodName = e.target.foodName.value;
        const FoodImage = e.target.foodImage.value;
        const FoodCategory = e.target.category.value;
        const Quantity = e.target.quantity.value;
        const Price = e.target.price.value;
        const Email = e.target.email.value;
        const Country = e.target.country.value;
        // const Count = e.target.count.value;
        const ShortDescription = e.target.shortDescription.value;
        const LongDescription = e.target.longDescription.value;

        const product = { FoodName, FoodImage, FoodCategory, Quantity, Price, Email, Country, ShortDescription, LongDescription }
        fetch("http://localhost:5000/api/v1/post-items", {
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
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                        <span className="label-text"> Add By</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <input type="text" name="country" placeholder="Country" className="input input-bordered" required />
                                </div>
                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">count</span>
                                    </label>
                                    <input type="text" name="count" placeholder="Country" className="input input-bordered" required />
                                </div> */}
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
                                <button className="btn btn-primary">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFoodItem;