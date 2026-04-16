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
        className={`${inter.className}`}
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
      <Container>
        <div
          className={`w-full p-15 relative flex h-[400px] flex-col justify-end rounded-2xl bg-[#EAE4D8] text-white clipArt2 ${inter.className}`}
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
              {/* This is the right items */}
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
      </Container>
    </>
  );
};

export default Footer;
