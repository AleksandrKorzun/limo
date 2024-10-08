"use client";

import ArrowDownIcon from "@/assets/icons/ArroDown";
import React from "react";
import { motion } from "framer-motion";

const ScrollButton = () => {
  return (
    <div className="flex flex-col items-center absolute bottom-[90px] translate-x-[-50%] left-1/2">
      <p className="font-latoMedium text-white text-small mt-[30px]">Scroll</p>
      <div className="relative">
        <motion.div
          className="absolute translate-x-[-50%]"
          initial={{ bottom: "-50px" }}
          animate={{ bottom: "-40px" }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatType: "reverse",
          }}
        >
          <ArrowDownIcon />
        </motion.div>
        <motion.div
          className="absolute translate-x-[-50%]"
          initial={{ bottom: "-80px" }}
          animate={{ bottom: "-70px" }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: 0.25,
            repeatType: "reverse",
          }}
        >
          <ArrowDownIcon />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollButton;
