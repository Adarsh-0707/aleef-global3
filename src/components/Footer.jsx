import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/logo3.png";

export default function Footer() {
  // Auto scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="container-xl py-5 py-lg-6 px-3 px-md-4 px-lg-0">
        <div className="row gy-4 gx-4 align-items-start">
          
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column gap-3">

              <div className="d-flex align-items-center">
                <img
                  src={LogoImg}
                  alt="Aleef Global logo"
                  loading="lazy"
                  style={{
                    maxWidth: 220,
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* SOCIAL ICONS */}
              <div className="d-flex align-items-center gap-3 mt-2">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/aleefglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-80 hover:text-white d-inline-flex align-items-center justify-content-center"
                  style={{ width: 36, height: 36 }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="18.2" cy="6" r="0.7" fill="currentColor" />
                  </svg>
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/profile.php?id=61565830531673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-80 hover:text-white d-inline-flex align-items-center justify-content-center"
                  style={{ width: 36, height: 36 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 22v-8h2.5l.5-3H13V9c0-.9.3-1.5 1.6-1.5H16V5.1C15.5 5 14.6 5 13.7 5 11.3 5 9.8 6.3 9.8 8.8V11H7v3h2.8v8h3.2z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/company/aleefglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-80 hover:text-white d-inline-flex align-items-center justify-content-center"
                  style={{ width: 36, height: 36 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.6 4.09 5.5 2.99 5.5 1.9 5.5 1 4.6 1 3.5S1.9 1.5 2.99 1.5C4.09 1.5 4.98 2.4 4.98 3.5zM1.5 8h3V22h-3V8zM8.5 8h2.9v1.9h.04c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v8.8h-3V14c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2h-3V8z"/>
                  </svg>
                </a>
              </div>

              <div className="mt-3 text-white/60 small">
                © {new Date().getFullYear()} Aleefglobal. All rights reserved.
              </div>
            </div>
          </div>

          {/* CENTER QUICK LINKS */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="mb-3 text-white-90">Quick links</h6>
            <ul className="list-unstyled m-0">
              <li className="mb-2"><Link to="/" className="text-white-70 text-decoration-none hover:text-white">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white-70 text-decoration-none hover:text-white">About</Link></li>
              <li className="mb-2"><Link to="/services" className="text-white-70 text-decoration-none hover:text-white">Services</Link></li>
              <li className="mb-2"><Link to="/products" className="text-white-70 text-decoration-none hover:text-white">Products</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white-70 text-decoration-none hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* RIGHT CONTACT */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="mb-3 text-white-90">Contact</h6>

            <address className="not-italic text-white-70 mb-3" style={{ lineHeight: 1.5 }}>
              Mufeeda Complex,<br />
              South Bazar, Kannur, 670002
            </address>

            <div className="mb-2">
              <a
                href="https://api.whatsapp.com/send?phone=919846545949&text=Hello%20Aleef%20Global%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                className="text-white-70 text-decoration-underline hover:text-white d-inline-block"
              >
                (+91) 98465-45949
              </a>
            </div>

            <a
              href="mailto:info@aleefglobal.com?subject=Inquiry%20from%20Website&body=Hello%20Aleef%20Global%20Team,"
              className="text-white-70 text-decoration-underline hover:text-white d-inline-block"
            >
              info@aleefglobal.com
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
