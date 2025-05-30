"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full h-full mt-20 text-brand-orange bg-[#080401]">
      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[-3%] sm:translate-y-[-13%] md:translate-y-[-15%] lg:translate-y-[-21%]">
        <div className="flex flex-col items-center justify-center gap-1 sm:p-20 sm:gap-10">
          <h1 className="w-full text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E1FF00] text-center whitespace-nowrap">
            Movement Hub
          </h1>
          <div className="flex flex-row items-start justify-start gap-1 mt-1 sm:mt-15">
            <Link href="/">
              <Image src="/svg/X.svg" alt="contact" width={44} height={44} />
            </Link>
            <Link href="/">
              <Image
                src="/svg/Telegram.svg"
                alt="contact"
                width={44}
                height={44}
              />
            </Link>
            <Link href="/">
              <Image
                src="/svg/Discord.svg"
                alt="contact"
                width={44}
                height={44}
              />
            </Link>
            <Link href="/">
              <Image
                src="/svg/Facebook.svg"
                alt="contact"
                width={44}
                height={44}
              />
            </Link>
            <Link href="/">
              <Image
                src="/svg/Global.svg"
                alt="contact"
                width={44}
                height={45}
              />
            </Link>
          </div>
          <p className="text-sm sm:text-2xl text-white text-center">
            Connect with builders, spark innovation, and grow through our
            community events. Be part of the decentralized revolution—join us
            now!
          </p>
        </div>
      </div>
      <Image
        src="/images/footer/bird.png"
        alt="Next.js logo"
        width={2000}
        height={500}
        className="object-contain w-full h-full"
      />
    </footer>
  );
};

export default Footer;
