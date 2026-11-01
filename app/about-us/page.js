import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "About Us | Zorielle Hospitality",
  description:
    "Building the Future of Hospitality. Learn about Zorielle Hospitality's vision, mission, core values, and philosophy.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Excellence",
      desc: "We pursue the highest standards in every aspect of hospitality, setting new benchmarks in quality and execution.",
    },
    {
      title: "Partnership",
      desc: "We build long-term relationships founded on trust, transparency, and shared commercial success.",
    },
    {
      title: "Innovation",
      desc: "We embrace new ideas, progressive technologies, and forward-thinking hospitality concepts.",
    },
    {
      title: "Guest Centricity",
      desc: "We place guest satisfaction and curated, personalised experiences at the heart of everything we do.",
    },
    {
      title: "Value Creation",
      desc: "We focus on operational efficiency, sustainable business performance, and long-term asset appreciation.",
    },
  ];

  return (
    <>
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div
          className="page-header-bg"
          style={{ backgroundImage: "url('/assets/slide2.jpg')" }}
        />
        <div className="page-header-overlay" />
        <div className="page-header-content reveal-up">
          <span className="hero-subtitle-tag">About Zorielle</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Building the Future of Hospitality.
          </h1>
          <p className="hero-tagline" style={{ maxWidth: "680px", margin: "0 auto" }}>
            Where Vision Meets Hospitality across India & International Markets.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-lux">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div className="reveal-up">
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Who We Are
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  marginBottom: "1.5rem",
                  color: "var(--color-black)",
                }}
              >
                Creating destinations where experiences become memories.
              </h2>
              <div className="lux-divider" />
              <p
                style={{
                  color: "var(--color-warm-grey)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "1.2rem",
                }}
              >
                Zorielle Hospitality is a hospitality management and development company focused on creating and operating distinctive hospitality businesses across India and international markets.
              </p>
              <p
                style={{
                  color: "var(--color-warm-grey)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "1.2rem",
                }}
              >
                We bring together hospitality expertise, real estate understanding, strategic planning, and operational capabilities to create destinations that deliver exceptional guest experiences and sustainable commercial performance.
              </p>
              <p
                style={{
                  color: "var(--color-warm-grey)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                We believe hospitality is not just about accommodation. It is about creating environments where people feel welcomed, experiences become memories, and properties become successful businesses. Our business philosophy is built on understanding the unique potential of every asset and developing a hospitality strategy that maximises its value.
              </p>
            </div>

            <div className="reveal-up" style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "460px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src="/assets/about1.png"
                  alt="Zorielle Hospitality Experience"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  left: "-25px",
                  background: "var(--color-black)",
                  color: "var(--color-ivory)",
                  padding: "1.5rem 2rem",
                  borderRadius: "8px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                  borderLeft: "3px solid var(--color-gold)",
                  maxWidth: "280px",
                }}
              >
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                  Our Standard
                </div>
                <div className="font-serif" style={{ fontSize: "1.2rem", marginTop: "0.4rem" }}>
                  Uncompromising Commitment to Hospitality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "#ffffff" }}>
        <div className="container-lux">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* Vision */}
            <div
              className="lux-card reveal-up"
              style={{
                background: "var(--color-black)",
                color: "var(--color-ivory)",
                padding: "3.5rem 2.8rem",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, var(--color-gold-glow), transparent 70%)",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Future Horizon
              </span>
              <h3
                className="font-serif"
                style={{
                  fontSize: "2rem",
                  fontWeight: 400,
                  marginBottom: "1.2rem",
                  color: "var(--color-ivory)",
                }}
              >
                Our Vision
              </h3>
              <div className="lux-divider" />
              <p
                style={{
                  color: "var(--color-warm-grey-light)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                To establish Zorielle Hospitality as a recognised international hospitality group, known for distinctive brands, exceptional service, innovative development and operational excellence.
              </p>
            </div>

            {/* Mission */}
            <div
              className="lux-card reveal-up"
              style={{
                background: "var(--color-ivory-warm)",
                padding: "3.5rem 2.8rem",
                borderRadius: "10px",
                borderTop: "3px solid var(--color-gold)",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-warm-grey)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Purpose & Commitment
              </span>
              <h3
                className="font-serif"
                style={{
                  fontSize: "2rem",
                  fontWeight: 400,
                  marginBottom: "1.2rem",
                  color: "var(--color-black)",
                }}
              >
                Our Mission
              </h3>
              <div className="lux-divider" />
              <p
                style={{
                  color: "var(--color-warm-grey)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                To create world-class hospitality experiences while delivering measurable value to property owners, developers, investors and business partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-lux">
          <div className="reveal-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              Guiding Principles
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--color-black)",
              }}
            >
              Our Core Values
            </h2>
            <div className="lux-divider lux-divider-center" />
          </div>

          <div className="core-values-grid">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="lux-card reveal-up"
                style={{
                  padding: "2.4rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: "2px solid var(--color-gold)",
                }}
              >
                <div
                  className="val-label"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--color-gold)",
                    letterSpacing: "0.15em",
                    marginBottom: "0.8rem",
                  }}
                >
                  VALUE 0{idx + 1}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginBottom: "0.8rem",
                    color: "var(--color-black)",
                  }}
                >
                  {val.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-warm-grey)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase */}
      <section style={{ padding: "2rem 0 6rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-lux">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div className="reveal-up" style={{ height: "320px", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/assets/about2.png"
                alt="Zorielle Quality Standards"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="reveal-up" style={{ height: "320px", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/assets/about3.png"
                alt="Zorielle Architectural Vision"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="reveal-up" style={{ height: "320px", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/assets/slide3.jpg"
                alt="Zorielle Destinations"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        style={{
          padding: "7rem 0",
          backgroundColor: "var(--color-black)",
          color: "var(--color-ivory)",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container-narrow reveal-up">
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Our Philosophy
          </span>
          <blockquote
            className="font-serif"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.45,
              color: "var(--color-ivory)",
              maxWidth: "840px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            &ldquo;Great hospitality begins with a vision, grows through exceptional management and succeeds through unforgettable experiences.&rdquo;
          </blockquote>
          <div className="lux-divider lux-divider-center" />
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/contact-us" className="btn-gold">
              <span>Connect With Us</span>
              <ArrowRightIcon size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

