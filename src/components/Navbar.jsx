import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

// --- Social Icons ---
function IconInsta() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 22v-8h2.5l.5-3H13V9c0-.9.3-1.5 1.6-1.5H16V5.1C15.5 5 14.6 5 13.7 5 11.3 5 9.8 6.3 9.8 8.8V11H7v3h2.8v8h3.2z" />
    </svg>
  );
}

// 🆕 LinkedIn Icon
function IconLinkedIn() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.6 4.09 5.5 2.99 5.5 1.9 5.5 1 4.6 1 3.5S1.9 1.5 2.99 1.5C4.09 1.5 4.98 2.4 4.98 3.5zM1.5 8h3V22h-3V8zM8.5 8h2.9v1.9h.04c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v8.8h-3V14c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2h-3V8z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "px-4 py-2 rounded-full text-sm font-medium transition transform";
  const inactive = "text-black/70 hover:bg-black/5 hover:scale-105";
  const active = "bg-black text-white";

  return (
    <header className="top-3 z-50">
      <div className="">
        {/* Navbar container */}
        <div className="text-black shadow-lg border border-black/10 px-3 py-2 d-flex align-items-center justify-content-between bg-white/90 backdrop-blur-md">
          {/* Logo */}
          <Link
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none text-black fw-semibold ms-1"
            title="Aleef Global - Home"
          >
            <img
              src={logo}
              alt="Aleef Global Logo"
              style={{
                width: 38,
                height: 38,
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
          </Link>

          {/* Mobile toggle */}
          <button
            className="btn btn-sm btn-outline-dark rounded-pill d-md-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>

          {/* Center nav links */}
          <nav className="mx-2 flex-grow-1 d-none d-md-flex justify-content-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* --- Desktop social icons --- */}
          <div className="d-none d-md-flex align-items-center gap-3 me-1">
            <a
              href="https://www.instagram.com/aleefglobal/"
              className="text-black transform transition duration-300 ease-in-out hover:scale-110 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <IconInsta />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61565830531673"
              className="text-black transform transition duration-300 ease-in-out hover:scale-110 hover:text-[#1877F2] focus:outline-none focus:ring-2 focus:ring-[#1877F2]/30 rounded"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <IconFacebook />
            </a>

            {/* 🆕 LinkedIn */}
            <a
              href="https://www.linkedin.com/company/aleef-global"
              className="text-black transform transition duration-300 ease-in-out hover:scale-110 hover:text-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/30 rounded"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>

        {/* --- Mobile dropdown --- */}
        {open && (
          <div className="bg-white text-black mt-2 rounded-3 shadow border border-black/10 p-2 d-md-none transition-transform duration-300 ease-in-out">
            <div className="d-flex flex-column gap-1">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : inactive}`
                }
              >
                Contact Us
              </NavLink>

              {/* Mobile icons */}
              <div className="d-flex align-items-center gap-3 px-2 py-1">
                <a
                  href="https://www.instagram.com/aleefglobal/"
                  className="text-black transform transition duration-300 ease-in-out hover:scale-110 hover:text-pink-500"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <IconInsta />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61565830531673"
                  className="text-black transform transition duration-300 ease-in-out hover:scale-110 hover:text-[#1877F2]"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>

                <a
                  href="https://www.linkedin.com/company/aleefglobal/"
                  className="text-black transform transition duration-300 ease-in-out hover:scale-110 hover:text-[#0A66C2]"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
