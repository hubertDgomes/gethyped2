import React from "react";
import Container from "../Container";
import ImageTrail from "@/components/ImageTrail";
import { Inter } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { BiSolidMessageAlt } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import Image from "next/image";
import MovingBtn from "../ui/MovingBtn";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";

const inter = Inter();
const Footer = () => {
  return (
    <>
      <div
        className={`${inter.className} hidden md:block`}
        style={{ height: "800px", position: "relative", overflow: "hidden" }}
      >
        <ImageTrail
          items={[
            "/images/logo1.png",
            "/images/logo2.png",
            "/images/logo3.png",
            "/images/logo4.png",
          ]}
          variant={1}
        />
        <div className="absolute z-40 top-100 left-1/2 -translate-x-1/2">
          <h1 className="text-[88px] font-bold">Let's Get Hyped!</h1>
          <div className="flex justify-center gap-x-[20px]">
            <button className="sideBtn2 flex items-center gap-x-3">
              Mail Ons direct{" "}
              <span className="p-2 bg-black text-white rounded-[10px]">
                <BiSolidMessageAlt />
              </span>
            </button>

            <button className="sideBtn3 flex items-center gap-x-3">
              Get Result
              <span className="p-2 bg-white text-amber-500 rounded-[10px]">
                <FaFire />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Container className="mb-10">
        {/* Desktop Footer */}
        <div
          className={`w-full p-15 relative h-[400px] flex-col justify-end rounded-2xl bg-[#EAE4D8] text-white clipArt2 hidden md:flex ${inter.className}`}
        >
          <Image
            src={"/images/logo.svg"}
            className="absolute bottom-4 left-0"
            width={400}
            height={200}
            alt="logo"
          />
          <div className="absolute right-0 flex justify-between gap-x-[100px] mr-[40px] text-black">
            <div className="">
              <ul className="flex font-bold gap-x-[10px] rounded-2xl text-[18px] text-black">
                <MovingBtn
                  className="bg-white rounded-[10px]"
                  text="Expertises"
                />
                <MovingBtn className="bg-white rounded-[10px]" text="Work" />
                <MovingBtn className="bg-white rounded-[10px]" text="About" />
                <MovingBtn className="bg-white rounded-[10px]" text="Contact" />
              </ul>
              <div className="flex mt-4 gap-x-[10px] items-center">
                <p className="font-bold">Follow Us</p>
                <p className="p-3 bg-white rounded-[50%] cursor-pointer hover:text-[20px] transition-all ease-in-out duration-200">
                  <FaLinkedinIn />
                </p>
                <p className="p-3 bg-white rounded-[50%] cursor-pointer hover:text-[20px] transition-all ease-in-out duration-200">
                  <FaTiktok />
                </p>
                <p className="p-3 bg-white rounded-[50%] cursor-pointer hover:text-[20px] transition-all ease-in-out duration-200">
                  <IoLogoInstagram />
                </p>
                <p className="p-3 bg-white rounded-[50%] cursor-pointer hover:text-[20px] transition-all ease-in-out duration-200">
                  <FaYoutube />
                </p>
              </div>

              <div className="flex justify-between mt-[70px]">
                <p className="text-[13px] font-light">© 2025 Get Hyped</p>
                <p className="text-[13px] font-light">© Design by Dylan</p>
              </div>
            </div>

            <div className="">

              <h3 className="font-bold text-2xl">Contact</h3>
              <p className=" text-[15px]">info@gethyped.nl</p>
              <p className=" text-[15px]">tel:+31615337496</p>
              <h3 className="font-bold text-2xl mt-[20px]">Adres</h3>
              <p className=" text-[15px]">Beltrumsestraat 6</p>
              <p className=" text-[15px]"> 7141 AL Groenlo</p>
              <p className="text-[13px] font-light">Privacyvoorwaarden</p>
            </div>
          </div>
        </div>


        <div className={`w-full py-12 px-6 flex flex-col items-center bg-[#EAE4D8] text-black rounded-[30px] md:hidden ${inter.className}`}>

          <div className="w-full max-w-[320px] mb-8">
            <Image
              src={"/images/logo.svg"}
              width={400}
              height={150}
              alt="logo"
              className="w-full h-auto"
            />
          </div>
          <button className="bg-[#FA5424] text-white w-full max-w-[320px] rounded-[15px] py-4 px-6 flex justify-between items-center font-bold text-[17px] mb-8 shadow-sm">
            Get Hyped! Neem contact op
            <span className="bg-white text-[#FA5424] p-1.5 rounded-full flex items-center justify-center">
              <FaFire className="text-lg" />
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-3 mb-8 w-full max-w-[320px]">
            <span className="bg-white rounded-[12px] font-bold text-sm px-4 py-2 cursor-pointer shadow-sm">Expertises</span>
            <span className="bg-white rounded-[12px] font-bold text-sm px-4 py-2 cursor-pointer shadow-sm">Work</span>
            <span className="bg-white rounded-[12px] font-bold text-sm px-4 py-2 cursor-pointer shadow-sm">About</span>
            <span className="bg-white rounded-[12px] font-bold text-sm px-4 py-2 cursor-pointer shadow-sm">Contact</span>
          </div>


          <div className="flex justify-center gap-4 mb-8">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-sm">
              <FaLinkedinIn className="text-black text-lg" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-sm">
              <FaTiktok className="text-black text-lg" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-sm">
              <IoLogoInstagram className="text-black text-lg" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-sm">
              <FaYoutube className="text-black text-lg" />
            </div>
          </div>


          <div className="text-center font-medium text-[15px] leading-relaxed mb-10 text-black/80">
            <p>info@gethyped.nl</p>
            <p>+31 6 1533 7496</p>
            <div className="h-4"></div>
            <p>Beltrumsestraat 6,</p>
            <p>7141 AL Groenlo</p>
          </div>

          <div className="text-center text-[13px] font-medium text-black/50 space-y-3">
            <p>Privacyvoorwaarden</p>
            <p>© 2025 Get Hyped</p>
            <p>© Design by Dylan</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
