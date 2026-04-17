import React from "react";
import Container from "../Container";

import { Inter } from "next/font/google";

const inter = Inter();

const Home = () => {
  return (
    <>
      <Container className={`lg:mt-50 mt-[100px] ${inter.className}`}>
        <h1
          className={`lg:font-bold font-semibold lg:text-[128px] text-[60px] lg:w-[1400px] leading-[60px] lg:leading-[120px] mx-[20px]`}
        >
          Get Hyped, <br /> Get Noticed. <br /> Get Results.
        </h1>
        <p className="lg:font-bold font-semibold lg:text-[32px] text-[25px] mt-[30px] lg:mx-0 mx-[20px]">Klaar met gokken op content <br /> die niets oplevert?</p>
      </Container>
    </>
  );
};

export default Home;
