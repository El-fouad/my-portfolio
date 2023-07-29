import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
//Links
import { Link } from "react-scroll";
const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className=" section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 bg-about bg-contain h-[640px] bg-no-repeat mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Full-Stack Developer Senoir .</h3>
            <p className="mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique beatae quasi dignissimos eaque sit vitae placeat rem
              maxime architecto cum?
            </p>
            {/* stats */}
            <div className="flex gap-x-6 mb-12 lg:gap-x-10">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={10} duration={3} /> : null}
                  K+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div
                  className="text-[40px] font-tertiary 
              text-gradient mb-2"
                >
                  {InView ? <CountUp start={0} end={8} duration={3} /> : null}
                  K+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center ">
              <Link to="contact">
                <button className="btn btn-lg">Contact me </button>
              </Link>
              <a href="#" className="text-gradient btn-link ">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
