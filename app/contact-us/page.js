import Image from "next/image";
import { MailIcon, GlobeIcon, MapPinIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Contact Us | Zorielle Hospitality",
  description:
    "Let's Create Something Exceptional. Connect with Zorielle Hospitality for hotel development, management partnerships, and investment opportunities.",
};

export default function ContactPage() {
  const collaborationAreas = [
    "Hotel & Resort Development",
    "Hospitality Management Partnerships",
    "Branded Serviced Residences",
    "Wellness & Destination Resorts",
    "Strategic Investments",
    "Hospitality Consulting",
  ];

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div
          className="page-header-bg"
          style={{ backgroundImage: "url('/assets/slide1.jpg')" }}
        />
        <div className="page-header-overlay" />
        <div className="page-header-content reveal-up">
          <span className="hero-subtitle-tag">Get In Touch</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Let&apos;s Create Something Exceptional.
          </h1>
          <p className="hero-tagline" style={{ maxWidth: "720px", margin: "0 auto" }}>
            Your Vision. Our Hospitality Expertise. A Shared Future.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-lux">
          {/* Section Heading & Narrative */}
          <div className="reveal-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto" }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                display: "block",
                marginBottom: "0.8rem",
              }}
            >
              Let&apos;s Talk Business
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                marginBottom: "1.2rem",
                color: "var(--color-black)",
              }}
            >
              We welcome enquiries from property owners, developers &amp; investors.
            </h2>
            <div className="lux-divider lux-divider-center" />
            <p
              style={{
                color: "var(--color-warm-grey)",
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginTop: "1.2rem",
              }}
            >
              At Zorielle Hospitality, we believe that great partnerships create extraordinary opportunities. Whether you are a developer planning a hospitality project, a property owner looking for a professional management partner, an investor exploring hospitality opportunities, or a traveller seeking your next memorable stay, we would love to connect.
            </p>
          </div>

          {/* Contact Information Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "stretch",
            }}
          >
            {/* Direct Info Card (Dark Luxury Card) */}
            <div
              className="lux-card reveal-up"
              style={{
                background: "var(--color-black)",
                color: "var(--color-ivory)",
                borderRadius: "12px",
                padding: "3rem 2.5rem",
                border: "1px solid rgba(194, 162, 108, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Headquarters &amp; Global Operations
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.75rem", marginBottom: "0.4rem", color: "var(--color-ivory)" }}>
                  ZORIELLE HOSPITALITY
                </h3>
                <div style={{ color: "var(--color-warm-grey-light)", fontSize: "0.92rem", marginBottom: "2.2rem" }}>
                  Hospitality Management &amp; Development
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {/* Email */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.2rem",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(194, 162, 108, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(194, 162, 108, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MailIcon size={16} className="text-gold" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                        Email Address
                      </div>
                      <a
                        href="mailto:info@zoriellehotels.com"
                        style={{ color: "var(--color-ivory)", fontSize: "0.98rem", fontWeight: 500 }}
                      >
                        info@zoriellehotels.com
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.2rem",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(194, 162, 108, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <GlobeIcon size={16} className="text-gold" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-warm-grey-light)" }}>
                        Website
                      </div>
                      <span style={{ color: "var(--color-ivory)", fontSize: "0.98rem", fontWeight: 500 }}>
                        www.zoriellehotels.com
                      </span>
                    </div>
                  </div>

                  {/* Presence */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.2rem",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "rgba(194, 162, 108, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPinIcon size={16} className="text-gold" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-warm-grey-light)" }}>
                        Geographic Presence
                      </div>
                      <span style={{ color: "var(--color-ivory)", fontSize: "0.98rem", fontWeight: 500 }}>
                        India | International Markets
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "2.2rem" }}>
                <a
                  href="mailto:info@zoriellehotels.com"
                  className="btn-gold"
                  style={{ width: "100%" }}
                >
                  <span>Email Directly</span>
                  <ArrowRightIcon size={13} />
                </a>
              </div>
            </div>

            {/* Key Areas of Collaboration Card */}
            <div
              className="lux-card reveal-up"
              style={{
                borderRadius: "12px",
                padding: "3rem 2.5rem",
                borderTop: "3px solid var(--color-gold)",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-gold-dark)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Business Enquiries
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.75rem", marginBottom: "0.8rem", color: "var(--color-black)" }}
                >
                  Key Areas of Collaboration
                </h3>
                <p
                  style={{
                    color: "var(--color-warm-grey)",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    marginBottom: "2rem",
                  }}
                >
                  We invite discussions across the full spectrum of hospitality assets, from greenfield hotel development to management conversions and lifestyle retreats.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.85rem" }}>
                  {collaborationAreas.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.85rem",
                        padding: "0.85rem 1.1rem",
                        borderRadius: "8px",
                        backgroundColor: "var(--color-ivory)",
                        border: "1px solid rgba(122, 117, 109, 0.12)",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-gold)",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 500,
                          color: "var(--color-black)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "2.2rem" }}>
                <a
                  href="https://wa.me/917379437901?text=Hello%20Zorielle%20Hospitality%2C%20I%20would%20like%20to%20enquire%20about%20a%20business%20partnership."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark"
                  style={{ width: "100%" }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRightIcon size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map at the end (as requested in content.txt) */}
      <section style={{ backgroundColor: "#ffffff", padding: "0 0 5rem 0" }}>
        <div className="container-lux">
          <div className="reveal-up" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                display: "block",
                marginBottom: "0.6rem",
              }}
            >
              Presence
            </span>
            <h3
              className="font-serif"
              style={{ fontSize: "1.8rem", color: "var(--color-black)" }}
            >
              India | International Markets
            </h3>
          </div>

          <div
            className="reveal-up"
            style={{
              position: "relative",
              width: "100%",
              height: "420px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(0,0,0,0.08)",
              border: "1px solid rgba(122, 117, 109, 0.15)",
            }}
          >
            <iframe
              title="Zorielle Hospitality Geographic Presence"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.784352157!2d73.7276105!3d20.7503013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
