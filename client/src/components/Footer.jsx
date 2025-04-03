import React from "react";
import { assets } from "../assets/assets";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.Logo} width={150} onClick={scrollToTop} />
      <p className="flex-2  border-gray-400 pl-4 text-sm text-center text-gray-500 max-sm:hidden">
        Copyright @abhishek.dev | All right reserved.
      </p>

      <div className="flex gap-2.5 items-center">
        <a href="https://www.linkedin.com/in/abhishek911/" target="_blank">
          <div className="flex items-center justify-center w-9 h-9 border border-violet-400 rounded-full hover:scale-[1.05] transition-all duration-300">
            <IoLogoLinkedin className="text-xl text-blue-600" />
          </div>
        </a>
        <a href="https://www.instagram.com/abhishek.intech/#" target="_blank">
          <div className="flex items-center justify-center w-9 h-9 border border-violet-400 rounded-full hover:scale-[1.05] transition-all duration-300">
            <IoLogoInstagram className="text-xl" />
          </div>
        </a>
        <a href="https://github.com/911abhishek/" target="_blank">
          <div className="flex items-center justify-center w-9 h-9 border border-violet-400 rounded-full hover:scale-[1.05] transition-all duration-300">
            <IoLogoGithub className="text-xl text-gray-800" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
