import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import { FaMagic } from "react-icons/fa";
import {motion} from 'motion/react'
const steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }} //delay: 0.8,
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* flex items-center justify-center my-10 p-6 md:px-28 */}
      <div className="flex  items-center justify-center my-10 mt-15  sm:mb-10 ">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Create Stunning AI Art in Just 3 <br />
          Simple Steps!
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center gap-16 ml-6 mr-6">
        <div className="flex flex-col  justify-center items-center bg-violet-50  rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300">
          <div className="w-18 h-18 bg-emerald-100 rounded-full flex items-center justify-center">
            <TfiWrite className="w-10 h-10 text-emerald-600" />
          </div>
          <h3 className="font-bold">Step 1: Describe Your Vision</h3>
          <p className="flex items-center text-center ">
            Type in a detailed text prompt describing the image you want to
            generate. Be as creative and specific as possible!
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center  bg-violet-50  rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300">
          <div className="w-18 h-18 bg-cyan-100 rounded-full flex items-center justify-center">
            <FaMagic className="w-10 h-10 text-cyan-600" />
          </div>
          <h3 className="font-bold">Step 2: Let AI Work Its Magic</h3>
          <p className="flex items-center text-center">
            Our advanced AI model processes your input and transforms it into a
            stunning visual representation within seconds.
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center bg-violet-50  rounded-2xl p-2 hover:scale-[1.02] transition-all duration-300">
          <div className="w-18 h-18 bg-blue-100 rounded-full flex items-center justify-center">
            <TfiWrite className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="font-bold">Step 3: Download & Share</h3>
          <p className="flex items-center text-center">
            Preview your AI-generated artwork, customize it if needed, and
            download it to share with the world!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default steps