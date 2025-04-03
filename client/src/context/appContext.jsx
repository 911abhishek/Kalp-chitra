import { use, useEffect } from "react";
import { createContext, useState } from "react";
import {toast} from "react-hot-toast"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);
  const [state, setState] = useState("Login");
 
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  // console.log(backendUrl)
  const navigate = useNavigate();
  const loadCreditsData = async () => {
     
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        // console.log(data);
        setCredit(data.credits);
        setUser(data.user);
        // console.log(data.user);
      }
    } catch (error) {
      console.log(error);
      
      toast.error(error.message);
    }
  };
  const generateImage = async (prompt) => {
    const loadingToast = toast.loading(
      "Free wale server pe hai bhai, sabar kar!"
    );
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        toast.dismiss(loadingToast);
        toast.success("Success")
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.dismiss(loadingToast);
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    navigate("/");
    setShowLogin(true);
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);
  // console.log(token)
  // console.log("Backend URL:", backendUrl);
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    token,
    setToken,
    credit,
    setCredit,
    backendUrl,
    loadCreditsData,
    logout,
    generateImage,
    state,
    setState

  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
