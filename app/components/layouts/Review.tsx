import React from "react";
import Container from "../Container";
import { Inter } from "next/font/google";
import Image from "next/image";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmDown } from "react-icons/hi";

const inter = Inter();


const Review = () => {
  return (
    <>
      <Container className={`py-[100px] ${inter.className}`}>
        <p className="lg:text-[80px] text-[30px] leading-10 lg:font-semibold font-bold lg:leading-20 lg:ml-[100px] mx-[20px]">
          Wij maken content die opvalt. Die <br className="hidden lg:block" /> blijft hangen. Die jouw
          doelgroep <br className="hidden lg:block" />
          raakt en jouw merk in beweging <br className="hidden lg:block" /> brengt. Snel, krachtig en
          energiek.
        </p>
        <div className="flex justify-between lg:flex-row flex-col items-end mt-[100px]">
          <Image
            src={"/images/girl.jpeg"}
            alt="logo"
            width={300}
            height={200}
            className="rounded-3xl hidden lg:block"
          />
          <div className="mx-[20px]">
            <p className="lg:w-[580px] lg:text-[32px] text-[24px] font-semibold lg:leading-10 ">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <button className="sideBtn2 mt-10 flex gap-x-4 items-center">
              Leer Onas Kennen{" "}
              <span className="text-[30px] p-2 bg-black text-white rounded-[10px]">
                <HiArrowSmRight />
              </span>
            </button>
          </div>
          <div className="hidden lg:block">
            <button className="sideBtn2 cursor-pointer group relative overflow-hidden  w-[100px] h-[100px] text-center">
              <HiArrowSmDown className="absolute top-[-33px] text-[40px] left-7 group-hover:top-[30px] transition-all ease-in-out duration-200 text-amber-500" />
              <HiArrowSmDown className="text-[40px] top-[30px] left-7 absolute group-hover:top-[100px] transition-all ease-in-out duration-200  text-amber-500" />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Review;
