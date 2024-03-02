import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="image">
          <img src="../../assets/banner-image-3.jpg" alt="" />
        </div>
        <div className="banner-text">
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            WELCOME TO THE FUTURE
          </motion.h2>

          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            OF SALON
          </motion.h2>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            Invest in the future of finance with the most advanced and secure
            cryptocurrency exchange.
          </motion.p>
          <div className="banner-btn-cont">
          <div className="banner-btn">
            <button>Get Started</button>
            <button>Call Us</button>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
