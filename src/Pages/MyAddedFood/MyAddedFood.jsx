import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import MyAddedFoodCard from "../../Components/MyAddedFoodCard/MyAddedFoodCard";
import { Helmet } from "react-helmet-async";

const MyAddedFood = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/get-added-food?email=${email}`);
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [email]);

    return (
        <div className="my-20">
            <Helmet>
            <title>Granny | my added food</title>
            </Helmet>
            <div>
                <h3 className="text-center font-bold text-3xl mb-5">My added Food items</h3>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-screen-lg mx-auto">
                {data?.map(singleData => (
                    <MyAddedFoodCard singleData={singleData} key={singleData._id} />
                ))}
            </div>
        </div>
    );
};

export default MyAddedFood;