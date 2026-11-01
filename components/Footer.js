import Link from "next/link";
import Image from "next/image";
import { MailIcon, GlobeIcon, MapPinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="lux-footer">
      <div className="container-lux">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link href="/" aria-label="Zorielle Hospitality">
              <Image
                src="/assets/zorielle-logo.png"
                alt="Zorielle Hospitality"
                width={200}
                height={120}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p>
              Dedicated to creating, developing, and managing exceptional hospitality destinations. Bringing together the best of hospitality, real estate, and lifestyle experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/our-brands">Our Brands</Link>
              </li>
              <li>
                <Link href="/our-services">Our Services</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="footer-heading">Our Brands</h4>
            <ul className="footer-links">
              <li>
                <Link href="/our-brands#ease">Zorielle Ease</Link>
              </li>
              <li>
                <Link href="/our-brands#select">Zorielle Select</Link>
              </li>
              <li>
                <Link href="/our-brands#star">Zorielle Star</Link>
              </li>
              <li>
                <Link href="/our-brands#beyond">Wellness & Residences</Link>
              </li>
              <li>
                <Link href="/our-services#partnerships">Partnership Models</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links" style={{ gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <MailIcon size={14} className="text-gold" style={{ marginTop: "4px", flexShrink: 0 }} />
                <a href="mailto:info@zoriellehotels.com" style={{ wordBreak: "break-all" }}>
                  info@zoriellehotels.com
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <GlobeIcon size={14} className="text-gold" style={{ marginTop: "4px", flexShrink: 0 }} />
                <span>www.zoriellehotels.com</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <MapPinIcon size={14} className="text-gold" style={{ marginTop: "4px", flexShrink: 0 }} />
                <span>India | International Markets</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 Zorielle Hospitality. All rights reserved.
          </div>
          <div style={{ letterSpacing: "0.08em", fontSize: "0.8rem", color: "var(--color-warm-grey-light)" }}>
            WHERE VISION MEETS HOSPITALITY
          </div>
        </div>
      </div>
    </footer>
  );
}

