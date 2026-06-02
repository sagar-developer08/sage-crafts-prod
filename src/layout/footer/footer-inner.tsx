"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/imgs/logo/sagecrafts-logo.png";
import icon from "@/assets/imgs/icon/icon-1.webp";
import { useToast } from "@/components/common/toast-provider";

interface NavItem {
  title: string;
  link: string;
}

const companyLinks: NavItem[] = [
  { title: "agency", link: "#" },
  { title: "Solutions", link: "#" },
  { title: "Community", link: "#" },
  { title: "Work", link: "#" },
  { title: "Contact", link: "#" },
];

const socialLinks: NavItem[] = [
  { title: "Facebook", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "Dribbble", link: "#" },
  { title: "Instagram", link: "#" },
  { title: "Awwwards", link: "#" },
  { title: "YouTube", link: "#" },
];

const officeLinks: NavItem[] = [
  { title: "Mumbai, India", link: "#" },
];

const FooterInner: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      showToast("error", "Please enter your email address.");
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      showToast("success", "Thanks for subscribing! We'll be in touch soon.");
      setEmail("");
    } catch {
      showToast("error", "Subscription failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="footer-area-inner-page section-spacing-top">
      <div className="container large">
        <div className="footer-top-inner">
          <div className="footer-logo">
            <Link href="/">
              <Image
                src={logo}
                alt="SageCrafts"
                style={{ height: "auto", width: "100%" }}
              />
            </Link>
          </div>
          <div className="info-text">
            <div className="text-wrapper">
              <p className="text">
                SageCrafts is a startup digital agency of design, development
                and marketing that works friendly with global client
              </p>
            </div>
            <div className="info-link">
              <a href="mailto:info@sagecrafts.in">info@sagecrafts.in</a>
            </div>
          </div>
        </div>
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">
            <div className="footer-widget-box newsletter">
              <div className="subscribe-form">
                <form className="input-field" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="subscribe-btn"
                    disabled={submitting}
                    aria-label={submitting ? "Subscribing" : "Subscribe"}
                  >
                    <Image src={icon} alt="" />
                  </button>
                </form>
              </div>
              <div className="subscription-text">
                <div className="text-wrapper">
                  <p className="text">
                    By subscribing you agree with our{" "}
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Company</h2>
              <ul className="footer-nav-list">
                {companyLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Social</h2>
              <ul className="footer-nav-list">
                {socialLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-widget-box">
              <h2 className="title">Office</h2>
              <ul className="footer-nav-list">
                {officeLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="copyright-area-inner">
          <div className="copyright-text">
            <p className="text">
              © {new Date().getFullYear()} SageCrafts. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInner;
