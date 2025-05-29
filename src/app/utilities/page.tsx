"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Utilities = () => {
  const [selectedButtonText, setSelectedButtonText] =
    useState("Community Building");

  const handleButtonClick = (buttonText: string) => {
    setSelectedButtonText(buttonText);
  };

  return (
    <div className="w-full h-full  text-brand-orange bg-[#080401]">
      <motion.div
        className="flex flex-col justify-between items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div
          className="flex flex-row w-full mt-5 justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col justify-center ml-5 gap-0 text-white w-full sm:w-[50%] items-center text-center sm:text-left sm:items-start">
            <div className="mb-20">
              <h3 className="text-3xl 2xl:text-5xl mb-5">
                The
                <span className=" text-[#E1FF00]"> Movement Hub </span>
                <br />
                Vietnam Revolution!
              </h3>
              <p className="text-brand-light 2xl:text-3xl">
                Join us at Movement Hub Vietnam, where creativity meets
                community. Inspired by movementlabsxyz, we&apos;re
                revolutionizing the way people connect, learn, and grow through
                dynamic experiences.
              </p>
            </div>

            <button
              className="flex items-center justify-center bg-[#F6891E] text-white py-2 px-4 rounded"
              style={{
                clipPath:
                  "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
              }}
            >
              Explore now
            </button>
          </div>
          <Image
            src="/images/utilities/banner.png"
            alt="what-is-smurf"
            width={600}
            height={600}
            className="hidden sm:block max-w-[1000px] max-h-[500px]"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col justify-center items-center bg-[url('/images/utilities/line.png')] bg-cover bg-center p-5 relative bg-no-repeat ">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full flex flex-row flex-wrap items-center justify-between gap-10 p-10 relative z-10">
          <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center  ">
            <p className="font-bold text-2xl">Move Confession</p>
          </div>
          <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center p-10">
            <p className="font-bold text-2xl">Move Build Up</p>
          </div>
          <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center p-10">
            <p className="font-bold text-2xl">Move Meet Up</p>
          </div>
          <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center p-10">
            <p className="font-bold text-2xl">Move Uni Tour</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex flex-row flex-wrap flex-center justify-center items-center gap-5 bg-[#222222] ">
          <div className="p-2">
            <button
              className={`text-white text-2xl p-6 rounded-md w-[90%] h-[90%] ${
                selectedButtonText === "Movement Leader" ? "bg-[#F6891E] " : ""
              }`}
              onClick={() => handleButtonClick("Movement Leader")}
            >
              Movement Leader
            </button>
          </div>
          <div className="p-2">
            <button
              className={`text-white text-2xl p-6 rounded-md w-[90%] h-[90%] ${
                selectedButtonText === "Project Consulting"
                  ? "bg-[#F6891E]"
                  : ""
              }`}
              onClick={() => handleButtonClick("Project Consulting")}
            >
              Project Consulting
            </button>
          </div>
          <div className="p-2">
            <button
              className={`text-white text-2xl p-6 rounded-md w-[90%] h-[90%] ${
                selectedButtonText === "Community Building"
                  ? "bg-[#F6891E]"
                  : ""
              }`}
              onClick={() => handleButtonClick("Community Building")}
            >
              Community Building
            </button>
          </div>
          <div className="p-2">
            <button
              className={`text-white text-2xl p-6 rounded-md w-[90%] h-[90%]${
                selectedButtonText === "Web3 Partnership" ? "bg-[#F6891E]" : ""
              }`}
              onClick={() => handleButtonClick("Web3 Partnership")}
            >
              Web3 Partnership
            </button>
          </div>
        </div>
        <motion.div
          className="flex flex-col justify-between items-center p-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <motion.div
            className="flex flex-row w-full mt-10 justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/utilities/banner.png"
              alt="what-is-smurf"
              width={600}
              height={600}
              className="hidden xl:block max-w-[1000px] max-h-[500px]"
            />
            <div className="flex flex-col justify-center ml-5 gap-0 text-white w-full text-center items-center sm:w-[50%] sm:text-left sm:items-start">
              <div className="mb-20">
                <h3 className="text-3xl 2xl:text-5xl mb-5">
                  Vietnam <br />
                  <span className=" text-[#E1FF00] font-semibold">
                    Community Building
                  </span>
                </h3>
                <p className="text-brand-light 2xl:text-3xl">
                  Build a thriving Web3 community in Vietnam with Movement Hub
                  Vietnam! Partnering with movementlabsxyz, we empower
                  blockchain projects to establish a strong local
                  presence.&apos; Through events, collaborations, and community
                  initiatives, we help you connect with Vietnam's growing
                  decentralized ecosystem and drive adoption at scale.
                </p>
              </div>

              <Link
                href="/utilities"
                className="w-fit bg-[#F6891E] text-white text-xl p-3 h-[10%]"
                style={{
                  clipPath:
                    "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                }}
              >
                Contact now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Utilities;
