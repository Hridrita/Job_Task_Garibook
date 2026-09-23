import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import buildingFrame from "../assets/buildingFrame.png";
import carGIF from "../assets/Sedan_GiF.9efd9ae4.gif";
import Container from "./Container";

const AnimationAfterBanner = () => {
  const headingRef = useRef(null);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const headingTop = headingRef.current.getBoundingClientRect().top;

      if (headingTop <= 100) {
        setShowStats(true);
      } else {
        setShowStats(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-linear-to-l from-[#0e53ff] to-[#0038c4] overflow-hidden mt-12 md:mt-20">
      {/* Heading */}
      <Container className="pt-12 sm:pt-16 md:pt-20 pb-32 sm:pb-40 md:pb-64 relative">
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white font-extrabold text-2xl sm:text-4xl md:text-6xl leading-tight max-w-3xl"
        >
          Driven Countless Miles Earned Endless Trust
        </motion.h1>

        {/* Stats */}
        <div className="absolute left-4 right-4 sm:left-auto sm:right-4 md:right-0 bottom-12 sm:bottom-14 md:bottom-16 grid grid-cols-4 gap-2 sm:gap-6 md:gap-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={
              showStats
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.5, y: 40 }
            }
            transition={{
              duration: 0.6,
              delay: showStats ? 0 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-[#ffd200] font-extrabold text-sm sm:text-2xl md:text-3xl whitespace-nowrap">
              300,000+
            </h2>
            <p className="text-white font-bold text-[10px] sm:text-lg md:text-2xl whitespace-nowrap">
              Trip Requests
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={
              showStats
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.5, y: 40 }
            }
            transition={{
              duration: 0.6,
              delay: showStats ? 0.15 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-[#ffd200] font-extrabold text-sm sm:text-2xl md:text-3xl whitespace-nowrap">
              850,000+
            </h2>
            <p className="text-white font-bold text-[10px] sm:text-lg md:text-2xl whitespace-nowrap">
              Total Customers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={
              showStats
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.5, y: 40 }
            }
            transition={{
              duration: 0.6,
              delay: showStats ? 0.3 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-[#ffd200] font-extrabold text-sm sm:text-2xl md:text-3xl whitespace-nowrap">
              35,000+
            </h2>
            <p className="text-white font-bold text-[10px] sm:text-lg md:text-2xl whitespace-nowrap">
              Active Drivers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={
              showStats
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.5, y: 40 }
            }
            transition={{
              duration: 0.6,
              delay: showStats ? 0.45 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-[#ffd200] font-extrabold text-sm sm:text-2xl md:text-3xl whitespace-nowrap">
              64
            </h2>
            <p className="text-white font-bold text-[10px] sm:text-lg md:text-2xl whitespace-nowrap">
              District Covered
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Bottom strip + static car */}
      <div className="relative w-full h-12 sm:h-16 md:h-20">
        <div
          className="absolute bottom-0 left-0 w-full h-full animate-marquee-bg"
          style={{
            backgroundImage: `url(${buildingFrame})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 55px",
            backgroundPosition: "0 bottom",
          }}
        />

        <div className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-3 sm:left-4 md:left-10 z-10">
          <img
            src={carGIF}
            alt="Car"
            className="w-24 sm:w-32 md:w-44 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimationAfterBanner;