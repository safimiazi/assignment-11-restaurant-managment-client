import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import HomeCard from "../HomeCard/HomeCard";


const CardSection = () => {
    const axios = useAxios();
    const getProducts = async () => {
        const res = await axios.get('/top-selling?sortField=price&sortOrder=desc')
       
        return res;
    }

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['topSelling'],
        queryFn: getProducts,
    })

    const productData = data?.data;
    
    return (
        <div>
            <div className="text-center space-y-2">
                <p className="text-xl font-semibold">Hello dear</p>
                <h4 className="text-4xl font-bold">Welcome To Granny</h4>
                <p>Granny was the first retaurant to open in Egypt,<br></br> the resturant was designed with the history in mind we have created a soft industrial dining room,<br></br> combined with an open kitchen, coffee take out bar and on site coffee roastery.</p>
            </div>
            <div>
                {
                    productData?.map(singleCard => <HomeCard
                         singleCard={singleCard}
                         key={singleCard.myID}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default CardSection;