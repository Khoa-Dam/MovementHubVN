"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Popup from "./Popup";
import { useState } from "react";
const teamVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Events = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedImage("");
  };
  return (
    <motion.div
      className="flex flex-col justify-center items-center mt-20 mb-20 p-5"
      variants={teamVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full ">
        <h1 className="text-center text-4xl mb-20 text-white">
          Our Previous <br />
          <div className="text-[#E1FF00] font-semibold eventItem border-t-2 border-b-2 border-[#E1FF00] w-[250px] p-10 text-center items-center justify-center mx-auto">
            Events
          </div>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-7 mt-8">
          <div
            onClick={() => handleImageClick("/images/events/event1.png")}
            className="w-full h-full relative flex flex-col  text-brand-light -translate-y-10 cursor-pointer"
          >
            <Image
              src="/images/previous/events1.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full object-contain "
            />
            <div
              onClick={() => handleImageClick("/images/events/event1.png")}
              className="grid grid-cols-4 gap-0 ml-5"
            >
              <Image
                src="/svg/arrow-bottom-left.svg"
                alt=""
                width={5}
                height={5}
                className="w-2/3 object-contain "
              />
              <div className="flex flex-col col-span-3 mt-5">
                <h1 className="text-2xl font-semibold">
                  The Movement Apac Tour Event
                </h1>
                <p className="">5/4/2025</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleImageClick("/images/events/event1.png")}
            className="w-full h-full relative flex flex-col  text-brand-light cursor-pointer"
          >
            <Image
              src="/images/previous/events2.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full object-contain "
            />
            <div className="grid grid-cols-4 gap-0 ml-5">
              <Image
                src="/svg/arrow-bottom-left.svg"
                alt=""
                width={5}
                height={5}
                className="w-2/3 object-contain "
              />
              <div className="flex flex-col col-span-3 mt-5">
                <h1 className="text-2xl font-semibold">Laniakea Area Event</h1>
                <p className="">5/4/2025</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleImageClick("/images/events/event1.png")}
            className="w-full h-full relative flex flex-col  text-brand-light -translate-y-10 cursor-pointer"
          >
            <Image
              src="/images/previous/events3.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full object-contain "
            />
            <div className="grid grid-cols-4 gap-0 ml-5">
              <Image
                src="/svg/arrow-bottom-left.svg"
                alt=""
                width={5}
                height={5}
                className="w-2/3 object-contain "
              />
              <div className="flex flex-col col-span-3 mt-5">
                <h1 className="text-2xl font-semibold">Move Build Up</h1>
                <p className="">17/5/2025</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleImageClick("/images/events/event1.png")}
            className="w-full h-full relative flex flex-col text-brand-light cursor-pointer"
          >
            <Image
              src="/images/previous/events4.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full object-contain "
            />
            <div className="grid grid-cols-4 gap-0 ml-5">
              <Image
                src="/svg/arrow-bottom-left.svg"
                alt=""
                width={5}
                height={5}
                className="w-2/3 object-contain "
              />
              <div className="flex flex-col col-span-3 mt-5">
                <h1 className="text-3xl font-semibold">???????</h1>
                <p className="">??????</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <Popup imageSrc={selectedImage} onClose={handleClosePopup} />
      )}
    </motion.div>
  );
};

export default Events;
