// src/components/ContactForm.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    subject: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_hmailn7";
  const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_52ijqmi";
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "nixQA02H4c1NbCkDZ";

  useEffect(() => {
    try {
      if (emailjs && emailjs.init) {
        emailjs.init(PUBLIC_KEY);
        console.log("EmailJS initialized with public key.");
      }
    } catch (err) {
      console.warn("EmailJS init failed:", err);
    }
  }, [PUBLIC_KEY]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function isValidEmail(v) {
    return /\S+@\S+\.\S+/.test(v);
  }

  async function onSubmit(e) {
    e.preventDefault();

    // front-end validation
    if (!form.name.trim()) return alert("Please enter your name.");
    if (!isValidEmail(form.email))
      return alert("Please enter a valid email address.");
    if (!form.subject.trim()) return alert("Please enter a subject.");
    if (!form.message.trim()) return alert("Please enter a message.");

    setLoading(true);

    const templateParams = {
      form_name: form.name,
      company: form.company || "(none)",
      email_id: form.email,
      subject: form.subject,
      message: form.message,
    };

    console.log("EmailJS sending with params:", templateParams);

    try {
      const resp = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      console.log("EmailJS success:", resp);
      alert("✅ Message sent successfully!");
      setForm({ name: "", company: "", subject: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      if (err?.status === 0) {
        alert("Network error. Check your connection or disable adblockers.");
      } else if (err?.status === 401 || err?.status === 403) {
        alert(
          "Auth error — check your EmailJS service/template/public key values."
        );
      } else {
        const txt = err?.text || err?.message || JSON.stringify(err);
        alert("❌ Failed to send message. See console for details. " + txt);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="relative w-full py-8 px-6 rounded-2xl shadow-2xl backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(33,66,139,0.6), rgba(33,138,139,0.5))",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
      }}
    >
      <div className="absolute inset-0 bg-white/5 rounded-2xl pointer-events-none" />

      <form onSubmit={onSubmit} className="relative z-10">
        <h2 className="text-center text-white text-2xl font-bold mb-4 drop-shadow">
          Contact Us
        </h2>
        <p className="text-center text-white/80 mb-6">
          We'd love to hear from you — please fill in the details below.
        </p>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your Name *"
              className="w-100 rounded-md border border-white/30 bg-white/10 placeholder-gray-200 text-white px-3 py-2 focus:ring-2 focus:ring-cyan-300 transition"
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <input
              name="company"
              value={form.company}
              onChange={onChange}
              placeholder="Company Name"
              className="w-100 rounded-md border border-white/30 bg-white/10 placeholder-gray-200 text-white px-3 py-2 focus:ring-2 focus:ring-cyan-300 transition"
            />
          </div>

          <div className="col-12 col-md-6">
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              placeholder="Subject *"
              className="w-100 rounded-md border border-white/30 bg-white/10 placeholder-gray-200 text-white px-3 py-2 focus:ring-2 focus:ring-cyan-300 transition"
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email Address *"
              className="w-100 rounded-md border border-white/30 bg-white/10 placeholder-gray-200 text-white px-3 py-2 focus:ring-2 focus:ring-cyan-300 transition"
              required
            />
          </div>

          <div className="col-12">
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={6}
              placeholder="Your Message *"
              className="w-100 rounded-md border border-white/30 bg-white/10 placeholder-gray-200 text-white px-3 py-2 focus:ring-2 focus:ring-cyan-300 transition"
              required
            />
          </div>

          <div className="col-12 text-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 w-full font-semibold tracking-wide text-white transition-all duration-300 hover:scale-[1.02] shadow-md"
              style={{
                background: "linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)",
                opacity: loading ? 0.8 : 1,
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
