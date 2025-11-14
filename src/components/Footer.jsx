import React from "react";
import { Link } from "react-router-dom"; // <-- added
import LogoImg from "../assets/logo3.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden">
      <div className="container-xl py-5 py-lg-6 px-3 px-md-4 px-lg-0">
        <div className="row gy-4 gx-4 align-items-start">
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

              <p className="mb-0 text-white-50 small" style={{ maxWidth: 420 }}></p>

              <div className="d-flex align-items-center gap-3 mt-2">
                {/* social icons unchanged */}
                ...
              </div>

              <div className="mt-3 text-white/60 small">
                © {new Date().getFullYear()} Aleefglobal. All rights reserved.
              </div>
            </div>
          </div>

          {/* CENTER: quick links (use Link for client-side routing) */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="mb-3 text-white-90">Quick links</h6>
            <ul className="list-unstyled m-0">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white-70 text-decoration-none hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white-70 text-decoration-none hover:text-white"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white-70 text-decoration-none hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/products"
                  className="text-white-70 text-decoration-none hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-white-70 text-decoration-none hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: contact info (keep external anchors) */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="mb-3 text-white-90">Contact</h6>

            <address className="not-italic text-white-70 mb-3" style={{ lineHeight: 1.5 }}>
              Mufeeda Complex,
              <br />
              South Bazar, Kannur, 670002
            </address>

            <div className="mb-2">
              <a
                href="https://api.whatsapp.com/send?phone=919846545949&text=Hello%20Aleef%20Global%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-70 text-decoration-underline hover:text-white d-inline-block"
              >
                (+91) 98465-45949
              </a>
            </div>

            <div>
              <a
                href="mailto:info@aleefglobal.com?subject=Inquiry%20from%20Website&body=Hello%20Aleef%20Global%20Team,"
                className="text-white-70 text-decoration-underline hover:text-white d-inline-block"
              >
                info@aleefglobal.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
