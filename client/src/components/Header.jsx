import React, { useContext } from 'react'
import { TiArrowRight } from "react-icons/ti";
import {motion} from "motion/react";
import { AppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const {user, setShowLogin, setState} = useContext(AppContext)
  const navigate = useNavigate()
const onClickHandler=()=>{
  if(user){
    navigate('/result')
  } 
  else{
    window.scrollTo({top:0, behavior:"smooth" });
    setState("Sign Up");
    setShowLogin(true)
  }
}
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center text-center my-1"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
          className="text-2xl   max-w-[300px] sm:text-6xl md:p-8  sm:max-w-[790px] mx-auto mt-10 sm:mb-4 text-center"
        >
          Transform Your Imagination into Stunning Art with
          <br className="sm:hidden " />
          <span className="parisienne-regular text-violet-600 kalpFont hover:scale-[1.05] transition-all duration-300">
            {" "}
            Kalp Chitra.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden sm:inline text-center max-w-[120px] mx-auto mt-10 text-2xl text-slate-800"
        >
          Inspired by Sanskrit, ‘Kalp’ (कल्प) means imagination, and ‘Chitra’
          (चित्र) means picture or image. Kalp Chitra transforms your ideas into
          stunning AI-generated visuals.
        </motion.p>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={onClickHandler}
        className="sm:text-xl text-white bg-violet-600 w-auto mt-10 md:mt-12 px-6 sm:px-10 py-2.5 flex items-center gap-2 rounded-full "
      >
        Start For Free
        <TiArrowRight className="sm:ml-2" />
      </motion.button>
    </motion.div>
  );
}

export default Header