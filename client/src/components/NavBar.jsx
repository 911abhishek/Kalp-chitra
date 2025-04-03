import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { GiCreditsCurrency } from "react-icons/gi";
import { GiExitDoor } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext} from "../context/appContext"

const NavBar = () => {
  const { user, logout, credit, setState, backendUrl } = useContext(AppContext);
  // const [user, setUser] = useState(true)//hardcode
  const navigate = useNavigate();

  //app context files used for server linking
    const { setShowLogin } = useContext(AppContext);
  const notifysome=()=>{
    toast.success("🎉 Successfully Touched");
  }
  

  console.log("backedn"+backendUrl);

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img
          src={assets.Logo}
          className="w-28  sm:w-32 lg:w-40 cursor-pointer "
        />
      </Link>

      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-110 transition-all duration-700"
          >
            <GiCreditsCurrency className="text-violet-600" />
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              Credits Left : {credit}
            </p>
          </button>
          <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
          <div className="">
            <GiExitDoor
              className="h-2xl scale-150  text-red-500 bg-slate-200 rounded-full  hover:scale-200 transition-all duration-700 cursor-pointer"
              onClick={logout}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-3">
          <p
            className="cursor-pointer  text-violet-600 "
            onClick={()=>{
              setState("Login")
              setShowLogin(true)
            }}
          >
            Log in
          </p>

          <button
            className="bg-violet-600 text-white  px-2 py-2 sm:px-10 text-sm rounded-full cursor-pointer hover:bg-violet-700 hover:scale-105 "
            onClick={()=>{
              console.log('Button clicked sign up')
              setState("Sign Up")
              setShowLogin(true)
            }}
          >
            Start For Free
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
