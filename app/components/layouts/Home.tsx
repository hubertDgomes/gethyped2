import React from "react";
import Container from "../Container";

import { Inter } from "next/font/google";

const inter = Inter();

const Home = () => {
  return (
    <>
      <Container className={`mt-50 ${inter.className}`}>
        <h1
          className={`font-bold text-[128px] w-[1400px] leading-[120px]`}
        >
          Get Hyped. Get Noticed. Get Results.
        </h1>
        <p className="font-bold text-[32px] mt-[30px]">Klaar met gokken op content <br /> die niets oplevert?</p>
      </Container>
    </>
  );
};

export default Home;
