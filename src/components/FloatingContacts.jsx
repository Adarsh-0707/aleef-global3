import React from "react";

export default function FloatingContacts() {
  const whatsappHref =
    "https://api.whatsapp.com/send?phone=919846545949&text=Hello%20Aleef%20Global%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
  const emailHref =
    "mailto:info@aleefglobal.com?subject=Inquiry%20from%20Website&body=Hello%20Aleef%20Global%20Team,";

  return (
    <div
      className="fixed right-5 bottom-5 z-50 flex flex-col gap-3 items-center"
      aria-hidden={false}
    >
      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:scale-105 transform-gpu transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] text-white"
        aria-label="Chat on WhatsApp"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.15 1.6 5.95L0 24l6.23-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.37l-.36-.21-3.68.96.98-3.59-.23-.38A9.95 9.95 0 012 12C2 6.49 6.49 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.96 9.96 0 0122 12c0 5.51-4.49 10-10 10zm5.14-7.69c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14s-.74.9-.9 1.09c-.16.18-.33.2-.61.07a8.07 8.07 0 01-2.37-1.46 9.1 9.1 0 01-1.68-2.08c-.18-.31 0-.47.13-.61.13-.13.31-.33.46-.5.15-.18.2-.3.3-.49.1-.2.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.18 0-.47.07-.72.33-.25.25-.95.9-.95 2.19s.97 2.55 1.1 2.72c.14.18 1.9 2.89 4.6 4.05.64.28 1.14.44 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.65-.67 1.89-1.32.23-.66.23-1.22.16-1.33-.07-.11-.26-.17-.55-.31z" />
        </svg>
      </a>

      {/* Email */}
      <a
        href={emailHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-blue-600 hover:scale-105 transform-gpu transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 text-white"
        aria-label="Send email"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>
    </div>
  );
}
