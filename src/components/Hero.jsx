import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const Hero = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section>
      <div className="bg-black text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }}
            className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8"
          >
            <h1 className="text-3xl md:text-5xl text-yellow-300 tracking-loose">
              VidBoost AI
            </h1>
            <h2 className="text-3xl md:text-4xl leading-relaxed md:leading-snug mb-10">
              One Stop Tool for all your Youtube Needs!
            </h2>
            <motion.a
              href="#"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 mb-4 border border-yellow-300 hover:border-transparent"
            >
              Enhance your YouTube presence with intelligent algorithms, making every video a VidBoost creation!
            </motion.a>
            <motion.a
              href={'/generate'}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Get Started
            </motion.a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }}
            className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center"
          >
            <div className="h-48 flex flex-wrap content-center">
              <motion.div variants={fadeIn}>
                <img
                  className="inline-block mt-28 hidden xl:block"
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  alt="Image 1"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="test1.png"
                  alt="Image 2"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <img
                  className="inline-block mt-28 hidden lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  alt="Image 3"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
