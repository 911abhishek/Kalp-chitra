import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/appContext";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Login = () => {
  // const [state, setState] = useState("Login");
  // const {state} = useContext(AppContext)
  const { setShowLogin, backendUrl, setToken, setUser , state, setState} =
    useContext(AppContext);
  //backend stitching
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Wrap the entire async process inside toast.promise
    toast.promise(
      (async () => {
        try {
          if (state === "Login") {
            const { data } = await axios.post(backendUrl + "/api/user/login", {
              email,
              password,
            });
            console.log(data);
            if (data.success) {
              // console.log("token setted")
              setToken(data.token);

              setUser(data.user);
              localStorage.setItem("token", data.token);
              toast.success("Welcome back! " + data.user.name);

              setShowLogin(false);
            } else {
              // toast.error(data.user)
              toast.error(data.message);
            }
          } else {
            const { data } = await axios.post(
              backendUrl + "/api/user/register",
              {
                name,
                email,
                password,
              }
            );
            if (data.success) {
              setToken(data.token);
              setUser(data.user);
              localStorage.setItem("token", data.token);
              toast.success("Account created successfully");
              setShowLogin(false);
            } else {
              toast.error(data.message);
            }
          }
        } catch (error) {
          toast.error(error.message);
        }
      })(), // Call the async function immediately

      // Toast states
      {
        loading: "Summoning the login gods... 🔮",
      }
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0  right-0 bottom-0 z-10  backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="  relative bg-white p-10 rounded-xl text-slate-500 w-[350px]"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        {state === "Login" && (
          <p className="text-sm">Welcome back! Please sign in to continue</p>
        )}
        {state !== "Login" && (
          <>
            <p className="text-sm text-center">Sign up now and get 5 free credits!</p>
            <div className="border px-5 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.profile_icon} className="h-6" />
              <input
                className="outline-none text-sm"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          </>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} />
          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email id"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} className="h-6" />
          <input
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password?
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "login" : "create account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              {" "}
              Login
            </span>
          </p>
        )}
        <IoIosCloseCircleOutline
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowLogin(false)}
        />
      </motion.form>
    </div>
  );
};

export default Login;
