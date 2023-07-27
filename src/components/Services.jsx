import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

// services
const services = [
  {
    name: "UI/UX Design",
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit
Veritatis praesentium impedit nam esse repudiandae quos quia, molestias
tenetur quaerat aspernatur ullam magnam consequatur magni cumque
architecto harum eius nulla illo`,
    link: "learn more",
  },
  {
    name: "Front-End developer",
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit
Veritatis praesentium impedit nam esse repudiandae quos quia, molestias
tenetur quaerat aspernatur ullam magnam consequatur magni cumque
architecto harum eius nulla illo`,
    link: "learn more",
  },
  {
    name: "Back-End developer",
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit
Veritatis praesentium impedit nam esse repudiandae quos quia, molestias
tenetur quaerat aspernatur ullam magnam consequatur magni cumque
architecto harum eius nulla illo`,
    link: "learn more",
  },
];

const Services = () => {
  return (
    <div className=" section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text&img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 lg:bg-services lg:bg-bottom 
          bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full-Stack Developer Senoir.
            </h3>
            <button className=" btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list  */}
            <div>
              {services.map((serv, index) => {
                const { name, description, link } = serv;
                return (
                  <div
                    className=" border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className=" text-[20px] tracking-wider font-primary
                      font-semibold mb-6"
                      >
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className=" flex flex-col flex-1 items-end">
                      <a
                        className=" btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        href=""
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className=" text-gradient text-sm" href="">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
