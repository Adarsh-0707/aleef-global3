import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingContacts from "./components/FloatingContacts.jsx";
import Loader from "./components/Loader.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import ProductInquiry from "./pages/ProductInquiry.jsx";
import ServiceInquiry from "./pages/ServiceInquiry.jsx";

export default function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  const [showLoaderComponent, setShowLoaderComponent] = useState(true);

  const hideOn = ["/contact", "/service-inquiry"];

  useEffect(() => {
    const fadeDuration = 700;
    const mainTimer = setTimeout(() => {
      setLoading(false);

      const cleanupTimer = setTimeout(() => {
        setShowLoaderComponent(false);
      }, fadeDuration);

      const cleanup = () => clearTimeout(cleanupTimer);

      window.__loaderCleanup = cleanup;
    }, 3000);

    return () => {
      clearTimeout(mainTimer);
      if (window.__loaderCleanup) {
        window.__loaderCleanup();
        delete window.__loaderCleanup;
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {showLoaderComponent && <Loader visible={loading} />}

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-inquiry" element={<ProductInquiry />} />
          <Route path="/service-inquiry" element={<ServiceInquiry />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />

      {!showLoaderComponent && !hideOn.includes(location.pathname) && (
        <FloatingContacts />
      )}
    </div>
  );
}
