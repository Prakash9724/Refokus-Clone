import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import vid1 from "/videos/v1 (1).mp4";
import vid2 from "/videos/v1 (2).mp4";
import vid3 from "/videos/v1 (3).mp4";
import vid4 from "/videos/v1 (4).mp4";

const Products = () => {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
    {
      title: "layout land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product mover={mover} count={index} val={elem} key={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
        >
          
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            src={vid1} // Replace with your video path
          />

          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-200 overflow-hidden"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
           
            <video
              className="h-full w-full object-cover "
              autoPlay
              loop
              muted
              src={vid2} // Replace with your video path
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-300"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              src={vid3} // Replace with your video path
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full bg-sky-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              src={vid4} // Replace with your video path
            />
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
