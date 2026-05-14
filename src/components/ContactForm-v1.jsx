import "../styles/ContactForm-v1.css";
import { useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone  = (phone)  => /^\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(phone);

const EMPTY_DATA   = { name: "", email: "", phone: "", referrer: "", message: "" };
const EMPTY_ERRORS = { name: "", email: "", phone: "", referrer: "", message: "" };

export default function ContactForm() {
    const [formData,   setFormData]   = useState(EMPTY_DATA);
    const [formErrors, setFormErrors] = useState(EMPTY_ERRORS);
    const [status,     setStatus]     = useState("idle"); // idle | loading | success | error

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim())               errors.name     = "Name is required";
        if (!formData.email.trim())              errors.email    = "Email is required";
        else if (!isValidEmail(formData.email))  errors.email    = "Please enter a valid email";
        if (!formData.phone.trim())              errors.phone    = "Phone number is required";
        else if (!isValidPhone(formData.phone))  errors.phone    = "Please enter a valid phone number (e.g. 208-555-0100)";
        if (!formData.referrer.trim())           errors.referrer = "Please select an option";
        if (!formData.message.trim())            errors.message  = "Message is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear field error as the user starts editing
        if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: "" }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;

        if (!FORMSPREE_ENDPOINT) {
            console.error("Missing Formspree endpoint env var");
            setStatus("error");
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method:  "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body:    JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Non-OK response");
            setStatus("success");
            setFormData(EMPTY_DATA);
            setFormErrors(EMPTY_ERRORS);
        } catch (err) {
            console.error("Form error:", err);
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="cf-success">
                <span className="cf-success__icon" aria-hidden="true">✓</span>
                <p className="cf-success__heading">Message sent!</p>
                <p className="cf-success__sub">
                    Thanks for reaching out — I'll get back to you shortly.
                </p>
                <button className="btn btn-primary" onClick={() => setStatus("idle")}>
                    Send another
                </button>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {/* Row 1 — Name + Email */}
            <div className="cf-row">
                <div className={`form-group${formErrors.name ? " form-group--error" : ""}`}>
                    <label htmlFor="cf-name">Full Name</label>
                    <input
                        type="text"
                        id="cf-name"
                        name="name"
                        placeholder="Marco Ramos"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-describedby={formErrors.name ? "cf-name-err" : undefined}
                    />
                    {formErrors.name && (
                        <span className="error-message" id="cf-name-err" role="alert">
                            {formErrors.name}
                        </span>
                    )}
                </div>

                <div className={`form-group${formErrors.email ? " form-group--error" : ""}`}>
                    <label htmlFor="cf-email">Email</label>
                    <input
                        type="email"
                        id="cf-email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        aria-describedby={formErrors.email ? "cf-email-err" : undefined}
                    />
                    {formErrors.email && (
                        <span className="error-message" id="cf-email-err" role="alert">
                            {formErrors.email}
                        </span>
                    )}
                </div>
            </div>

            {/* Row 2 — Phone + Referrer */}
            <div className="cf-row">
                <div className={`form-group${formErrors.phone ? " form-group--error" : ""}`}>
                    <label htmlFor="cf-phone">Phone</label>
                    <input
                        type="tel"
                        id="cf-phone"
                        name="phone"
                        placeholder="208-555-0100"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        aria-describedby={formErrors.phone ? "cf-phone-err" : undefined}
                    />
                    {formErrors.phone && (
                        <span className="error-message" id="cf-phone-err" role="alert">
                            {formErrors.phone}
                        </span>
                    )}
                </div>

                <div className={`form-group${formErrors.referrer ? " form-group--error" : ""}`}>
                    <label htmlFor="cf-referrer">How did you hear about me?</label>
                    <select
                        id="cf-referrer"
                        name="referrer"
                        value={formData.referrer}
                        onChange={handleChange}
                        aria-describedby={formErrors.referrer ? "cf-referrer-err" : undefined}
                    >
                        <option value="" disabled>Select one</option>
                        <option value="social media">Social media</option>
                        <option value="family">Family</option>
                        <option value="friend">Friend</option>
                        <option value="other">Other</option>
                    </select>
                    {formErrors.referrer && (
                        <span className="error-message" id="cf-referrer-err" role="alert">
                            {formErrors.referrer}
                        </span>
                    )}
                </div>
            </div>

            {/* Row 3 — Message */}
            <div className={`form-group${formErrors.message ? " form-group--error" : ""}`}>
                <label htmlFor="cf-message">Message</label>
                <textarea
                    id="cf-message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-describedby={formErrors.message ? "cf-message-err" : undefined}
                />
                {formErrors.message && (
                    <span className="error-message" id="cf-message-err" role="alert">
                        {formErrors.message}
                    </span>
                )}
            </div>

            {status === "error" && (
                <p className="cf-submit-error" role="alert">
                    Something went wrong. Please try again.
                </p>
            )}

            <button
                type="submit"
                className="btn btn-primary cf-submit"
                disabled={status === "loading"}
            >
                {status === "loading" ? "Sending…" : "Send Message"}
            </button>
            <p className="form-note">
                Note: This contact form is powered by Formspree, a secure third-party service that delivers your message directly to my inbox.
            </p>
        </form>
    );
}
