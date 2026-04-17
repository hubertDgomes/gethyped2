import React from "react";
import Container from "../Container";
import { Inter } from "next/font/google";

const inter = Inter();

type Add = {
  bgcol: string;
  rotate: string;
  className: string;
  src?: string;
  part1?: string;
  part2?: string;
  counter?: string;
};

const MicroCard = ({
  bgcol = "",
  rotate = "",
  className = "",
  part1 = "",
  part2 = "",
  counter = "",
}: Add) => {
  return (
    <>
      <div
        className={`lg:h-[585px] lg:w-[450px] h-[400px] w-[700px] mx-[20px] transition-all ease-in-out duration-200 ${bgcol} ${inter.className} ${rotate} ${className} rounded-4xl flex flex-col justify-between p-9 cursor-pointer`}
      >
        <p className="lg:text-[88px] text-[50px] font-bold">{counter}</p>
        <div className="">
          <p className="font-bold lg:text-[22px] text-[20px]">{part1}</p>
          <hr />
          <p className="font-bold lg:text-[22px] text-[20px]">{part2}</p>
        </div>
      </div>
    </>
  );
};

const VideoCard = ({ rotate = "", className = "", src = "" }: Add) => {
  return (
    <>
      <div
        className={`lg:w-[450px] w-[300px] mx-[20px] transition-all ease-in-out duration-200 ${inter.className} ${rotate} ${className} flex flex-col justify-between cursor-pointer`}
      >
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-fit rounded-4xl"
        ></video>
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <Container className={`${inter.className} py-[100px]`}>
        <div className="relative flex items-center group transition-all ease-in-out duration-200">
          <MicroCard
            bgcol="bg-[#0D8DFF]"
            rotate="lg:rotate-[-7deg] lg:hover:rotate-0 hover:mx-[80px]"
            counter="10M+"
            part1="Organische views"
            part2="Groei door slimme content"
            className=""
          />
          <VideoCard
            src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
            bgcol="bg-[#0D8DFF]"
            rotate="rotate-[7deg] hover:rotate-0 hover:mx-[80px]"
            className=""
          />
          <MicroCard
            bgcol="bg-[#33C791]"
            rotate="rotate-[7deg] hover:rotate-0 hover:mx-[80px]"
            counter="30+"
            part1="Merken geholpen"
            part2="Van start-up tot multinational"
            className="lg:block hidden"
          />
          <VideoCard
            src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
            bgcol="bg-[#0D8DFF]"
            rotate="rotate-[-7deg] hover:rotate-0 hover:mx-[80px]"
            className="lg:block hidden"
          />
        </div>
      </Container>
    </>
  );
};

export default Cards;
