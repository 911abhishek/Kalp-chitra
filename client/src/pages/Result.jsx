import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/appContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { imageData } from "../assets/assets";
import "swiper/css";

const Result = () => {
  const [image, setImage] = useState(assets.result_image);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);
  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };
  return (
    <>
      <div>
        <form
          onSubmit={onSubmitHandeler}
          className="flex flex-col min-h-[90vh] items-center justify-center "
        >
          <div className="relative flex itemscenter justify-evenly gap-15">
            <div className="md:w-1/2 max-w-sm  md:mb-0 hidden md:block">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="rounded-lg"
              >
                {imageData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full rounded-lg hover:scale-[1.05] transition-all duration-100"
                    />
                    {item.prompt && (
                      <p className="text-center mt-2 text-slate-700 ">
                        {item.prompt}
                      </p>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <img src={image} alt="Generated" className="max-w-sm rounded" />
              {!isImageLoaded && (
                <div className="flex flex-col  justify-center">
                  <div className="flex w-full  max-w-xl bg-neutral-600 h-12 text-white text-sm p-0.5 mt-10 mb-3 rounded-full hover:scale-[1.05] transition-all duration-100 ">
                    <input
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                      type="text"
                      placeholder="Describe what you want to generate..."
                      className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-violet-600 px-10 sm:px-16 py-3 rounded-full text-white items-center hover:scale-[1.05] transition-all duration-100"
                  >
                    Generate!
                  </button>
                </div>
              )}

              {isImageLoaded && (
                <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
                  <p
                    onClick={() => {
                      setIsImageLoaded(false);
                    }}
                    className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:scale-[1.05] transition-all duration-100 "
                  >
                    Generate Another!
                  </p>
                  <a
                    className="bg-blue-600 px-10 py-3 rounded-full cursor-pointer hover:scale-[1.05] transition-all duration-100"
                    href={image}
                    download
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
        </form>
        ;
      </div>
    </>
  );
};

export default Result;
