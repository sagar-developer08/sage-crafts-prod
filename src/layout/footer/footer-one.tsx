"use client";
import Link from "next/link";
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add subscription logic here (e.g., API call)
    alert(`Subscribed with: ${formData.name}, ${formData.email}, ${formData.phone}`);
    setFormData({ name: "", email: "", phone: "" });
  };

  const quickLinks = [
    { title: "Services", link: "/services" },
    { title: "Portfolio", link: "/portfolio" },
  ];

  const companyLinks = [
    { title: "About", link: "/about" },
    { title: "Our Clients", link: "/portfolio" },
    { title: "Testimonials", link: "/contact" },
    { title: "Contact", link: "/contact" },
  ];


  return (
    <footer className="footer-area-new">
      <div className="container large">
        <div className="footer-main-content">
          {/* Left Section - Map */}
          <div className="footer-left-section">
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8777!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e6e6e6e6e6%3A0x6e6e6e6e6e6e6e6e!2sPINNACLE%20BUSINESS%20PARK%2C%20Mahakali%20Caves%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sage Craft Location"
              ></iframe>
            </div>
            <div className="footer-location-text">
              <p>India</p>
              <p>Mumbai</p>
            </div>
          </div>

          {/* Middle Section - Quick Links, Company, Support */}
          <div className="footer-middle-section">
            <div className="footer-widget-box">
              <h2 className="title">Quick Links</h2>
              <ul className="footer-nav-list">
                {quickLinks.map((item) => (
                  <li key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Company</h2>
              <ul className="footer-nav-list">
                {companyLinks.map((item) => (
                  <li key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Support</h2>
              <ul className="footer-contact-list">
                <li>
                  <span className="label">Phone:</span>
                  <a href="tel:+911234567890">+91 123 456 7890</a>
                </li>
                <li>
                  <span className="label">Email:</span>
                  <a href="mailto:info@sagecraft.com">info@sagecraft.com</a>
                </li>
                <li>
                  <span className="label">Location:</span>
                  <span className="address">
                    PINNACLE BUSINESS PARK, Mahakali Caves Rd, next to Ahrua center, Mumbai Andheri East 93
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div className="footer-right-section">
            <div className="footer-newsletter">
              <h2 className="title">Subscribe</h2>
              <p className="newsletter-description">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form onSubmit={handleSubscribe} className="subscribe-form-new">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="subscribe-button">
                  Subscribe
                </button>
              </form>
              <div className="subscription-disclaimer">
                <p className="text">
                  By subscribing you agree to our{" "}
                  <Link href="/contact">Privacy Policy</Link> and provide consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="copyright-area-inner">
          <div className="copyright-text">
            <p className="text">
              © {new Date().getFullYear()}{" "}
              <a href="https://sagecrafts.in">SageCrafts</a>.{" "}
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
