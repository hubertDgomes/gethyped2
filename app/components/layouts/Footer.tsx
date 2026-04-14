import React from "react";
import Container from "../Container";
import ImageTrail from "@/components/ImageTrail";
import { Inter } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { BiSolidMessageAlt } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
const inter = Inter();
const Footer = () => {
  return (
    <>
      <Container className={`py-[100px] ${inter.className}`}>
        <div
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
      </Container>
    </>
  );
};

export default Footer;
