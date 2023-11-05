/* eslint-disable react/jsx-key */
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import AllFoodCard from "../../Components/allFoodCard/allFoodCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";


const AllFood = () => {
    const { count } = useLoaderData();
    const [fullData, setFullData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = Array.from({ length: numberOfPages }, (_, index) => index);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/items?page=${currentPage}&size=${itemsPerPage}`);
                const data = await response.json();

                setFullData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        // Filter data based on search query
        const filteredResults = fullData.filter(item =>
            item.FoodName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Set filtered data to state
        setFilteredData(filteredResults);
    }, [searchQuery, fullData]);
   
    const handleItemsPerPage = e => {
        console.log(e.target.value);
        const val = parseInt(e.target.value)
        setItemsPerPage(val)
        setCurrentPage(0)
    }

    const handlePrev = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage -1)
        }
    }

    const handleNext = () => {
        if(currentPage < pages.length -1){
            setCurrentPage(currentPage + 1)
        }
    }

    const handleSearch = e => {
        setSearchQuery(e.target.value);
    }
   
    // useEffect(()=>{
    //     const filteredFoodData = fullData.filter(food => food.FoodName.toLowerCase().includes(searchQuery.toLowerCase()))
    //     setFullData(filteredFoodData)

    // },[searchQuery,fullData])

    return (
        <div className="max-w-screen-xl mx-auto md:px-10">
            <div className="flex my-10 items-center justify-center">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search by food name..."
                    className="input input-bordered input-sm w-full max-w-xs"
                />
                <button  className="btn ml-2">search</button>
            </div>
            <div className="grid mb-10 md:grid-cols-3 grid-cols-1 gap-10">
                {
                    filteredData?.map(singleData => <AllFoodCard
                        key={singleData._id}
                        singleData={singleData}
                    ></AllFoodCard>)
                }
            </div>
            <div className="flex justify-center items-center">
               
                <button onClick={handlePrev} className="btn">prev</button>
                {
                    pages.map(page => <button
                    className={currentPage === page ? "btn-neutral btn": "btn"}
                        onClick={()=>setCurrentPage(page)} 
                        >{page+1}</button>)
                }
                <button onClick={handleNext} className="btn">next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage}  name="" id="">
                    <option value="9">9</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    
                </select>
            </div>
        </div>
    );
};

export default AllFood;