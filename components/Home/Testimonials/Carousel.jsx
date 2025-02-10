"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import customers from "./Clients";

export default function Marquee() {
  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef, { threshold: 0.1, once: false });

  return (
    <div ref={marqueeRef} className="relative w-full overflow-hidden py-8">
      {isInView && (
        <motion.div
          className="flex w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Move by half since we have 2 sets
          transition={{
            ease: "linear",
            duration: 15, // Adjust speed
            repeat: Infinity,
          }}
        >
          <div className="flex items-center w-max">
            {customers.map((src, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={150}
                  height={150}
                  className="bg-white p-3 rounded-lg w-[150px] aspect-square shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center w-max">
            {customers.map((src, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={150}
                  height={150}
                  className="bg-white p-3 rounded-lg w-[150px] aspect-square shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
