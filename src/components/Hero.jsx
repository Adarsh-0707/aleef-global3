import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import frontImg from "../assets/home.jpg";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const baseTransition = { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] };

  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <motion.div
          className="relative mx-auto max-w-[1200px] rounded-[24px] h-[35vw] min-h-[240px] md:min-h-[340px] lg:min-h-[420px]"
          initial={reduceMotion ? {} : { opacity: 0, y: 18 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={baseTransition}
          whileHover={!reduceMotion ? { scale: 1.004 } : {}}
        >
          {/* FRONT MAIN IMAGE */}
          <motion.img
            src={frontImg}
            alt="main"
            className="absolute inset-0 w-full h-full object-cover rounded-[24px] shadow-[0_14px_40px_rgba(0,0,0,.45)]"
            initial={reduceMotion ? {} : { opacity: 0, y: 10, scale: 0.995 }}
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                    scale: [1, 1.01, 1],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    ...baseTransition,
                    duration: 1.4,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }
            }
            whileHover={!reduceMotion ? { scale: 1.03, y: -6 } : {}}
            loading="eager"
            role="img"
          />

          <motion.div
            className="absolute left-4 md:left-8 lg:left-10 text-white"
            style={{}}
            initial={reduceMotion ? {} : { opacity: 0, x: -18 }}
            animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ ...baseTransition, delay: 0.12 }}
          >
            <div className="relative top-20 md:top-24 lg:top-28">
              <motion.h1
                className="font-bold leading-[1.05] text-[clamp(26px,6vw,64px)] drop-shadow-[0_2px_10px_rgba(0,0,0,.35)]"
                initial={reduceMotion ? {} : { opacity: 0, x: -8 }}
                animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ ...baseTransition, delay: 0.18 }}
                whileHover={
                  !reduceMotion
                    ? { textShadow: "0px 8px 30px rgba(0,0,0,0.5)" }
                    : {}
                }
              >
                Expanding Horizons with
                <br /> Aleef Global
              </motion.h1>

              <motion.div
                className="mt-3 md:mt-4 max-w-[560px] rounded-xl p-3 md:p-4 text-[clamp(14px,2vw,19px)] leading-snug shadow-[0_6px_20px_rgba(0,0,0,.25)] bg-black/50 backdrop-blur-md"
                initial={reduceMotion ? {} : { opacity: 0, x: -6 }}
                animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ ...baseTransition, delay: 0.22 }}
              >
                Your trusted partner for world-class import & export solutions,
                connecting India’s finest products to the world.
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
