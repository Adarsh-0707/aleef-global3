import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import service1 from "../assets/vessel.png";
import service2 from "../assets/clearing.png";
import service3 from "../assets/freightg.png";
import service4 from "../assets/Stevedoring.png";
import service5 from "../assets/Door Shipping.png";
import service6 from "../assets/Shipping.png";
import service7 from "../assets/Fumigation.png";
import service8 from "../assets/log.png";
import service9 from "../assets/Warehousing.png";
import service10 from "../assets/clearance.jpg";
import service11 from "../assets/Insurance.jpg";
import service12 from "../assets/Shipping Document.jpg";

const services = [
  { title: "Chartering of Vessel", img: service1 },
  { title: "Clearing and Forwarding", img: service2 },
  { title: "Freight Forwarding", img: service3 },
  { title: "Stevedoring", img: service4 },
  { title: "Door Shipping", img: service5 },
  { title: "Shipping", img: service6 },
  { title: "Fumigation", img: service7 },
  { title: "Logistics", img: service8 },
  { title: "Warehousing", img: service9 },
  { title: "Clearance", img: service10 },
  { title: "Insurance", img: service11 },
  { title: "Shipping Document", img: service12 },
];

export default function ServicesGrid() {
  const [selected, setSelected] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [pending, setPending] = useState(null);
  const navigate = useNavigate();

  const goToInquiry = (serviceTitle, imgSrc) => {
    setSelected(serviceTitle);

    const extraField =
      serviceTitle === "Warehousing" ? { areaso: "Warehouse Area" } : {};

    setPending({
      productTitle: serviceTitle,
      imgSrc,
      form: "services",
      ...extraField,
    });

    setIsLeaving(true);
  };

  const handleExitComplete = () => {
    if (pending) {
      const params = new URLSearchParams({
        product: pending.productTitle,
        img: pending.imgSrc,
        form: pending.form,
        ...(pending.areaso ? { areaso: pending.areaso } : {}),
      });

      navigate(`/service-inquiry?${params.toString()}`);
    }
  };

  return (
    <>
      <style>{`
        .service-btn {
          overflow: hidden;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }

        /* Image starts with zoom-IN filling effect */
        .service-img {
          transform: scale(1.12);
          transition: transform 420ms cubic-bezier(.2,.9,.3,1), filter 420ms, opacity 420ms;
          will-change: transform, filter, opacity;
          display: block;
        }

        /* overlay default (subtle) */
        .service-overlay {
          transition: background 300ms ease, backdrop-filter 300ms ease, opacity 300ms ease;
          background: linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.45) 70%);
          backdrop-filter: none;
          opacity: 1;
        }

        /* Hover / focus: stronger mask */
        .service-btn:hover .service-overlay,
        .service-btn:focus .service-overlay,
        .service-btn:active .service-overlay {
          background: linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.72) 70%);
          backdrop-filter: blur(3px) saturate(1.05);
        }

        /* On hover make image slightly blur & darker for a masked appearance */
        .service-btn:hover .service-img,
        .service-btn:focus .service-img,
        .service-btn:active .service-img {
          transform: scale(1.18);
          filter: brightness(0.84) saturate(0.98);
        }

        /* Title base styles */
        .service-title {
          display: inline-block;
          transform: translateY(0) scale(1);
          transition:
            transform 360ms cubic-bezier(.2,.9,.3,1),
            opacity 360ms ease,
            letter-spacing 360ms ease,
            text-shadow 360ms ease;
          opacity: 0.98;
          letter-spacing: 0px;
          will-change: transform, opacity;
          position: relative;
        }

        /* animated underline (pseudo element like) */
        .service-title::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          width: 48%;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
          transition: transform 320ms cubic-bezier(.2,.9,.3,1), opacity 320ms;
          opacity: 0;
        }

        /* Title emphasis while hovered/focused */
        .service-btn:hover .service-title,
        .service-btn:focus .service-title,
        .service-btn:active .service-title {
          transform: translateY(-8px) scale(1.04);
          opacity: 1;
          letter-spacing: 0.6px;
          text-shadow: 0 10px 30px rgba(2,6,23,0.6);
        }

        .service-btn:hover .service-title::after,
        .service-btn:focus .service-title::after,
        .service-btn:active .service-title::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }

        /* small accessibility focus outline for keyboard users */
        .service-btn:focus {
          box-shadow: 0 0 0 4px rgba(99,102,241,0.12);
          outline: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-img, .service-overlay, .service-title, .service-title::after { transition: none !important; transform: none !important; animation: none !important; filter: none !important; }
        }
      `}</style>

      <AnimatePresence onExitComplete={handleExitComplete}>
        {!isLeaving && (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25, transition: { duration: 0.35 } }}
            className="container section"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="mb-4 text-lg md:text-xl fs-1 mb-5 fw-bold font-semibold">
                Our Services
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {services.map((s, idx) => (
                  <div key={idx} className="w-full">
                    <motion.button
                      type="button"
                      aria-label={s.title}
                      layout
                      onClick={() => goToInquiry(s.title, s.img)}
                      className="service-btn
                        relative
                        w-full
                        aspect-square
                        rounded-2xl
                        overflow-hidden
                        shadow-sm
                        focus:outline-none
                        focus:ring-0
                        transform
                        transition
                        duration-400
                        ease-in-out
                        hover:scale-[1.02]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      animate={
                        selected === s.title
                          ? {
                              scale: 1.04,
                              opacity: 0.95,
                              transition: { duration: 0.3 },
                            }
                          : {}
                      }
                    >
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="service-img absolute inset-0 w-full h-full object-cover"
                      />

                      <div
                        className="service-overlay absolute inset-0"
                        style={{
                          zIndex: 2,
                        }}
                      />

                      <div
                        className="absolute inset-0 flex items-center justify-center px-3"
                        style={{ zIndex: 3 }}
                      >
                        <div className="text-center">
                          <span className="service-title block text-white text-sm md:text-base font-semibold drop-shadow-sm">
                            {s.title}
                          </span>
                        </div>
                      </div>

                      <span
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          zIndex: 1,
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.02), 0 8px 20px rgba(2,6,23,0.06)",
                          transition:
                            "box-shadow .36s ease, transform .36s ease",
                        }}
                      />
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
