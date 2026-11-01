'use client';

import { FloatingPhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  return (
    <aside className="floating-actions" aria-label="Quick Contact Actions">
      {/* Call Button (Shown Above WhatsApp) */}
      <a
        href="tel:+917379437901"
        className="floating-btn floating-btn-call"
        aria-label="Call Zorielle Hospitality"
      >
        <FloatingPhoneIcon size={17} />
        <span className="floating-tooltip">Call Zorielle</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917379437901?text=Hello%20Zorielle%20Hospitality%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={20} />
        <span className="floating-tooltip">WhatsApp Us</span>
      </a>
    </aside>
  );
}
