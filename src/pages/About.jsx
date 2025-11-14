import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Stats from "../components/Stats";

import bannerImg from "../assets/background.png";
import avatar1 from "../assets/reza.png";
import avatar2 from "../assets/Fahad Abdullah.jpg";
import avatar3 from "../assets/Mukhtar Abdul Kadar.jpg";

function PurposeCard({ title, children }) {
  return (
    <div className="w-full">
      <div
        className="h-full p-6 md:p-8 rounded-2xl shadow-lg flex flex-col"
        style={{
          background: "linear-gradient(90deg, #21428B 0%, #218A8B 100%)",

          boxShadow:
            "0 10px 30px rgba(2,6,23,0.4), inset 0 -6px 12px rgba(0,0,0,0.35)",
        }}
      >
        <h3 className="text-white text-lg md:text-xl font-semibold mb-4 flex items-center gap-3">
          <span style={{ transform: "translateY(1px)" }}>🎯</span>
          {title}
        </h3>

        <p className="text-white/90 text-sm md:text-base leading-6">
          {children}
        </p>
      </div>
    </div>
  );
}

function WhyChooseCard({ title, desc }) {
  return (
    <div className="w-full">
      <div
        className="relative rounded-2xl p-6 min-h-[180px] shadow-[0_10px_25px_rgba(2,6,23,0.15)] transition-transform duration-300 hover:-translate-y-1"
        style={{
          background: "linear-gradient(90deg, #21428B 0%, #218A8B 100%)",

          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h4 className="text-white text-lg font-semibold mb-3">{title}</h4>
        <p className="text-white/70 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  const whyItems = [
    {
      title: "30+ years of experience",
      desc: "30+ Years of Expertise in Trade and Sourcing Delivering Quality Merchandise to Global Markets.",
    },
    {
      title: "Pan-India Supplier Network",
      desc: "Seamlessly Connected, Nationwide. Our Pan India Supplier Network Ensures Reliable, Scalable Sourcing Across Every State.",
    },
    {
      title: "Compliance Focused",
      desc: "Strictly Aligned with Global Standards Ensuring Ethical, Transparent, and Compliant Trade.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Your Goals, Our Priority — Tailored Export Solutions Built Around You.",
    },
    {
      title: "Proven Export Expertise",
      desc: "Decades of Reliable Export Performance Delivering Quality Goods to Global Markets with Confidence.",
    },
    {
      title: "Transparent Ethical",
      desc: "Honest Practices. Clear Processes. Integrity at the Core of Every Export Deal.",
    },
  ];

  const leaders = [
    {
      img: avatar1,
      name: "Mr. Reza Mohammed Jabir",
      title: "Managing Partner",

      linkedin:
        "https://www.linkedin.com/in/reza-mohammed-b346b3309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // <-- replace with real URL if different
    },
    {
      img: avatar2,
      name: "Mr. Fahad Abdulla",
      title: "Managing Partner",

      linkedin: "https://www.linkedin.com/in/fahad-abdulla-76b753250/",
    },
    {
      img: avatar3,
      name: "Mr. Mukhtar Abdul Kadar",
      title: "Managing Partner",

      linkedin:
        "https://www.linkedin.com/in/mukhtar-abdul-kadar-541503223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // <-- replace with real URL if different
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="overflow-hidden rounded-5 mb-6 shadow-lg">
          <img
            src={bannerImg}
            alt="Aleef Global Services"
            className="
              w-100 
              object-cover
              grayscale
              hover:grayscale-0
              brightness-90
              hover:brightness-105
              transition-all
              duration-700
              ease-in-out
              hover:scale-[1.02]
            "
            style={{ height: "420px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <section className="mt-12 mb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            About Aleef Global
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold mb-5">Our Journey</h2>

          <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-700 max-w-2xl mx-auto">
            Founded in 1995, Aleef Group began its journey in Kerala, India,
            with a vision to bridge the gap between local excellence and global
            demand. Starting with a modest export of high-quality marbles, the
            company gradually diversified into multi-commodity trading, emerging
            as a trusted global sourcing partner for food products, construction
            materials, FMCG goods, and more. Today, Aleef Global stands as a
            symbol of reliability, integrity, and international trade
            excellence.
          </p>
        </div>
      </section>

      <Stats />

      <section className="max-w-6xl mx-auto px-6 pb-12 mt-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Purpose</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <PurposeCard title="Our Mission">
            To deliver quality-assured products across industries and borders by
            building ethical, efficient, and long-term partnerships.
          </PurposeCard>

          <PurposeCard title="Our Vision">
            To be one of the most respected and diversified global trading
            companies, connecting Indian craftsmanship and commodities with the
            world.
          </PurposeCard>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-10 mb-14">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Why Choose Aleef Global
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyItems.map((it, idx) => (
            <WhyChooseCard key={idx} title={it.title} desc={it.desc} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Trusted voices and proven partnerships — our leadership brings
            decades of experience to operations and client success.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={reduceMotion ? {} : "hidden"}
          animate={reduceMotion ? {} : "show"}
          variants={container}
        >
          {leaders.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col"
              variants={fadeUp}
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.title}</div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 flex-1">{t.text}</p>

              <div className="mt-4">
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-700 hover:underline"
                >
                  View LinkedIn profile
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
