import React from 'react';
import { IoIosReturnRight } from "react-icons/io";
import { motion } from 'framer-motion';

function Button({ title = "Get Started" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
      whileTap={{ scale: 0.95 }}
      className="w-44 items-center justify-between px-4 py-2 flex bg-white rounded-full text-black cursor-pointer"
    >
      <span className="font-semibold">{title}</span>
      <IoIosReturnRight />
    </motion.div>
  );
}

export default Button;
