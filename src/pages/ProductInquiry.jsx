import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ProductInquiry() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbylPtsFw8UyYs_rpPSj6hGa5jqn9zd57fnkTa6m6y6YXNqu1I4madWQGmrYyIFJF-st/exec";

  const FIXED_RECIPIENT = "aleefglobal24@gmail.com";
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialProduct = params.get("product") || "";
  const imageParam = params.get("img") || "";

  const [form, setForm] = useState({
    name: "",
    clientEmail: "",
    recipientEmail: FIXED_RECIPIENT,
    company: "",
    country: "",
    quantity: "",
    specifications: "",
    requirements: "",
    message: "",
    product: initialProduct,
    imageUrl: imageParam,
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const tsRef = useRef(null);
  const formRef = useRef(null);

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

  const [filtered, setFiltered] = useState(COUNTRY_LIST.slice(0, 30));
  const [showSuggestions, setShowSuggestions] = useState(false);
  const countryWrapperRef = useRef(null);

  useEffect(() => {
    setForm((f) => ({
      ...f,
      product: params.get("product") || "",
      imageUrl: params.get("img") || "",
      recipientEmail: FIXED_RECIPIENT,
    }));
  }, [location.search]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.clientEmail.trim()) return "Please enter your email.";
    if (!/\S+@\S+\.\S+/.test(form.clientEmail))
      return "Please enter a valid email.";
    if (!form.product.trim()) return "Product is required.";
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

      fd.set("formType", "products");
      fd.set("timestamp", nowIso);
      fd.set("name", form.name || "");
      fd.set("clientEmail", form.clientEmail || "");
      fd.set("recipientEmail", form.recipientEmail || FIXED_RECIPIENT);
      fd.set("company", form.company || "");
      fd.set("country", form.country || "");
      fd.set("quantity", form.quantity || "");
      fd.set("product", form.product || "");
      fd.set("specifications", form.specifications || "");
      fd.set("requirements", form.requirements || "");
      fd.set("message", form.message || "");
      fd.set("imageUrl", form.imageUrl || "");

      const resp = await fetch(scriptURL, { method: "POST", body: fd });
      const text = await resp.text();
      let json = null;
      try {
        json = JSON.parse(text);
      } catch (e) {}

      if (resp.ok && (json?.result === "success" || /success/i.test(text))) {
        setStatus({
          type: "success",
          message: "Product inquiry sent — we'll get back to you soon.",
        });
        setForm({
          name: "",
          clientEmail: "",
          recipientEmail: FIXED_RECIPIENT,
          company: "",
          country: "",
          quantity: "",
          specifications: "",
          requirements: "",
          message: "",
          product: "",
          imageUrl: "",
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

  const handleCountryClick = () => {
    const q = (form.country || "").trim();
    if (!q) setFiltered(COUNTRY_LIST.slice(0, 30));
    setShowSuggestions(true);
  };

  const selectCountry = (c) => {
    setForm((s) => ({ ...s, country: c }));
    setShowSuggestions(false);
  };

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
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Product Inquiry Form
        </h2>
        <p className="text-center text-gray-200 mb-6">
          Fill out the details below to inquire about the selected product.
        </p>

        {form.imageUrl && (
          <div className="mb-6 flex justify-center">
            <img
              src={form.imageUrl}
              alt={form.product || "Product"}
              style={{ maxHeight: 180, objectFit: "cover", borderRadius: 12 }}
            />
          </div>
        )}

        {status && (
          <div
            className={`mb-4 p-3 rounded-lg text-center font-medium ${
              status.type === "success"
                ? "bg-green-400/20 text-green-200"
                : "bg-red-400/20 text-red-200"
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
          <input type="hidden" name="formType" value="products" />
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
                name="quantity"
                value={form.quantity}
                onChange={onChange}
                placeholder=" "
                className={inputClass}
              />
              <label
                className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
              >
                Quantity
              </label>
            </div>

            <div className="relative">
              <input
                name="product"
                value={form.product}
                readOnly
                placeholder=" "
                className={`${inputClass} cursor-not-allowed`}
                aria-readonly="true"
              />
              <label className={`${labelBase} top-3`}></label>
            </div>
          </div>

          <div className="relative">
            <textarea
              name="specifications"
              value={form.specifications}
              onChange={onChange}
              placeholder=" "
              rows="3"
              className={textareaClass}
            />
            <label
              className={`${labelBase} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 top-3`}
            >
              Specifications
            </label>
          </div>

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
              Special Requirements
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
            style={{ background: "linear-gradient(90deg,#00B4DB, #0083B0)" }}
          >
            {loading ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
