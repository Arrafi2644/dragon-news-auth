import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

import AuthProvider, { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  // console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className=""><h2 className="font-bold">{user && user.email}</h2></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          {
            user?.email ? <div>
              <img className="w-10 h-10 rounded-full border" src={user.photoURL } /> 
              <h2 className="font-semibold text-sm">{user.displayName}</h2>
            </div> : <img src={userIcon} alt="" />
          }
          
        </div>
        {
          user ? <button onClick={logOut} className="btn btn-neutral rounded-none">Logout</button> :
          <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
