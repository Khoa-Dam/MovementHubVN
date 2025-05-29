"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PopupProps {
  imageSrc: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ imageSrc, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-100 flex items-center justify-center z-50 "
      onClick={onClose}
    >
      <div
        className="bg-[#222222] relative w-[80%] h-[60%] sm:h-[95%]  flex flex-col items-center justify-start overflow-hidden gap-5"
        style={{
          clipPath:
            "polygon(0 0, 35% 0, 40% 6%, 65% 6%, 70% 0, 100% 0, 100% 90%, 95% 100%, 0 100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-brand-light hover:text-gray-800 text-5xl rounded-full"
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          alt="Popup Image"
          width={800}
          height={600}
          className=" w-full h-[50%] bg-cover bg-center"
        />
        <div className="flex flex-col text-center sm:text-left sm:gap-4 text-[#FFDFBF] sm:p-4">
          <div className="flex flex-row  sm:gap-2 ">
            <Link href="/" className="bg-[#222222] rounded-full p-2">
              <Image
                src="/svg/popup/Tiktok.svg"
                alt="contact"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/" className="bg-[#222222] rounded-full p-2">
              <Image
                src="/svg/popup/Telegram.svg"
                alt="contact"
                width={30}
                height={30}
              />
            </Link>
            <Link href="/" className="bg-[#222222] rounded-full p-2">
              <Image
                src="/svg/popup/Discord.svg"
                alt="contact"
                width={30}
                height={30}
              />
            </Link>
            <Link href="/" className="bg-[#222222] rounded-full p-2">
              <Image
                src="/svg/popup/X.svg"
                alt="contact"
                width={24}
                height={24}
              />
            </Link>

            <Link href="/" className="bg-[#222222] rounded-full p-2">
              <Image
                src="/svg/popup/Global.svg"
                alt="contact"
                width={30}
                height={30}
              />
            </Link>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-brand-orange">
            THE MOVEMENT APAC TOUR 2025
          </p>
          <p className="text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
            As the official host of @movementlabsxyz APAC Tour 2025 in Vietnam
            on April 5th, SMURF is thrilled to team up with top partners and
            visionaries to make this event UNMISSABLE!
          </p>
          <p className="text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
            Meet the forces behind the Event
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
