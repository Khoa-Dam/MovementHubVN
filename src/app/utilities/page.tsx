"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Events from "@/components/utilities/Events";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Utilities = () => {
  const [selectedButtonText, setSelectedButtonText] =
    useState("Community Building");
  const [displayedImageSrc, setDisplayedImageSrc] = useState(
    "/images/utilities/utility3.png"
  );
  const [displayedText, setDisplayedText] = useState<{
    heading: React.ReactNode;
    paragraph: React.ReactNode;
  }>({
    heading: (
      <>
        Vietnam <br />
        <span className="text-[#E1FF00] font-semibold">
          Community Building{" "}
        </span>
      </>
    ),
    paragraph: (
      <>
        Build a thriving Web3 community in Vietnam with Movement Hub Vietnam!
        Partnering with movementlabsxyz, we empower blockchain projects to
        establish a strong local presence.
      </>
    ),
  });

  const handleButtonClick = (buttonText: string) => {
    setSelectedButtonText(buttonText);
    let newImageSrc = "";
    let newHeading: React.ReactNode = "";
    let newParagraph: React.ReactNode = "";

    switch (buttonText) {
      case "Movement Leader":
        newImageSrc = "/images/utilities/utility1.png";
        newHeading = (
          <>
            Movement Chain <br />
            <span className="text-[#E1FF00] font-semibold">Benefits</span>
          </>
        );
        newParagraph = (
          <>
            Supercharge your blockchain project with exclusive benefits on the
            Movement Chain! Movement Hub Vietnam, in partnership with
            movementlabsxyz, offers tailored incentives to projects building on
            our chain—reducing costs while maximizing your potential in the Web3
            ecosystem. Join us and accelerate your decentralized vision today!
          </>
        );
        break;
      case "Project Consulting":
        newImageSrc = "/images/utilities/utility2.png";
        newHeading = (
          <>
            1-1 Project <br />
            <span className="text-[#E1FF00] font-semibold">Consulting</span>
          </>
        );
        newParagraph = (
          <>
            Launch your Web3 project with confidence through our 1-1 guidance!
            Movement Hub Vietnam, backed by the expertise of movementlabsxyz,
            provides personalized advisory services for early-stage blockchain
            projects. From ideation to execution, we&apos;re your trusted
            partner in navigating the decentralized landscape.
          </>
        );
        break;
      case "Community Building":
        newImageSrc = "/images/utilities/utility3.png";
        newHeading = (
          <>
            Vietnam <br />
            <span className="text-[#E1FF00] font-semibold">
              Community Building
            </span>
          </>
        );
        newParagraph = (
          <>
            Build a thriving Web3 community in Vietnam with Movement Hub
            Vietnam! Partnering with movementlabsxyz, we empower blockchain
            projects to establish a strong local presence.
          </>
        );
        break;
      case "Web3 Partnership":
        newImageSrc = "/images/utilities/utility4.png";
        newHeading = (
          <>
            Web3 Media <br />
            <span className="text-[#E1FF00] font-semibold">Partnership</span>
          </>
        );
        newParagraph = (
          <>
            Gain a competitive edge with our Web3 media partnerships! Movement
            Hub Vietnam, in collaboration with movementlabsxyz, connects your
            blockchain project with top-tier media channels to amplify your
            reach. From global campaigns to targeted outreach, we ensure your
            decentralized vision captures the attention of the right audience.
          </>
        );
        break;
      default:
        newImageSrc = "/images/utilities/utility3.png";
        newHeading = (
          <>
            Vietnam <br />
            <span className="text-[#E1FF00] font-semibold">
              Community Building
            </span>
          </>
        );
        newParagraph = (
          <>
            Build a thriving Web3 community in Vietnam with Movement Hub
            Vietnam! Partnering with movementlabsxyz, we empower blockchain
            projects to establish a strong local presence.
          </>
        );
    }
    setDisplayedImageSrc(newImageSrc);
    setDisplayedText({
      heading: newHeading,
      paragraph: newParagraph,
    });
  };

  return (
    <div className="w-full h-full  text-brand-orange bg-[#080401] flex flex-col items-center">
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
              <h3 className="text-3xl 2xl:text-5xl mb-5 ">
                The
                <span className="text-[#E1FF00] font-semibold">
                  <a> </a>Movement Hub
                </span>
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
              className="flex items-center justify-center bg-[#F6891E] text-white py-2 px-4 "
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
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 bg-[#222222] ">
          <div className="p-2">
            <button
              className={`text-white text-2xl p-6 rounded-md w-[90%] h-[90%] flex items-center justify-center ${
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
              className={`text-white text-2xl p-6 rounded-md w-[90%] h-[90%] flex items-center justify-center ${
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
          <div className="flex flex-row w-full mt-10 justify-between items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayedImageSrc}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="hidden sm:block max-w-[1000px] max-h-[500px]"
                style={{ flexShrink: 0 }}
              >
                <Image
                  src={displayedImageSrc}
                  alt="what-is-smurf"
                  width={600}
                  height={600}
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${displayedText.heading}${displayedText.paragraph}`}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex flex-col justify-center ml-5 gap-0 text-white w-full text-center items-center sm:w-[50%] sm:text-left sm:items-start"
              >
                <div className="mb-20">
                  <h3 className=" text-2xl 2xl:text-5xl mb-5 text-center items-center justify-center md:text-start">
                    {displayedText.heading}
                  </h3>
                  <p className="text-brand-light text-[13px] lg:text-xl 2xl:text-2xl">
                    {displayedText.paragraph}
                  </p>
                </div>
                <button
                  className="flex items-center justify-center bg-[#F6891E] text-white py-2 px-4"
                  style={{
                    clipPath:
                      "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                  }}
                >
                  Contact now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <Events />

      <div className="flex flex-col lg:flex-row justify-between items-center roadmap-text-box p-10 w-full max-w-screen-lg gap-10 mt-[80px]">
        <div className="flex flex-col items-center justify-center text-center md:items-start  gap-5 sm:w-[70%]">
          <h1 className="text-[#E1FF00] text-xl sm:text-4xl font-semibold">
            Let&apos;s Build the Future – Together
          </h1>
          <p className="text-sm sm:text-xl text-[#FFDFBF]">
            The future of Web3 is in your hands—join Movement Hub Vietnam and
            let&apos;s create it together! In partnership with movementlabsxyz,
            we&apos;re building a dynamic ecosystem where blockchain innovators,
            developers, and enthusiasts unite to drive the decentralized
            movement forward. Become a member today, contribute your vision, and
            help shape the next era of blockchain technology in Vietnam and
            beyond.
          </p>
        </div>
        <button
          className="flex items-center justify-center bg-[#F6891E] text-white py-2 px-4 "
          style={{
            clipPath:
              "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
          }}
        >
          Explore now
        </button>
      </div>
    </div>
  );
};

export default Utilities;
