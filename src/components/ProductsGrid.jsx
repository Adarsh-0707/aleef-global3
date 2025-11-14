import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import p1 from "../assets/Fruits.png";
import p2 from "../assets/vegetables.jpg";
import p3 from "../assets/Animal.jpg";
import p4 from "../assets/OCC.png";
import p5 from "../assets/Charcoal.png";
import p7 from "../assets/Fishing net.png";
import p8 from "../assets/Natural stone.png";
import p9 from "../assets/Salt.png";
import p10 from "../assets/Indian spices.png";
import p12 from "../assets/Rice.png";

const products = [
  { title: "Fruits", img: p1 },
  { title: "Vegetables", img: p2 },
  { title: "Animal Feed", img: p3 },
  { title: "OCC", img: p4 },
  { title: "Charcoal", img: p5 },
  { title: "Fishing Net", img: p7 },
  { title: "Natural Stone", img: p8 },
  { title: "Salt", img: p9 },
  { title: "Indian Spices", img: p10 },
  { title: "Rice", img: p12 },
];

export default function ProductsGrid() {
  const [selected, setSelected] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [pending, setPending] = useState(null);
  const navigate = useNavigate();

  const goToInquiry = (productTitle, imgSrc) => {
    setSelected(productTitle);
    setPending({ productTitle, imgSrc });
    setIsLeaving(true);
  };

  const handleExitComplete = () => {
    if (pending) {
      const params = new URLSearchParams({
        product: pending.productTitle,
        img: pending.imgSrc,
      });
      navigate(`/product-inquiry?${params.toString()}`);
    }
  };

  return (
    <>
      <style>{`
        .product-btn {
          overflow: hidden;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }

        /* image fills and starts slightly zoomed to look immersive */
        .product-img {
          transform: scale(1.08);
          transition: transform 420ms cubic-bezier(.2,.9,.3,1), filter 420ms, opacity 420ms;
          will-change: transform, filter, opacity;
          display: block;
        }

        /* overlay default */
        .product-overlay {
          transition: background 300ms ease, backdrop-filter 300ms ease, opacity 300ms ease;
          background: linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 70%);
          backdrop-filter: none;
          opacity: 1;
        }

        /* Hover / focus: stronger mask */
        .product-btn:hover .product-overlay,
        .product-btn:focus .product-overlay,
        .product-btn:active .product-overlay {
          background: linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.75) 70%);
          backdrop-filter: blur(3px) saturate(1.05);
        }

        /* On hover blur/darken and zoom image for masked effect */
        .product-btn:hover .product-img,
        .product-btn:focus .product-img,
        .product-btn:active .product-img {
          transform: scale(1.18);
          filter: brightness(0.82) saturate(0.98);
        }

        /* Title base */
        .product-title {
          display: inline-block;
          transform: translateY(0) scale(1);
          transition:
            transform 360ms cubic-bezier(.2,.9,.3,1),
            opacity 360ms ease,
            letter-spacing 360ms ease,
            text-shadow 360ms ease;
          opacity: 0.98;
          letter-spacing: 0px;
          position: relative;
          will-change: transform, opacity;
        }

        /* animated underline */
        .product-title::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          width: 46%;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
          transition: transform 320ms cubic-bezier(.2,.9,.3,1), opacity 320ms;
          opacity: 0;
        }

        /* Title emphasis while hovered/focused */
        .product-btn:hover .product-title,
        .product-btn:focus .product-title,
        .product-btn:active .product-title {
          transform: translateY(-6px) scale(1.03);
          opacity: 1;
          letter-spacing: 0.45px;
          text-shadow: 0 8px 26px rgba(2,6,23,0.6);
        }

        .product-btn:hover .product-title::after,
        .product-btn:focus .product-title::after,
        .product-btn:active .product-title::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }

        /* accessibility focus outline */
        .product-btn:focus {
          box-shadow: 0 0 0 4px rgba(99,102,241,0.12);
          outline: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .product-img, .product-overlay, .product-title, .product-title::after {
            transition: none !important;
            transform: none !important;
            animation: none !important;
            filter: none !important;
          }
        }
      `}</style>

      <AnimatePresence onExitComplete={handleExitComplete}>
        {!isLeaving && (
          <motion.div
            key="products"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25, transition: { duration: 0.35 } }}
            className="container section"
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="mb-5 text-lg md:text-2xl fw-bold font-semibold">
                Our Products
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {products.map((product, index) => (
                  <div key={index} className="w-full">
                    <motion.button
                      type="button"
                      aria-label={product.title}
                      layout
                      onClick={() => goToInquiry(product.title, product.img)}
                      className={`product-btn relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm focus:outline-none
                        focus:ring-0 transform transition duration-300 ease-in-out hover:scale-[1.02]`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      animate={
                        selected === product.title
                          ? {
                              scale: 1.06,
                              opacity: 0.92,
                              transition: { duration: 0.35 },
                            }
                          : {}
                      }
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        loading="lazy"
                        className="product-img absolute inset-0 w-full h-full object-cover"
                      />

                      <div
                        className="product-overlay absolute inset-0"
                        style={{
                          zIndex: 2,
                        }}
                      />

                      <div
                        className="absolute inset-0 flex items-center justify-center px-3"
                        style={{ zIndex: 3 }}
                      >
                        <span className="product-title block text-white text-sm md:text-base font-semibold text-center drop-shadow-sm">
                          {product.title}
                        </span>
                      </div>

                      <span
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          zIndex: 1,
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.02), 0 8px 18px rgba(2,6,23,0.06)",
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
