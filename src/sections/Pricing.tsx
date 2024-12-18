"use client"
import {motion} from "framer-motion"
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";


const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];



export const Pricing = () => {
  return <section className="py-24 bg-white">
    <div className="container">
      <div className="flex flex-col justify-center items-center text-center ">
        <div className="max-w-[540px] lg:mx-44">
          <h1 className="heading">Pricing</h1>
          <p className="sub-heading lg:mx-12">Free forever. Upgrade for unlimited task, better security and unlimited features.</p>

        </div>
      </div>


      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (

          <div key={null} className={twMerge("card", inverse === true && 'border-black bg-black text-white')}>
            <div key={title}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg text-black/50 font-bold", inverse === true && "text-white/60")}>{title}</h3>
                {popular === true && (
                  <div className="inline-flex text-sm px-4 py-1.5 border border-white/20 rounded-xl ">
                    <motion.span animate={{ backgroundPositionX: "100%"}} transition={{ duration:1, repeat: Infinity, ease: "linear", repeatType:"loop"}} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)]  [background-size:200%] text-transparent bg-clip-text font-medium">Popular</motion.span>
                  </div>
                )}
              </div>

              <div className="flex items-baseline mt-[30px] gap-1">
                <span className="text-4xl leading-none font-bold tracking-tighter">${monthlyPrice}</span>
                <span className={twMerge("text-black/50 font-bold tracking-tight", inverse === true && "text-white/50")}>/month</span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map(features => (
                  <li key={features} className="flex  text-sm items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{features}</span></li>
                ))}
              </ul>
            </div>
          </div>

        ))}
      </div>



    </div>
  </section>;
};
