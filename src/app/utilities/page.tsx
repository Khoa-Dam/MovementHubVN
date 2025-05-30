"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

function NextArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/3  -right-5 cursor-pointer hover:scale-110 transition-transform z-30"
    >
      <Image
        src={"/images/arrow-right.png"}
        alt="Next"
        width={32}
        height={50}
      />
    </div>
  );
}

function PrevArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/3  -left-5 cursor-pointer hover:scale-110 transition-transform z-30"
    >
      <Image
        src={"/images/arrow-left.png"}
        alt="Previous"
        width={32}
        height={50}
      />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: "w-full h-full",
  swipeToSlide: true,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 2565,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Utilities = () => {
  return (
    <main className=" w-full h-full mt-15 text-brand-orange bg-[#080401]">
      <Image
        src="/images/logo/Banner.png"
        alt="logo"
        width={2000}
        height={500}
        className="object-contain w-full h-full"
      />

      <motion.div
        className="flex flex-row items-start justify-start gap-1 mt-15"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Link href="/" className="bg-[#222222] rounded-full">
          <Image src="/svg/X.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/" className="bg-[#222222] rounded-full">
          <Image src="/svg/Telegram.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/" className="bg-[#222222] rounded-full">
          <Image src="/svg/Discord.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/" className="bg-[#222222] rounded-full">
          <Image src="/svg/Facebook.svg" alt="contact" width={44} height={44} />
        </Link>
        <Link href="/">
          <Image src="/svg/Global.svg" alt="contact" width={44} height={45} />
        </Link>
      </motion.div>
      <motion.div
        className="flex flex-col items-start justify-start mt-5 gap-3 text-brand-light"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-brand-orange text-3xl lg:text-4xl xl:text-5xl">
          Move Build Up – Exclusive AMA series from Movement Hub Vietnam
        </h1>
        <p className="text-2xl">
          Move Build Up is a series of AMA/ecosystem interviews @movementlabsxyz
          in Vietnamese to highlight the voices of the people behind the
          projects being built on the Movement ecosystem, from programmers,
          founders, marketing experts to silent builders.
        </p>
        <p className="text-2xl">
          With each episode, Movement Hub will invite prominent figures in the
          ecosystem – from prominent projects to influential individuals – to
          chat, share real stories, strategic perspectives, and practical
          experiences in the journey of building Web3.
        </p>
        <p className="text-2xl">
          🎯 Move Build Up&apos;s goal is to create an open space where people
          can learn, connect and together build a strong Movement Builders
          community in Vietnam 🇻🇳 .
        </p>
        <p className="text-2xl">
          With the compass:
          <br /> ✨ Community is an asset <br /> ✨ Technology needs a voice
          from users <br /> ✨ Builder mindset is the foundation
        </p>
        <p className="text-2xl">
          Let&apos;s move forward together – from builder to community, from
          project to real application.
        </p>
        <p className="text-2xl">
          🧵 Broadcast schedule and guests will be continuously updated in the
          comments section below, hope everyone follows. 👑
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col items-start justify-start mt-5 gap-10 text-brand-light"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-brand-orange text-5xl font-semibold text-center sm:text-start">
          Upcoming Events:
        </h1>
        <div className="flex flex-row items-start justify-start gap-10">
          <div className="hidden md:block items-start justify-start gap-3">
            <Image
              src="/images/events/event.png"
              alt="Next.js logo"
              width={800}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3">
            <p className="text-3xl font-semibold text-center sm:text-start">
              Move Build UP | Ep 1
            </p>
            <div className="text-2xl flex flex-row items-start justify-start gap-3">
              <p className="font-bold">Host:</p> Yutah
            </div>
            <div className="text-xl sm:text-2xl sm:flex sm:flex-row items-start justify-start gap-3">
              <p className="font-bold">Guest:</p>Julie (SilverBack), Sweet
              (Fouder Akai NFT) , Ivei (Head of BD SMURF)
            </div>
            <div className="w-full flex flex-row flex-wrap items-center justify-between gap-4">
              <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center p-10 ">
                <p className="font-bold text-2xl">24</p>
                <p>Days</p>
              </div>
              <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center p-10">
                <p className="font-bold text-2xl">24</p>
                <p>Days</p>
              </div>
              <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center p-10">
                <p className="font-bold text-2xl">24</p>
                <p>Days</p>
              </div>
              <div className="flex-1 roadmap-text-box bg-[#222222] flex flex-col text-center justify-center items-center p-10">
                <p className="font-bold text-2xl">24</p>
                <p>Days</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-start justify-start mt-5 gap-10 text-brand-light"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-brand-orange text-5xl font-semibold text-center sm:text-start">
          Last Events:
        </h1>
        <div className="relative w-full  px-3">
          <div className="slider-container">
            <div className="mx-5">
              <Slider {...settings}>
                <div>
                  <Image
                    src="/images/events/event.png"
                    alt=""
                    width={700}
                    height={500}
                    className="object-contain w-[80%]  translate-x-[13%] translate-y-[10%]"
                  />
                </div>

                <div>
                  <Image
                    src="/images/events/event1.png"
                    alt=""
                    width={600}
                    height={500}
                    className="object-contain w-[80%]  translate-x-[13%] translate-y-[10%]"
                  />
                </div>

                <div>
                  <Image
                    src="/images/events/event.png"
                    alt=""
                    width={600}
                    height={500}
                    className="object-contain w-[80%]  translate-x-[13%] translate-y-[10%]"
                  />
                </div>
                <div>
                  <Image
                    src="/images/events/event1.png"
                    alt=""
                    width={600}
                    height={500}
                    className="object-contain w-[80%]  translate-x-[13%] translate-y-[10%] "
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center mt-5 gap-10 text-brand-light"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                "radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)",
            }}
          >
            <Image
              src="/images/logo/contact.png"
              alt=""
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-3xl md:text-7xl text-[#E1FF00] text-center font-semibold">
          Contact to Become a Guest
        </p>
        <p className="  text-sm sm:text-xl md:text-3xl text-center pl-20 pr-20">
          Interested in joining as a guest? Contact us to share your Web3
          expertise at our events. Let&apos;s build the future together!
        </p>
        <div
          className="flex flex-row text-center items-center justify-center gap-10 bg-[#F6891E] text-xl md:text-3xl p-5 text-white font-semibold"
          style={{
            clipPath:
              "polygon(10% 0%, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 25%)",
          }}
        >
          <p>CONTACT US</p>
        </div>
      </motion.div>
    </main>
  );
};

export default Utilities;
