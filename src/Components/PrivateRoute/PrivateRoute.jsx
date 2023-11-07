import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {pathname} = useLocation()
  console.log(pathname);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[90vh] ">
       <h1 className="text-4xl text-bold">Loading...</h1>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate  state={pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;