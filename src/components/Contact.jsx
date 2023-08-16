// useRef
import React, { useRef } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// @emailjs/browser
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const serviceId = process.env.VITE_SERVICE_ID;
  const templateId = process.env.VITE_TEMPLATE_ID;
  const publicKey = process.env.VITE_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log("error =>",error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className="section py-16 lg:secttion" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 justify-start items-center"
          >
            <div>
              <h4 className=" text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6
            items-start"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className=" bg-transparent border-b py-3 outline-none w-full
             placeholder:text-white focus:border-accent transition-all"
              placeholder="Your name "
              name="user_name"
            />
            <input
              type="text"
              className=" bg-transparent border-b py-3 outline-none w-full
             placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email "
              name="user_email"
            />
            <textarea
              className=" bg-transparent border-b py-12 outline-none
              w-full placeholder:text-white focus:border-accent transition-all
              resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button type="submit" className=" btn btn-lg ">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
