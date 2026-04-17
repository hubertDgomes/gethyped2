'use client'
import React, { useState } from "react";
import Container from "../Container";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import Link from "next/link";
import MovingBtn from "../ui/MovingBtn";
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";


const inter = Inter();

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className={`fixed w-full z-50 top-0 left-0 ${inter.className}`}>
        <Container className="py-[20px]">
          <div className={`flex justify-between items-center ${inter.className}`}>
            <div className="ml-[20px] w-[150px] lg:w-fit z-40">
              <Image src="/images/logo.svg" width={200} height={200} alt="logo" />
            </div>
            <div className="lg:block hidden">
              <ul className="flex justify-between bg-white py-3 px-5 gap-x-10 font-bold rounded-2xl text-[18px]">
                <MovingBtn className="bg-white" text="Expertises" />
                <MovingBtn className="bg-white" text="Work" />
                <MovingBtn className="bg-white" text="About" />
                <MovingBtn className="bg-white" text="Contact" />
              </ul>
            </div>
            <div className="lg:block hidden">
              <button className="sideBtn flex items-center gap-3">
                Get Result{" "}
                <span className="p-2 bg-white text-yellow-500 rounded-[10px]">
                  <FaFire />
                </span>
              </button>
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className="block lg:hidden mr-[50px] text-[40px] bg-pink-300 p-3 rounded-[10px] cursor-pointer z-40">{toggle ? <IoCloseOutline /> : <IoMdMenu />}</button>
          </div>
          {toggle &&
            <div className="absolute inset-0 m-[10px] mr-[30px] h-[100vh] bg-pink-300 z-30 pt-28 px-6 rounded-2xl lg:hidden flex flex-col p-5">
              <ul className="flex flex-col font-bold gap-x-[10px] rounded-2xl text-[18px] text-black justify-center items-center h-screen gap-4">
                <MovingBtn className="bg-white rounded-[10px] w-fit text-[30px]" text="Expertises" />
                <MovingBtn className="bg-white rounded-[10px] w-fit text-[30px]" text="Work" />
                <MovingBtn className="bg-white rounded-[10px] w-fit text-[30px]" text="About" />
                <MovingBtn className="bg-white rounded-[10px] w-fit text-[30px]" text="Contact" />
              </ul>
              <button className="sideBtn4 flex items-center gap-3 mb-[40px] m-auto">
                Get Result{" "}
                <span className="p-2 bg-white text-yellow-500 rounded-[10px]">
                  <FaFire />
                </span>
              </button>

            </div>
          }
        </Container>
      </div>
    </>
  );
};

export default Navbar;
