import React from "react";
import { images } from "./Content";
import { FcNext, FcPrevious } from "react-icons/fc";
import { motion } from "framer-motion";

const Description = ({ clickNext, clickPrev, activeImageIndex }) => {
  return (
    <>
      <div className="grid place-items-center w-full smn:absolute smn:rounded-3xl smn:right-0 smn:bg-black/50 bg-[#e7dfd9] relative rounded-tr-3xl rounded-br-3xl ">
        {/* <div className='uppercase text-sm absolute right-4 top-0 underline-offset-4 underline '>Programes</div> */}
        {images.map((elem, idx) => (
          <div
            className={
              idx === activeImageIndex
                ? "block p-4 w-full h-[60vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }
            key={idx}
          >
            <motion.div
              initial={{
                opacity: idx === activeImageIndex ? 0 : 0.5,
                translateX: idx === activeImageIndex ? 0.5 : 0.3,
              }}
              animate={{
                opacity: idx === activeImageIndex ? 1 : 0.5,
                scale: idx === activeImageIndex ? 1 : 0.3,
              }}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
              }}
              className="w-full"
            >
              <div className="py-8 text-5xl font-extrabold mdd:text-xl ">
                {elem.title}
              </div>
              <div className="leading-relaxed smn:text-white mdd:h-full font-medium text-base tracking-wide h-full italic text-gray-600">
                {""}
                {elem.description}
              </div>
            </motion.div>
            <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10 ">
              Enroll Now
            </button>
            <div className="absolute bottom-1 right-0 w-full flex justify-center items-center ">
              <div
                onClick={clickPrev}
                className="absolute bottom-2 right-10 cursor-pointer "
              >
                <FcPrevious size={30} />
              </div>
              <div
                onClick={clickNext}
                className="absolute bottom-2 right-4 cursor-pointer "
              >
                <FcNext size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Description;
