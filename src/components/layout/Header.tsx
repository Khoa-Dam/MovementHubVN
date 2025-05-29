"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.header
      className="p-5 text-white"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="flex items-center  justify-between z-2 relative md:bg-transparent ">
        <Link href="/" className="px-4 items-center justify-center">
          <Image
            src="/images/logo/Movementhubvn.png"
            alt="Movementhubvn"
            width={44}
            height={45}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-5 lg:gap-10 uppercase bg-transparent ml-4 transition-colors ">
          <Link
            href="/"
            className={`border-rounded-full hover:border-b-2 hover:border-t-2  border-white transform hover:scale-105 transition-colors duration-200 ${
              pathname === "/"
                ? "border-b-2 border-t-2 border-white "
                : "text-white"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/utilities"
            className={`hover:border-b-2 hover:border-t-2 border-white  transition-colors duration-200 ${
              pathname === "/utilities"
                ? "border-b-2 border-t-2 border-white "
                : "text-white"
            }`}
          >
            UTILITIES
          </Link>
          <Link
            href="/events"
            className={`hover:border-b-2 hover:border-t-2 border-white  transition-colors duration-200 ${
              pathname === "/events"
                ? "border-b-2 border-t-2 border-white "
                : "text-white"
            }`}
          >
            EVENTS
          </Link>
          <Link
            href="/contact"
            className={`hover:border-b-2 hover:border-t-2 border-white  transition-colors duration-200 ${
              pathname === "/contact"
                ? "border-b-2 border-t-2 border-white "
                : "text-white"
            }`}
          >
            CONTACT
          </Link>
        </div>

        {/* Desktop LET'S TALK button */}
        <Link
          href="/"
          className="hidden md:flex md:flex-row md:text-sm lg:text-[14px] items-center bg-[#f6891e] px-5 h-10 font-semibold  ml-20 "
          style={{
            clipPath:
              "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
          }}
        >
          LET&apos;S TALK
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-none border-none border-b-2 border-t-2 border-white  cursor-pointer z-10 p-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 ${
          isMenuOpen ? "right-0" : "right-[-100%]"
        } w-full h-screen bg-black/95 z-100 transition-right duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 gap-20">
          <Link
            href="/"
            className={`flex justify-center text-2xl font-medium text-[#ffdfbf] no-underline uppercase text-center transition-colors duration-300 ease-in-out`}
            onClick={toggleMenu}
          >
            <Image
              src="/images/logo/Movementhubvn.png"
              alt="Smurf Dashboard"
              width={44}
              height={45}
            />
          </Link>
          <Link
            href="/"
            className={`text-2xl font-medium no-underline uppercase text-center transition-colors duration-300 ease-in-out ${
              pathname === "/"
                ? "border-b-2 border-t-2 border-white "
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/project"
            className={`text-2xl font-medium no-underline uppercase text-center transition-colors duration-300 ease-in-out ${
              pathname === "/project"
                ? "border-b-2 border-t-2 border-white "
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-2xl font-medium no-underline uppercase text-center transition-colors duration-300 ease-in-out ${
              pathname === "/contact"
                ? "border-b-2 border-t-2 border-white "
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="/"
            className="relative mt-8 py-2 px-6 bg-[#f6891e] text-white text-xl font-semibold uppercase inline-flex items-center justify-center
            max-sm:text-base max-sm:py-1.5 max-sm:px-4 "
            style={{
              clipPath:
                "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
            }}
            onClick={toggleMenu}
          >
            LET&apos;S TALK
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
