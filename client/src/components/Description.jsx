import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import {motion} from 'motion/react'
import { AppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
const Description = () => {
  const {setShowLogin, user} = useContext(AppContext)
  const navigate = useNavigate();
  const onClickHandler = () => {
    // console.log("Button clickedn generate images")
    if (user) {
      navigate("/result");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0.4, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-10 md:my-20 p-6 md:px-28 "
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">
        Bringing Your Ideas to Life Through AI
      </h1>
      <p className="text-slate-700 text-sm  md:mt-4">
        Describe your vision, see it come alive.
      </p>
      <button className="sm:text-xl text-violet-600 bg-white border-violet-600 border-1 w-auto mt-4 md:mt-6 px-6 sm:px-10 py-2.5 flex items-center gap-2 rounded-full hover:scale-[1.05] transition-all duration-300" onClick={onClickHandler} >
        Generate images!
      </button>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center mt-6">
        <img
          src={assets.eg1}
          className="w-80 xl:w-70 rounded-lg hover:scale-[1.05] transition-all duration-300"
        />
        <div>
          <p
            className="text-slate-600
         font-bold text-xl "
          >
            Just pure imagination!
          </p>
          <h2 className="text-3xl md:text-4xl font-medium max-w-lg mb-4">
            Introducing the AI-powered Text to Image Generator
          </h2>
          <p className="text-gray-600 ">
            Transform words into stunning visuals in seconds! Whether you need
            breathtaking art, futuristic designs, or unique imagery, our AI
            brings your ideas to life effortlessly. Just type, describe, and
            watch the magic happen.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Description