"use client";
import React from "react";
import Container from "../Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter();

const allPhotos = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide4.png",
  "/images/slide5.png",
  "/images/slide6.png",
  "/images/slide7.png",
  "/images/slide8.png",
  "/images/slide9.png",
  "/images/slide10.png",
  "/images/slide11.png",
];

type photo = {
  src: string;
};

const Logos = ({ src = "" }: photo) => {
  return (
    <>
      <div className="h-[300px] h-[300px] border rounded-[5px] border-black/50 p-4 mx-[20px] relative">
        <Image src={src} fill alt="logo.ong" className="object-cover" />
      </div>
    </>
  );
};

const Scroller = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 20000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className={`mt-[500px] pb-[80px] ${inter.className}`}>
        <h3 className="font-semibold text-[80px] leading-20">
          These brands <br /> got hyped.
        </h3>
      </Container>

      <div className="slider-container mt-[30px] py-[30px]">
        <Slider {...settings}>
          {allPhotos.map((items) => (
            <div>
              <Logos src={items} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Scroller;
