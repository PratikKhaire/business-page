"use client"
import Image from "next/image";
import ArrowIcon from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])


  return <section ref={ctaRef} className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip relative">
    <div className="container">
      <div className="flex flex-col items-center justify-center text-center lg:mx-44">
        <h2 className="heading">Sign up for free today</h2>
        <p className="sub-heading">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts.</p>
        <div className="mt-10">
          <button className="btn btn-primary">Get started</button>
          <button className="btn btn-text gap-2"><span>Learn more</span><ArrowIcon className="h-5 w-5" /></button>
        </div>
      </div>
    </div>
    <motion.img src={springImage.src} width={360} alt="spring" className=" hidden lg:block  absolute top-20 right-20" style={{translateY}} />
    <motion.img src={starImage.src} width={360} alt="star" className="hidden lg:block absolute top-0 left-8" style={{translateY}}/>
  </section>;
};
