import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const FIXED_RECIPIENT = "aleefglobal24@gmail.com";

const COUNTRY_LIST = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

export default function ServiceInquiry() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw1b6biq0LznXGi2I9SIoSSawZc11xA7dq__ud7pR8gJadVLRgl77WyX-nlH-Moeru0ow/exec";

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialService = params.get("product") || params.get("service") || "";
  const imageParam = params.get("img") || "";
  const countryParam = params.get("country") || "";

  const [form, setForm] = useState({
    name: "",
    clientEmail: "",
    recipientEmail: FIXED_RECIPIENT,
    company: "",
    country: countryParam || "",
    phone: "",
    requirements: "",
    message: "",
    service: initialService,
    imageUrl: imageParam,
    nearestPort: "",
    squareFeet: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const tsRef = useRef(null);
  const formRef = useRef(null);

  const [filtered, setFiltered] = useState(COUNTRY_LIST.slice(0, 30));
  const [showSuggestions, setShowSuggestions] = useState(false);
  const countryWrapperRef = useRef(null);

  useEffect(() => {
    setForm((f) => ({
      ...f,
      service: params.get("product") || params.get("service") || "",
      imageUrl: params.get("img") || "",
      recipientEmail: FIXED_RECIPIENT,
      country: params.get("country") || f.country || "",
    }));
  }, [location.search]);

  useEffect(() => {
    function onDoc(e) {
      if (
        countryWrapperRef.current &&
        !countryWrapperRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    const q = (form.country || "").trim();
    if (!q) {
      setFiltered(COUNTRY_LIST.slice(0, 30));
      return;
    }
    const matches = COUNTRY_LIST.filter((c) =>
      c.toLowerCase().includes(q.toLowerCase())
    );
    setFiltered(matches);
  }, [form.country]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.clientEmail.trim()) return "Please enter your email.";
    if (!/\S+@\S+\.\S+/.test(form.clientEmail))
      return "Please enter a valid email.";
    if (!form.service.trim()) return "Please select a service.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }
    setStatus(null);
    setLoading(true);
    const nowIso = new Date().toISOString();
    if (tsRef.current) tsRef.current.value = nowIso;

    try {
      const formEl = formRef.current;
      const fd = new FormData(formEl);

      fd.set("formType", "services");
      fd.set("timestamp", nowIso);
      fd.set("name", form.name || "");
      fd.set("clientEmail", form.clientEmail || "");
      fd.set("recipientEmail", form.recipientEmail || FIXED_RECIPIENT);
      fd.set("company", form.company || "");
      fd.set("country", form.country || "");
      fd.set("phone", form.phone || "");
      fd.set("requirements", form.requirements || "");
      fd.set("message", form.message || "");
      fd.set("service", form.service || "");
      fd.set("imageUrl", form.imageUrl || "");
      fd.set("nearestPort", form.nearestPort || "");
      fd.set("squareFeet", form.squareFeet || "");

      const resp = await fetch(scriptURL, { method: "POST", body: fd });
      const text = await resp.text();
      let json = null;
      try {
        json = JSON.parse(text);
      } catch (e) {}

      if (resp.ok && (json?.result === "success" || /success/i.test(text))) {
        setStatus({
          type: "success",
          message: "Service inquiry sent — we'll get back to you soon.",
        });
        setForm({
          name: "",
          clientEmail: "",
          recipientEmail: FIXED_RECIPIENT,
          company: "",
          country: "",
          phone: "",
          requirements: "",
          message: "",
          service: "",
          imageUrl: "",
          nearestPort: "",
          squareFeet: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send. Server response: " + (text || resp.status),
        });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleCountryClick = () => {
    const q = (form.country || "").trim();
    if (!q) setFiltered(COUNTRY_LIST.slice(0, 30));
    setShowSuggestions(true);
  };

  const selectCountry = (c) => {
    setForm((s) => ({ ...s, country: c }));
    setShowSuggestions(false);
  };

  const isWarehousing = (form.service || "")
    .toLowerCase()
    .match(/warehous|ware house|warehousing|ware\b/);

  const inputClass =
    "peer w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/25 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition";
  const textareaClass = inputClass + " resize-none";
  const labelBase =
    "absolute left-3 pointer-events-none transition-all duration-200 text-black";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background:
          "linear-gradient(135deg,#1B2735 0%,#2C5364 30%,#0F2027 100%)",
      }}
    >
      <div
        className="w-full max-w-3xl p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20"
        style={{
          background: "rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Service Inquiry
        </h2>

        <p className="text-center text-gray-200 mb-6">
          Send us details about the service you are interested in and we will
          get back to you.
        </p>

        {form.imageUrl && (
          <div className="mb-6 flex justify-center">
            <img
              src={form.imageUrl}
              alt={form.service || "Service"}
              style={{
                maxHeight: 160,
                objectFit: "cover",
                borderRadius: 12,
                border: "2px solid rgba(255,255,255,0.12)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        )}

        {status && (
          <div
            className={`mb-4 p-3 rounded-lg text-center font-medium ${
              status.type === "success"
                ? "bg-green-400/20 text-green-200 border border-green-500/40"
                : "bg-red-400/20 text-red-200 border border-red-500/40"
            }`}
          >
            {status.message}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder=" "
                required
                className={inputClass}
              />
              <label
                className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
              >
                Name *
              </label>
            </div>

            <div className="relative">
              <input
                name="clientEmail"
                type="email"
                value={form.clientEmail}
                onChange={onChange}
                placeholder=" "
                required
                className={inputClass}
              />
              <label
                className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
              >
                Your Email *
              </label>
            </div>
          </div>

          <input
            type="hidden"
            name="recipientEmail"
            value={form.recipientEmail}
          />
          <input type="hidden" name="formType" value="services" />
          <input type="hidden" name="imageUrl" value={form.imageUrl || ""} />
          <input type="hidden" name="timestamp" ref={tsRef} value="" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                name="company"
                value={form.company}
                onChange={onChange}
                placeholder=" "
                className={inputClass}
              />
              <label
                className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
              >
                Company
              </label>
            </div>

            <div className="relative" ref={countryWrapperRef}>
              <input
                name="country"
                value={form.country}
                onChange={(e) => {
                  onChange(e);
                  setShowSuggestions(true);
                }}
                onFocus={handleCountryClick}
                onClick={handleCountryClick}
                placeholder=" "
                autoComplete="off"
                className={inputClass}
              />
              <label
                className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
              >
                Country
              </label>

              {showSuggestions && filtered.length > 0 && (
                <ul
                  className="absolute left-0 right-0 mt-2 max-h-48 overflow-auto rounded-md z-50"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    boxShadow: "0 6px 18px rgba(2,6,23,0.6)",
                  }}
                >
                  {filtered.map((c) => (
                    <li
                      key={c}
                      onMouseDown={(ev) => {
                        ev.preventDefault();
                        selectCountry(c);
                      }}
                      className="px-3 py-2 cursor-pointer text-black hover:bg-white/20"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder=" "
                className={inputClass}
              />
              <label
                className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
              >
                Phone
              </label>
            </div>

            <div className="relative">
              <input
                name="service"
                value={form.service}
                readOnly
                placeholder=" "
                className={`${inputClass} cursor-not-allowed`}
              />
              <label className={`${labelBase} top-3`}></label>
            </div>
          </div>

          {isWarehousing && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  name="nearestPort"
                  value={form.nearestPort}
                  onChange={onChange}
                  placeholder=" "
                  className={inputClass}
                />
                <label
                  className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
                >
                  Nearest Port (e.g. Port of Mumbai)
                </label>
              </div>

              <div className="relative">
                <input
                  name="squareFeet"
                  type="number"
                  value={form.squareFeet}
                  onChange={onChange}
                  placeholder=" "
                  className={inputClass}
                />
                <label
                  className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
                >
                  Square Feet
                </label>
              </div>
            </div>
          )}

          <div className="relative">
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={onChange}
              placeholder=" "
              rows="3"
              className={textareaClass}
            />
            <label
              className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
            >
              Requirements (packaging, schedule, etc.)
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder=" "
              rows="4"
              className={textareaClass}
            />
            <label
              className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
            >
              Additional message
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md font-semibold"
            style={{ background: "linear-gradient(90deg,#00B4DB,#0083B0)" }}
          >
            {loading ? "Sending..." : "Submit Service Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
