import "../styles/contact-form.css"
import { useState } from "react"



export default function ContactForm () {

    const [ formData, setFormData ] = useState ({
            name: "",
            email: "",
            phone: "",
            referrer: "",
            message: "",
        });

    const [ formErrors, setFormErrors] = useState ({
        name: "",
        email: "",
        phone: "",
        referrer: "",
        message: "",
    })

    const validateForm = () => {
    let isValid = true;
    const errors = {};
    // Helpers declared at module scope (only created once)
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(phone);

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
      console.log(errors.email);
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }
    if (!formData.referrer.trim()) {
        errors.referrer = 'Select one option'
        isValid = false;
    }
    if (!formData.message.trim()) {
        errors.message = 'Message is required'
        isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

    function handleChange(e) {
        const { name, value} = e.target;
        setFormData ( prev => ( { ...prev, [name] : value}));  // updates the field with the same key
    }

    
    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    if (!FORMSPREE_ENDPOINT) {
        console.error("Missing Formspree endpoint env var");
        alert("Form endpoint not configured.");
        return;
    }

    try {
        await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
        });
        alert("Thank you!");
        setFormData({ name: "", email: "", phone: "", referrer: "", message: "" });
        setFormErrors({ name: "", email: "", phone: "", referrer: "", message: "" });
    } catch (err) {
        console.error("Form error:", err);
        alert("Something went wrong. Please try again.");
    }
    }


    return (
        <>
            <div className="form-container">
                <h2>Contact Form</h2>
                <p>Please fill out this form with the required information</p>
                <form action="" method="post" className="contact-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="name">Full Name: 
                            <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange} 
                            />
                             {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                        </label>
                        <label htmlFor="email">Email: 
                            <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange} 
                            />
                             {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                        </label>
                        <label htmlFor="phone">Phone: 
                            <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange} 
                            />
                             {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                        </label>
                        <label htmlFor="referrer">How did you hear about me? 
                            <select name="referrer" id="referrer" value={formData.referrer} onChange={handleChange} >
                                <option value="" disabled>Select one</option>
                                <option value="social media">Social media</option>
                                <option value="family">Family </option>
                                <option value="friend">Friend </option>
                                <option value="other">Other</option>
                            </select>
                             {formErrors.referrer && <span className="error-message">{formErrors.referrer}</span>}
                        </label>
                        <label htmlFor="message">Message: 
                            <textarea 
                            type="text" 
                            id="message" 
                            name="message" 
                            rows={"3"} 
                            cols={"30"} 
                            value={formData.message}
                            onChange={handleChange}
                             >
                            </textarea>
                             {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                        </label>
                        <input 
                        type="submit" 
                        value={"submit"} 
                        
                        className="custom-btn"/>
                    </fieldset>
                </form>
            </div>
        </>
    )
}