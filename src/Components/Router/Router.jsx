import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import AllFood from "../../Pages/AllFood/AllFood";
import CardDetails from "../../Pages/CardDetails/CardDetails";
import AddFoodItem from "../../Pages/AddFoodItem/AddFoodItem";
import Purchase from "../../Pages/Purchase/Purchase";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/all-food',
            element: <AllFood></AllFood>,
            loader: ()=> fetch('http://localhost:5000/api/v1/productsCount')
        },
        {
          path: '/card-details/:id',
          element: <CardDetails></CardDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/api/v1/items/${params.id}`)
          
        },
        {
          path: '/add-food-item',
          element: <AddFoodItem></AddFoodItem>
        },
        {
          path: '/purchase/:id',
          element: <Purchase></Purchase>,
          loader: ({params})=> fetch(`http://localhost:5000/api/v1/items/${params.id}`)

        }
      ]
    },
  ]);

export default router;