# Sage Craft - SEO Content Strategy & Implementation Plan

This document provides comprehensive SEO content for the Sage Craft website. It includes metadata, keywords, and structural recommendations to improve search visibility and user engagement.

---

## 1. Global SEO Settings
**Brand Name:** Sage Craft
**Default Title Template:** `[Page Name] | Sage Craft – Creative Digital Agency`
**Primary Keywords:** Creative Agency, Digital Product Design, UI/UX Agency, Web Development, Branding Agency, Scalable Digital Solutions.

---

## 2. Page-Specific SEO Content

### 🏠 Home Page
*   **Title:** Sage Craft | Scalable Digital Solutions for Growing Businesses
*   **Meta Description:** Sage Craft is a premier digital design & development agency. We craft passionate digital experiences, from branding and UI/UX to scalable web solutions that drive growth.
*   **Focus Keywords:** creative digital agency, UI/UX design agency, digital product development, scalable business solutions.
*   **OG Title:** Sage Craft – Designing the Future of Digital Experiences
*   **OG Description:** We help businesses scale with high-quality design and development. Explore our portfolio of successful projects across 120+ countries.
*   **Image Alt Text (Hero):** Scalable digital solutions for growing businesses - Sage Craft Hero Section

---

### ℹ️ About Us
*   **Title:** About Sage Craft | Our Story, Mission & Creative Team
*   **Meta Description:** Since 2012, Sage Craft has been at the forefront of digital innovation. Learn about our mission to deliver quality work and our passion for digital products.
*   **Focus Keywords:** about Sage Craft, digital agency story, creative design team, branding experts.
*   **OG Title:** The Story Behind Sage Craft – Passionate Digital Creators
*   **OG Description:** Meet the team behind Sage Craft. Discover how we’ve helped businesses worldwide with our dedicated approach to design and development.

---

### 🛠️ Services (Main Page)
*   **Title:** Our Services | Digital Product Design, Branding & Web Development
*   **Meta Description:** Explore our wide range of services including UI/UX design, branding, web development, and custom digital solutions tailored for your business needs.
*   **Focus Keywords:** digital marketing services, branding and identity design, custom web development, UI/UX strategy.
*   **OG Title:** Comprehensive Digital Services by Sage Craft
*   **OG Description:** From concept to execution, our services are designed to help your business thrive in the digital landscape.

#### *Service Details (Dynamic)*
*   **Title Template:** `[Service Name] Services | Sage Craft`
*   **Meta Description Template:** Professional `[Service Name]` services by Sage Craft. We provide expert solutions in `[Service Name]` to help your business achieve its digital goals.

---

### 💼 Portfolio
*   **Title:** Our Portfolio | Featured Projects & Success Stories
*   **Meta Description:** Browse Sage Craft’s latest work. See how we’ve delivered high-quality digital solutions, branding, and UI/UX designs for clients globally.
*   **Focus Keywords:** creative portfolio, web design case studies, branding projects, digital design showcase.
*   **OG Title:** Sage Craft Work Showcase – Digital Excellence
*   **OG Description:** A collection of our most impactful digital products and design projects. Quality work that speaks for itself.

#### *Portfolio Details (Dynamic)*
*   **Title Template:** `[Project Name] | Case Study – Sage Craft`
*   **Meta Description Template:** Explore the `[Project Name]` case study. Discover how Sage Craft implemented `[Key Service]` to deliver exceptional results for our client.

---

### 📞 Contact Us
*   **Title:** Contact Sage Craft | Let’s Start Your Digital Journey
*   **Meta Description:** Ready to scale your business? Contact Sage Craft today for a consultation on your next digital project. We’re here to help you succeed.
*   **Focus Keywords:** contact digital agency, hire creative agency, web development consultation, UI/UX design inquiry.
*   **OG Title:** Get in Touch with Sage Craft
*   **OG Description:** Have a project in mind? Let’s talk about how Sage Craft can help you build something amazing.

---

## 3. Targeted Keyword List

### Primary Keywords (High Volume)
- Creative Agency
- Digital Product Design
- UI/UX Design Agency
- Web Development Company
- Branding Agency

### Secondary Keywords (Mid-Tail)
- Scalable digital solutions
- Custom software development
- User experience strategy
- Corporate identity design
- Performance-driven web design

### Long-Tail Keywords (High Intent)
- Digital agency for growing businesses
- Hire UI/UX designers for startups
- Professional branding services for tech companies
- Scalable web development for e-commerce
- Best creative agency for digital products

---

## 4. Technical SEO Recommendations

### 🖼️ Image SEO (Alt Text Strategy)
- **Logos:** `Sage Craft - Creative Agency Logo`
- **Portfolio Items:** `[Project Name] - [Type of Work] Showcase by Sage Craft`
- **Team Photos:** `[Team Member Name] - [Position] at Sage Craft`
- **Shapes/Decorations:** (Use empty alt `alt=""` or descriptive like `Abstract background shape for creative design section`)

### 🏗️ Structured Data (Schema.org)
Implement the following JSON-LD schemas:
1.  **Organization Schema:** On Home and About pages.
2.  **Website Schema:** Including Search Action.
3.  **Service Schema:** On each service detail page.
4.  **CaseStudy Schema:** On portfolio detail pages.
5.  **BreadcrumbList Schema:** On all internal pages.

### ⚡ Performance & Core Web Vitals
- Ensure all images are in `.webp` or `.avif` format.
- Use `next/image` for automatic optimization.
- Implement lazy loading for off-screen images and components.

---

## 5. Content Implementation Guidelines
- **H1 Tags:** Ensure every page has exactly one `<h1>` containing the primary focus keyword.
- **Internal Linking:** Link from Service pages to relevant Portfolio items and vice versa.
- **Mobile First:** Ensure all SEO elements are readable and properly scaled on mobile devices.
- **Canonical URLs:** Always use absolute URLs for canonical tags to avoid duplicate content issues.

---

## 6. JSON Data Format (For API/CMS Integration)

If you are using a database or CMS to store your SEO data, here is the structured content for each page:

```json
{
  "home": {
    "title": "Sage Craft | Scalable Digital Solutions for Growing Businesses",
    "description": "Sage Craft is a premier digital design & development agency. We craft passionate digital experiences, from branding and UI/UX to scalable web solutions.",
    "keywords": ["creative digital agency", "UI/UX design agency", "digital product development", "scalable business solutions"],
    "ogImage": "/assets/imgs/og/home.png",
    "canonicalUrl": "https://sagecrafts.in",
    "robots": { "index": true, "follow": true }
  },
  "about": {
    "title": "About Sage Craft | Our Story, Mission & Creative Team",
    "description": "Since 2012, Sage Craft has been at the forefront of digital innovation. Learn about our mission to deliver quality work and our passion for digital products.",
    "keywords": ["about Sage Craft", "digital agency story", "creative design team", "branding experts"],
    "ogImage": "/assets/imgs/og/about.png",
    "canonicalUrl": "https://sagecrafts.in/about",
    "robots": { "index": true, "follow": true }
  },
  "services": {
    "title": "Our Services | Digital Product Design, Branding & Web Development",
    "description": "Explore our wide range of services including UI/UX design, branding, web development, and custom digital solutions tailored for your business needs.",
    "keywords": ["digital marketing services", "branding and identity design", "custom web development", "UI/UX strategy"],
    "ogImage": "/assets/imgs/og/services.png",
    "canonicalUrl": "https://sagecrafts.in/services",
    "robots": { "index": true, "follow": true }
  },
  "portfolio": {
    "title": "Our Portfolio | Featured Projects & Success Stories",
    "description": "Browse Sage Craft’s latest work. See how we’ve delivered high-quality digital solutions, branding, and UI/UX designs for clients globally.",
    "keywords": ["creative portfolio", "web design case studies", "branding projects", "digital design showcase"],
    "ogImage": "/assets/imgs/og/portfolio.png",
    "canonicalUrl": "https://sagecrafts.in/portfolio",
    "robots": { "index": true, "follow": true }
  },
  "contact": {
    "title": "Contact Sage Craft | Let’s Start Your Digital Journey",
    "description": "Ready to scale your business? Contact Sage Craft today for a consultation on your next digital project. We’re here to help you succeed.",
    "keywords": ["contact digital agency", "hire creative agency", "web development consultation", "UI/UX design inquiry"],
    "ogImage": "/assets/imgs/og/contact.png",
    "canonicalUrl": "https://sagecrafts.in/contact",
    "robots": { "index": true, "follow": true }
  }
}
```
