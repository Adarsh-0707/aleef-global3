// src/components/HomeShowcase.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import thumb1 from "../assets/wherehouse.jpg";
import thumb2 from "../assets/home 2.png";
import thumb3 from "../assets/truck.png";
import boardroom from "../assets/meet.png";
import overlap from "../assets/business.jpg";
import truck from "../assets/aleef truck.png";
import offerImg1 from "../assets/wherehouse.jpg";
import offerImg2 from "../assets/logistic.jpg";
import offerImg3 from "../assets/taiding.jpg";
import "../index.css";

export default function HomeShowcase() {
  const reduceMotion = useReducedMotion();

  // observe wrapper to drive scroll progress
  const truckWrapperRef = useRef(null);

  // keep viewport width for responsive sizing
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1366);
  useEffect(() => {
    function handleResize() {
      setVw(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useScroll target = truck wrapper; offsets chosen so motion occurs as element scrolls into view
  const { scrollYProgress } = useScroll({
    target: truckWrapperRef,
    offset: ["start end", "center center"],
  });

  // map scroll progress -> horizontal position (from off-screen right to center)
  const x = useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]);
  // gentle rotation easing as truck approaches center
  const rotate = useTransform(scrollYProgress, [0, 1], [-0.6, 0]);

  // -----------------------
  // New sizing strategy:
  // compute a pixel maxWidth depending on viewport width,
  // and set width: "100%" + maxWidth in px so image never blows up.
  // -----------------------
  function getTruckMaxWidth() {
    // tune values to taste
    if (vw < 420) return 240; // small phones
    if (vw < 600) return 300; // larger phones
    if (vw < 900) return 420; // small tablets / landscape phones
    return 660; // desktop
  }
  const truckMaxWidth = getTruckMaxWidth();
  // -----------------------

  const offers = [
    {
      img: offerImg1,
      title: "Product Sourcing",
      text:
        "We specialize in sourcing high-quality products from trusted suppliers across the world. Our extensive network allows us to procure goods that meet international standards and fulfill specific business requirements.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 7.5L12 3l9 4.5v6L12 21 3 13.5v-6z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      img: offerImg2,
      title: "Global Logistics & Supply Chain Management",
      text:
        "We offer end-to-end logistics services, managing transportation, warehousing, and distribution with a focus on efficiency and timely delivery — ensuring your goods reach their destination safely.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12h18M3 6h18M3 18h18"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      img: offerImg3,
      title: "Customised Trading Solutions",
      text:
        "At Aleef Global, we understand that every business has unique needs. Our customized trading solutions help companies navigate the complexities of international trade with confidence.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2v20M2 12h20"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } },
  };

  const subtleHover = { scale: 1.03, y: -6 };

  return (
    <motion.div className="container-xl space-y-10 md:space-y-16 my-10" initial="hidden" animate="show" variants={container}>
      {/* Top two boxes */}
      <motion.div className="row g-3" variants={fadeUp}>
        <div className="col-12 col-md-6 d-flex">
          <motion.div className="rounded-3 p-4 bg-gray-100 text-gray-900 shadow-sm flex-fill h-100 d-flex flex-column justify-content-between"
            whileHover={!reduceMotion ? subtleHover : {}}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}>
            <div>
              <h6 className="fw-semibold mb-1">Quality You Can Rely On</h6>
              <p className="mb-0 text-black/60">
                At Aleef Global, we ensure quality at every step, delivering reliable products and services you can trust.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="col-12 col-md-6 d-flex">
          <motion.div className="rounded-3 p-4 bg-black text-white shadow-sm flex-fill h-100 d-flex flex-column justify-content-between"
            whileHover={!reduceMotion ? subtleHover : {}}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}>
            <div>
              <h6 className="fw-semibold mb-1">Our Commitment, Your Confidence</h6>
              <p className="mb-0 text-white/80">
                Our dedication to quality and integrity gives you the confidence to choose us, every time.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* three image row */}
      <motion.div className="row g-3" variants={container}>
        {[thumb1, thumb2, thumb3].map((src, i) => (
          <motion.div key={i} className="col-12 col-md-4" variants={fadeUp}>
            <motion.img src={src} alt="" className="w-100 rounded-3 object-cover" style={{ height: 260 }}
              whileHover={!reduceMotion ? { scale: 1.04, y: -6 } : {}} transition={{ type: "spring", stiffness: 110, damping: 14 }} />
          </motion.div>
        ))}
      </motion.div>

      {/* intro text */}
      <motion.div className="text-center" variants={fadeUp}>
        <motion.p className="mx-auto" style={{ maxWidth: 800 }}>
          Aleef Global is a forward-thinking general trading company, built on the trusted legacy of ALEEF. We specialize in delivering customized, innovative trade solutions that empower modern businesses.
        </motion.p>
      </motion.div>

      {/* boardroom */}
      <motion.div className="row align-items-center g-4" variants={container}>
        <motion.div className="col-12 col-lg-6" variants={fadeUp}>
          <h1 className="mb-2 fs-1 fw-semibold">Our Commitment to Performance</h1>
          <p>At Aleef Global, performance is not just about delivering products; it’s about achieving outstanding results for our clients.</p>
        </motion.div>

        <motion.div className="col-12 col-lg-6" variants={fadeUp}>
          <motion.img src={boardroom} alt="" className="w-100 rounded-3 shadow" style={{ maxHeight: 380, objectFit: "cover" }}
            whileHover={!reduceMotion ? { scale: 1.02, y: -6 } : {}} transition={{ type: "spring", stiffness: 110, damping: 14 }} />
        </motion.div>
      </motion.div>

      {/* big section with truck */}
      <motion.div className="position-relative text-white rounded-4 overflow-hidden mt-5" variants={fadeUp}>
        <motion.div className="bg-[#3bb0a8] p-4 p-md-5 mb-0" whileHover={!reduceMotion ? { scale: 1.01 } : {}}>
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-5 d-flex justify-content-center">
              <motion.div className="rounded-3 overflow-hidden shadow-lg" style={{ width: "100%", maxWidth: 360 }} variants={fadeUp}>
                <img src={overlap} alt="" className="w-100 h-100 rounded-3" style={{ height: 240, objectFit: "cover" }} />
              </motion.div>
            </div>

            <div className="col-12 col-md-7 text-center text-md-start">
              <h3 className="fw-bold mb-3 fs-1">Your Success, Our Mission</h3>
              <p className="text-black mb-0" style={{ maxWidth: 550 }}>General trading solutions tailored for today’s dynamic markets, delivering trust in every partnership.</p>
            </div>
          </div>
        </motion.div>

        {/* black truck area */}
        <motion.div className="bg-black p-4 p-md-5 mt-0">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <h2 className="text-white mb-2 fs-1 fw-semibold">Driven by Precision and Purpose</h2>
              <p className="text-white/70">Every process is guided by accuracy and intent — ensuring consistent quality and trust in every shipment.</p>
            </div>

            <div className="col-12 col-lg-6">
              <motion.div ref={truckWrapperRef} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden", borderRadius: 12,
                minHeight: 300, background: "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.06))", padding: 28
              }} variants={fadeUp}>

                {/* faint ground trail */}
                {!reduceMotion && (
                  <motion.div aria-hidden="true" style={{
                    position: "absolute", left: "5%", right: "5%", bottom: "18%",
                    height: 18, filter: "blur(10px)", opacity: 0.06,
                    background: "linear-gradient(90deg, rgba(0,0,0,0), rgba(11,18,32,0.22), rgba(0,0,0,0))",
                    pointerEvents: "none", borderRadius: 999
                  }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.02, 0.12, 0.02] }}
                    transition={{ duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
                )}

                {/* scroll-driven truck (or static fallback for reduced motion) */}
                {reduceMotion ? (
                  <img src={truck} alt="aleef-truck-static" style={{
                    position: "absolute", left: "50%", top: "50%",
                    transform: "translate(-50%, -50%)", width: "clamp(300px, 60vw, 760px)",
                    maxHeight: 360, objectFit: "contain", pointerEvents: "none", userSelect: "none"
                  }} />
                ) : (
                  <motion.img
                    src={truck}
                    alt="aleef-truck"
                    aria-hidden="true"
                    // single style prop with motion values + stable CSS sizing:
                    style={{
                      x, // motion value (translates horizontally)
                      rotate, // motion value for gentle rotation
                      position: "absolute",
                    
                      transform: "translate(-50%, -50%)",
                      width: "100%",
                      maxWidth: `${truckMaxWidth}px`, // deterministic cap in px
                      height: "auto",
                      maxHeight: 320,
                      objectFit: "contain",
                      pointerEvents: "none",
                      userSelect: "none"
                    }}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cards */}
      <section className="my-5">
        <motion.div className="text-center mb-4" variants={fadeUp}>
          <h2 className="fw-bold fs-1">What We Offer</h2>
          <p className="text-muted small mx-auto" style={{ maxWidth: 700 }}>
            We deliver customized, reliable, and efficient trading solutions designed to meet the evolving needs of global businesses.
          </p>
        </motion.div>

        <motion.div className="row g-4" variants={container}>
          {offers.map((offer, i) => (
            <motion.div key={i} className="col-12 col-md-6 col-lg-4 d-flex" variants={fadeUp}>
              <motion.article className="card flex-fill border-0 shadow-sm"
                style={{ borderRadius: 12, background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}
                whileHover={!reduceMotion ? { translateY: -6 } : {}}
                transition={{ type: "spring", stiffness: 110, damping: 14 }}>
                <div style={{ position: "relative" }}>
                  <img src={offer.img} alt="" className="w-100 d-block" style={{ height: 300, objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                  <div style={{
                    position: "absolute", left: 16, bottom: -22, width: 54, height: 54, borderRadius: 10,
                    background: "#0b1220", display: "flex", justifyContent: "center", alignItems: "center",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.18)", border: "3px solid #fff"
                  }}>
                    <div style={{ color: "#fff" }}>{offer.icon}</div>
                  </div>
                </div>

                <div className="card-body pt-4" style={{ paddingTop: 36 }}>
                  <h5 className="fw-bold" style={{ minHeight: 48 }}>{offer.title}</h5>
                  <p className="text-muted" style={{ fontSize: 14 }}>{offer.text}</p>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
