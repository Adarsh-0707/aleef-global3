import ContactForm from "../components/contactForm.jsx";

import mapImg from "../assets/map.jpg";

export default function Contact() {
  return (
    <>
      <div className="container section">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div
              className="card-glass p-4 h-100 text-white"
              style={{
                background: "linear-gradient(90deg, #21428B 0%, #218A8B 100%)",
              }}
            >
              <h2 className="section-title mb-3">
                Connecting Borders. Delivering Quality.
              </h2>
              <p className="lead">
                Reach out for quotes, documentation support, or product
                availability.
              </p>

              <div className="small mt-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-lg bg-black/60 p-2 d-flex align-items-center justify-content-center">
                    {/* ✅ WhatsApp icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.15 1.6 5.95L0 24l6.23-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.37l-.36-.21-3.68.96.98-3.59-.23-.38A9.95 9.95 0 012 12C2 6.49 6.49 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.96 9.96 0 0122 12c0 5.51-4.49 10-10 10zm5.14-7.69c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14s-.74.9-.9 1.09c-.16.18-.33.2-.61.07a8.07 8.07 0 01-2.37-1.46 9.1 9.1 0 01-1.68-2.08c-.18-.31 0-.47.13-.61.13-.13.31-.33.46-.5.15-.18.2-.3.3-.49.1-.2.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.18 0-.47.07-.72.33-.25.25-.95.9-.95 2.19s.97 2.55 1.1 2.72c.14.18 1.9 2.89 4.6 4.05.64.28 1.14.44 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.65-.67 1.89-1.32.23-.66.23-1.22.16-1.33-.07-.11-.26-.17-.55-.31z" />
                    </svg>
                  </div>

                  {/* ✅ Fixed WhatsApp link */}
                  <a
                    href="https://api.whatsapp.com/send?phone=919846545949&text=Hello%20Aleef%20Global%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-underline hover:text-white/70"
                  >
                    (+91) 98465-45949
                  </a>
                </div>

                {/* ✉️ Email */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-lg bg-black/60 p-2">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
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

                {/* 📍 Address */}
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-lg bg-black/60 p-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M12 2C8 2 5 5 5 9c0 4.8 7 13 7 13s7-8.2 7-13c0-4-3-7-7-7z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="9" r="2" fill="currentColor" />
                    </svg>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/eoKooaWjUjdNezJV8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Kannur location in Google Maps"
                    className="text-white fw-semibold hover:underline"
                  >
                    Kannur, Kerala, India-670002
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-12 col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="w-full mt-8 mb-10 md:mb-14 lg:mb-20">
        <div className="relative w-full overflow-hidden">
          <img
            src={mapImg}
            alt="Aleef Global Map - Kannur, Kerala"
            className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover grayscale brightness-75"
          />

          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          <div
            className="absolute"
            style={{
              left: "36%",
              top: "36%",
              transform: "translate(-50%,-50%)",
            }}
            aria-hidden
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
                    stroke="#0b1220"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="9" r="2.2" fill="#0b1220" />
                </svg>
              </div>

              <a
                href="https://www.google.com/maps/place/11%C2%B052'44.9%22N+75%C2%B022'33.4%22E/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 text-black rounded-md py-2 px-3 shadow-md text-sm font-medium whitespace-nowrap hover:underline"
                aria-label="Open Kannur location in Google Maps"
              >
                Kannur, Kerala, India-670002
              </a>
            </div>
          </div>
        </div>

        <div className="h-6 md:h-8 lg:h-12" />
      </div>
    </>
  );
}
