import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import HomeCard from "../HomeCard/HomeCard";
import { Link } from "react-router-dom";


const CardSection = () => {
    const axios = useAxios();
    const getProducts = async () => {
        const res = await axios.get('/top-selling?sortField=Price&sortOrder=desc')
       console.log("dddd",res)
        return res;
    }

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['topSelling'],
        queryFn: getProducts,
    })

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error: {error.message}</div>;
      }

    const productData = data?.data;
    console.log( 'hhhh',productData);
    return (
        <div className="max-w-screen-xl mx-auto md:px-10">
            <div className="text-center space-y-2 mb-10">
                <p className="text-xl font-semibold">Hello dear</p>
                <h4 className="text-4xl font-bold">Welcome To Granny</h4>
                <p>Granny was the first retaurant to open in Egypt,<br></br> the resturant was designed with the history in mind we have created a soft industrial dining room,<br></br> combined with an open kitchen, coffee take out bar and on site coffee roastery.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                {
                    productData?.map(singleCard => <HomeCard
                         singleCard={singleCard}
                         key={singleCard.myID}></HomeCard>)
                }
            </div>
            <div className="mt-5">
                <Link to="/all-food"><button  className="btn btn-neutral w-full">see all</button></Link>
            </div>
        </div>
    );
};

export default CardSection;