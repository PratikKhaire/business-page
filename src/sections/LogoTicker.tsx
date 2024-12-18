"use client"
import acme from "@/assets/logo-acme.png";
import Image from "next/image";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import pulse from "@/assets/logo-echo.png";
import { motion } from "framer-motion";


export const LogoTicker = () => {
  return <div className="py-8 bg-white">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div className="flex gap-14 flex-none pr-14" animate={{ translateX: "-50%" }} transition={{ duration: 20 , repeat:Infinity, ease:"linear",repeatType:"loop"}} >
          <Image src={acme} alt="acme" className="logo-ticker-image" />
          <Image src={celestial} alt="acme" className="logo-ticker-image" />
          <Image src={echo} alt="acme" className="logo-ticker-image" />
          <Image src={pulse} alt="acme" className="logo-ticker-image" />
          <Image src={quantum} alt="acme" className="logo-ticker-image" />
          <Image src={apex} alt="acme" className="logo-ticker-image" />


          <Image src={acme} alt="acme" className="logo-ticker-image" />
          <Image src={celestial} alt="acme" className="logo-ticker-image" />
          <Image src={echo} alt="acme" className="logo-ticker-image" />
          <Image src={pulse} alt="acme" className="logo-ticker-image" />
          <Image src={quantum} alt="acme" className="logo-ticker-image" />
          <Image src={apex} alt="acme" className="logo-ticker-image" />
        </motion.div>
      </div>

    </div>

  </div>;
};
