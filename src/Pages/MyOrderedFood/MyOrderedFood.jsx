import OrderedCard from "../../Components/OrderedCard/OrderedCard";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const MyOrderedFood = () => {
    const {user} = useContext(AuthContext)
    const email = user.email
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/cart?buyerEmail=${email}`)
        .then(res=>res.json())
        .then(data => setDatas(data))
    },[])
   
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/api/v1/cart/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Good job!",
                            text: "You clicked the button!",
                            icon: "success"
                          });
    
                          const remaining = datas.filter(data => data._id !== id)
                          setDatas(remaining)
                    }
                })
            }
          });       
          
          
          
          
          
          
          
          
          
          
          
          
      



    }


    return (
        <div className="grid py-20 md:grid-cols-2 grid-cols-1 gap-5 max-w-screen-xl mx-auto">
            <Helmet>
            <title>Granny | my ordered food</title>
            </Helmet>
            {
                datas?.map(singleData => <OrderedCard
                     singleData={singleData} 
                     handleDelete={handleDelete}
                     key={singleData._id}></OrderedCard>)
            }
        </div>
    );
};

export default MyOrderedFood;