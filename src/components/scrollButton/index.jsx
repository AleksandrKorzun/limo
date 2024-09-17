"use client";

import ArrowDownIcon from "@/assets/icons/ArroDown";
import React from "react";
import { motion } from "framer-motion";

const ScrollButton = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-latoMedium text-white text-small mt-[30px]">Scroll</p>
      <motion.div
        initial={{ marginTop: "-10px" }}
        animate={{ marginTop: "0" }}
        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
      >
        <ArrowDownIcon />
      </motion.div>
      <motion.div
        initial={{ marginTop: "-20px" }}
        animate={{ marginTop: "-10px" }}
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
  );
};

export default ScrollButton;
