"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroller = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  return null;
};

export default SmoothScroller;
