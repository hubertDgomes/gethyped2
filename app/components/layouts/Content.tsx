import React from "react";
import Container from "../Container";
import { Inter } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const inter = Inter();

type items = {
  className?: string;
  src: string;
  borderCol: string;
  videoLink: string;
  bgCol: string;
  text1 : string;
  text2 : string
};

const ShowCase = ({
  className = "",
  src = "",
  borderCol = "",
  videoLink = "",
  bgCol = "",
  text1 = "",
  text2 = ""
}: items) => {
  return (
    <>
      <div
        className={`h-[525px] w-[375px] border-8  ${borderCol} rounded-[48px] ${className} group cursor-pointer hover:rotate-[-3deg] transition-all ease-in-out duration-300 ${inter.className}`}
      >
        <Image
          src={src}
          fill
          alt="logo"
          className="rounded-[40px] object-cover"
        />
        <video
          src={videoLink}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full rounded-[40px] opacity-0 group-hover:opacity-100 object-cover transition-all ease-in-out duration-300"
        ></video>
        <div
          className={`absolute bottom-7 left-1/2 -translate-x-1/2 w-[320px] p-4 h-[580px] flex flex-col justify-end rounded-2xl  ${bgCol} text-white clipArt`}
        >
          <h3 className="text-[23px] font-semibold w-[184px]">
            {text1}
          </h3>
          <p className="text-[20px] font-medium py-2 px-3 bg-white/40 w-fit">
            {text2}
          </p>
          <div className="rounded-[50%] bg-white p-4 w-[50px] h-[50px]  absolute right-4  bottom-[160px] max-h-[100px] overflow-hidden">
            <MdOutlineArrowOutward className="text-[30px] text-black absolute bottom-[-20px] left-[-10px] transition-all group-hover:bottom-2 group-hover:left-2 ease-in-out duration-200" />
            <MdOutlineArrowOutward className="text-[30px] text-black absolute top-2.5 right-2.5 group-hover:right-0  group-hover:top-[-28px] transition-all ease-in-out duration-200" />
          </div>
        </div>
      </div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <Container className={`${inter.className} pb-[100px]`}>
        <div className="ml-20">
          <h1 className="text-[120px] font-bold w-[681px] leading-30">
            Content dat scoort.
          </h1>
          <p className="text-[32px] font-semibold w-[681px] my-[40px]">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          <button className="sideBtn2 flex items-center gap-x-3">
            Bekijk al ons werk{" "}
            <span className="p-2 bg-black text-white rounded-[10px]">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="relative mt-[30px] py-[30px]">
          <ShowCase
            borderCol="border-[#FA5424]"
            bgCol="bg-[#FA5424]"
            src="/images/bg1.jpeg"
            className="absolute left-30"
            text1="Van nul naar vol, binnen 3 weken"
            text2="Billit"
            videoLink="https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
            />
          <ShowCase
            borderCol="border-[#0D8DFF]"
            bgCol="bg-[#0D8DFF]"
            src="/images/bg2.jpeg"
            className="absolute left-1/2 -translate-x-1/2 top-[-40px]"
            text1="Zacht in smaak, sterk in beeld"
            text2="Roasta"
            videoLink="https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
            />
          <ShowCase
            borderCol="border-[#33C791]"
            bgCol="bg-[#33C791]"
            src="/images/bg3.jpeg"
            className="absolute right-30 top-[-80px]"
            text1="Content die écht smaakt (en raakt)"
            text2="Loco"
            videoLink="https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
          />
        </div>
      </Container>
    </>
  );
};

export default Content;
