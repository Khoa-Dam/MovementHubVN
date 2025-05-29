"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between text-[#FFDFBF] sm:p-8">
      <motion.h1
        className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl sm:translate-y-8 sm:translate-x-10 font-semibold text-center sm:text-left mt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Let&apos;s Create <br />
        Something crazy <br />
        Together.
      </motion.h1>
      <motion.div
        className="flex flex-col gap-3 sm:translate-y-15 sm:translate-x-10 lg:translate-y-8 lg:-translate-x-10 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          className="flex flex-col w-[80%] sm:w-full bg-black/70 p-10 relative backdrop-filter backdrop-blur-3xl"
          style={{
            clipPath:
              "polygon(10% 0%, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
          }}
        >
          <div className="relative z-10 flex flex-col gap-5 ">
            <h1 className="text-4xl sm:text-5xl mb-10">
              Enter your
              <br /> contact details
            </h1>
            <form className="flex flex-col gap-5">
              {/* Name Input */}
              <div className="flex flex-col border-b-2 border-b-[#FFDFBF] ">
                {" "}
                {/* Container for label and input */}
                <label className="text-sm text-brand-light/70 ">Name</label>
                {/* Label */}
                <input
                  type="text"
                  placeholder="Thuy Doan"
                  className="border-none outline-none bg-transparent text-brand-light placeholder:text-brand-light/50 pr-2 pb-4"
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col border-b-2 border-b-[#FFDFBF]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border-none outline-none border-b-2 border-b-[#FFDFBF] bg-transparent text-brand-light pr-2 pb-4"
                />
              </div>
              {/* Message Input */}
              <div className="flex flex-col border-b-2 border-b-[#FFDFBF]">
                <textarea
                  placeholder="Message"
                  className="border-none outline-none bg-transparent text-brand-light placeholder:text-brand-light/50 overflow-hidden resize-none pb-15"
                />
              </div>
              {/* Submit button removed as per image */}
            </form>
          </div>
        </div>
        <button
          className="text-white bg-[#F6891E] px-4 py-2 self-start font-bold"
          style={{
            clipPath:
              "polygon(10% 0%, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 25%)",
          }}
        >
          SEND MESSAGE
        </button>
      </motion.div>
    </div>
  );
};

export default ContactPage;
