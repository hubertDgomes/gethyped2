import React from "react";
import Container from "../Container";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import Link from "next/link";
import MovingBtn from "../ui/MovingBtn";

const inter = Inter();

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full z-50 top-0 left-0">
        <Container className="py-[20px]">
        <div className={`flex justify-between items-center ${inter.className}`}>
          <div className="">
            <Image src="/images/logo.svg" width={200} height={200} alt="logo" />
          </div>
          <div className="">
            <ul className="flex justify-between bg-white py-3 px-5 gap-x-10 font-bold rounded-2xl text-[18px]">
              <MovingBtn text="Expertises"/>
              <MovingBtn text="Work"/>
              <MovingBtn text="About"/>
              <MovingBtn text="Contact"/>
            </ul>
          </div>
          <div className="">
            <button className="sideBtn flex items-center gap-3">
              Get Result{" "}
              <span className="p-2 bg-white text-yellow-500 rounded-[10px]">
                <FaFire />
              </span>
            </button>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Navbar;
