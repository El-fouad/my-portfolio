import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//img
import pic1 from "/assets/portfolio-img1.png";
import pic2 from "/assets/portfolio-img2.png";
import pic3 from "/assets/portfolio-img3.png";

const Work = () => {
  return (
    <div className=" section" id="work">
      <div className="container mx-auto ">
        <div className=" flex flex-col  lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className=" flex-1">
              <h2 className=" h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                My passion for coding and problem-solving drives me to
                constantly learn and improve my skills.
              </p>
              <button
                className=" btn btn-sm"
                onclick="window.location.href='https://github.com/El-fouad'"
              >
                View all projects
              </button>
            </div>

            {/* imgs */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* amg */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={pic1}
                alt=""
              />
              {/* pretitle */}
              <div
                className=" absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradlent">UI/UI Design</span>
              </div>
              {/* title */}
              <div
                className=" absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Project title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col justify-between gap-y-10"
          >
            {/* images */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* amg */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={pic2}
                alt=""
              />
              {/* pretitle */}
              <div
                className=" absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradlent">UI/UI Design</span>
              </div>
              {/* title */}
              <div
                className=" absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Project title</span>
              </div>
            </div>

            {/* images */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* amg */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={pic3}
                alt=""
              />
              {/* pretitle */}
              <div
                className=" absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradlent">UI/UI Design</span>
              </div>
              {/* title */}
              <div
                className=" absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Project title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
