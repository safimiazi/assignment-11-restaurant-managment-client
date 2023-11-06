import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log("hi my", user);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const NavList = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/all-food" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>All Food</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Blog</NavLink></li>
        {
            user ? <div className="flex items-center">
                  <li><NavLink onClick={handleLogOut} to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>logout</NavLink></li>    
            </div>

                : <li><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Login</NavLink></li>
        }
    </>


    return (
        <div className="navbar max-w-screen-xl mx-auto md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavList}
                    </ul>
                </div>
                <img src="/src/assets/images/logo-dark.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavList}
                </ul>
            </div>

            <div className="navbar-end">
                <div>
                    <p>{user?.displayName}</p>
                </div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt="User Profile" />
                                ) : (
                                    <img src="https://i.ibb.co/tBCst7k/user-sign-in-profile-avatar-user-icon-in-flat-style-user-icon-for-the-website-team-logo-vector.jpg" alt="Default Profile" />
                                )}
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><NavLink to="/my-added-food" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> My added food items</NavLink></li>
                        <li><NavLink to="/add-food-item" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>add food item</NavLink></li>
                        <li><NavLink to="/my-ordered-food" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>My ordered food items</NavLink></li>
                        </ul>
                    </div> : " "
                }
            </div>
        </div>
    );
};

export default Navbar;