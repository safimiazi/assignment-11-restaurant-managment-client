import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate, useLocation } from "react-router";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/RCgn2Io7Zy.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  navigate('/login', { state: { from: pathname }, replace: true });
  return null; // You can return null or any loading indicator while navigating.
};

export default PrivateRoute;
