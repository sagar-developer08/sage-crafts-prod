"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { useToast } from "@/components/common/toast-provider";

export default function ContactArea() {
  const { showToast } = useToast();
  const [budget, setBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    solution: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL || "http://localhost:8080/api";
      
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          budget: budget,
          solution: formData.solution,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      // Capture form data before resetting for WhatsApp notification
      const submittedData = { ...formData, budget };

      showToast(
        "success",
        "Thank you for contacting us! We'll get back to you soon."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        solution: "",
        message: "",
      });
      setBudget("");

      // Send WhatsApp notification (backend will handle this, but we can also prepare URL here)
      const whatsappMessage = `New Contact Form Submission:\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}${submittedData.company ? `\nCompany: ${submittedData.company}` : ""}${submittedData.budget ? `\nBudget: ${submittedData.budget}` : ""}${submittedData.solution ? `\nSolution: ${submittedData.solution}` : ""}\nMessage: ${submittedData.message}`;
      const whatsappNumber = "8779742206";
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Log WhatsApp URL (backend will also send notification)
      console.log("WhatsApp notification URL:", whatsappUrl);
      
      // Note: The backend controller will also prepare WhatsApp notification
      // You can optionally open WhatsApp here if needed:
      // window.open(whatsappUrl, '_blank');
    } catch (error: any) {
      console.error("Error submitting form:", error);
      showToast(
        "error",
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "Budget") {
      setBudget(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <section className="contact-area-contact-page" style={{ marginBottom: "80px" }}>
      <div className="container large">
        <div className="contact-area-contact-page-inner section-spacing-top">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Contact</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  Let’s drop us a line and get the project started.
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content-wrapper fade-anim">
            <div className="section-content">
              <div className="contact-mail">
                <p className="title">Get in touch</p>
                <p className="text">
                  We’re excited to hear from you and let’s start something
                  special together <br />
                  <a href="mailTo:hello@sagecraftagency.com">
                    hello@sagecraftagency.com
                  </a>
                </p>
              </div>
              <div className="contact-consultation-gif" style={{ marginTop: "40px" }}>
                <Image 
                  src="/assets/free-consultation.png" 
                  alt="Free Consultation" 
                  width={300}
                  height={300}
                  style={{ 
                    maxWidth: "300px", 
                    width: "100%", 
                    height: "auto",
                    borderRadius: "12px"
                  }}
                />
              </div>
            </div>
            <div className="contact-wrap">
              <form onSubmit={handleSubmit} id="contact__form">
                <div className="contact-formwrap">
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-formfield">
                    <select
                      name="Budget"
                      id="Budget"
                      value={budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Budget*
                      </option>
                      <option value="5,000 - 10,000">5,000 - 10,000</option>
                      <option value="10,000 - 15,000">10,000 - 15,000</option>
                      <option value="15,000 - 20,000">15,000 - 20,000</option>
                      <option value="20,000 - 25,000">20,000 - 25,000</option>
                      <option value="25,000 - Above">25,000 - Above</option>
                    </select>
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="solution"
                      id="solution"
                      placeholder="Solution*"
                      value={formData.solution}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-formfield message">
                    <input
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Message*"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="rr-btn" disabled={loading}>
                    <span className="btn-wrap">
                      <span className="text-one">{loading ? "Sending..." : "Send Message"}</span>
                      <span className="text-two">{loading ? "Sending..." : "Send Message"}</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
