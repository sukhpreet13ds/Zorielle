import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { ArrowRightIcon, GlobeIcon, BuildingIcon, CheckCircleIcon } from "@/components/Icons";

export const metadata = {
  title: "Zorielle Hospitality | Hotel Management & Development",
  description:
    "Zorielle Hospitality specializes in hotel management, luxury hotel development, destination resorts, serviced residences, and wellness retreats.",
};

export default function HomePage() {
  const principles = [
    {
      title: "Exceptional Experiences",
      subtitle: "Memorable stays & meaningful connections",
      description:
        "Creating memorable stays and meaningful guest connections through curated environments, intuitive luxury, and personalised service at every touchpoint.",
      image: "/assets/home11.jpg",
    },
    {
      title: "Operational Excellence",
      subtitle: "Professional management & standards",
      description:
        "Delivering professional hospitality management, rigorous service standards, and operational efficiency that consistently elevates guest satisfaction.",
      image: "/assets/home22.jpg",
    },
    {
      title: "Sustainable Value",
      subtitle: "Commercial success for the long term",
      description:
        "Building commercially successful hospitality assets with high financial yields, enduring asset appreciation, and responsible environmental stewardship.",
      image: "/assets/home33.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section with animated looping slides */}
      <HeroSlider />

      {/* Narrative Intro Section */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-narrow reveal-up" style={{ textAlign: "center" }}>
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
            The Zorielle Vision
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              marginBottom: "1.5rem",
              color: "var(--color-black)",
            }}
          >
            Bringing together the best of hospitality, real estate, and lifestyle experiences.
          </h2>
          <div className="lux-divider lux-divider-center" />
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.8,
              maxWidth: "760px",
              margin: "0 auto 1.5rem auto",
            }}
          >
            We partner with property owners, developers, and investors to transform real estate assets into successful hospitality businesses. From luxury hotels and destination resorts to branded serviced residences and wellness retreats, we combine strategic vision, innovative concepts, and professional management to create experiences that inspire guests and deliver long-term value to our partners.
          </p>
        </div>
      </section>

      {/* Three Principles Section with Images */}
      <section style={{ padding: "5rem 0 6rem 0", backgroundColor: "#ffffff" }}>
        <div className="container-lux">
          <div className="reveal-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
              Our Foundation
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 400,
                color: "var(--color-black)",
              }}
            >
              Our Approach is Driven by Three Principles
            </h2>
            <div className="lux-divider lux-divider-center" />
          </div>

          <div className="foundation-cards-row">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="lux-card reveal-up"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: "none",
                }}
              >
                <div style={{ position: "relative", height: "260px", width: "100%", overflow: "hidden" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1.2rem",
                      color: "var(--color-gold-light)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Principle 0{idx + 1}
                  </span>
                </div>

                <div style={{ padding: "2rem 1.8rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                      color: "var(--color-black)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-gold-dark)",
                      marginBottom: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <p
                    style={{
                      color: "var(--color-warm-grey)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover the Zorielle Difference - Owners & Developers vs Guests */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-ivory-warm)" }}>
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
              Tailored Value
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--color-black)",
              }}
            >
              Discover the Zorielle Difference
            </h2>
            <div className="lux-divider lux-divider-center" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* For Property Owners & Developers */}
            <div
              className="lux-card reveal-up"
              style={{
                background: "linear-gradient(145deg, #ffffff, #faf7f2)",
                padding: "3.2rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderTop: "3px solid var(--color-gold)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-warm-grey)",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  Commercial & Strategic
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    marginBottom: "1.2rem",
                    color: "var(--color-black)",
                  }}
                >
                  For Property Owners & Developers
                </h3>
                <p
                  style={{
                    color: "var(--color-warm-grey)",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    marginBottom: "2rem",
                  }}
                >
                  Unlock the potential of your hospitality assets through strategic development, professional management and revenue-focused operating solutions. We bring comprehensive feasibility, design alignment, and asset performance.
                </p>
              </div>
              <div>
                <Link href="/our-services" className="btn-dark" style={{ width: "100%" }}>
                  <span>Explore Our Services</span>
                  <ArrowRightIcon size={13} />
                </Link>
              </div>
            </div>

            {/* For Guests & Travellers */}
            <div
              className="lux-card reveal-up"
              style={{
                background: "linear-gradient(145deg, #ffffff, #faf7f2)",
                padding: "3.2rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderTop: "3px solid var(--color-gold)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-warm-grey)",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  Experiences & Stays
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    marginBottom: "1.2rem",
                    color: "var(--color-black)",
                  }}
                >
                  For Guests & Travellers
                </h3>
                <p
                  style={{
                    color: "var(--color-warm-grey)",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    marginBottom: "2rem",
                  }}
                >
                  Discover distinctive hospitality experiences designed around comfort, elegance, personalised service and memorable moments. Each Zorielle destination is crafted to inspire and rejuvenate.
                </p>
              </div>
              <div>
                <Link href="/our-brands" className="btn-gold" style={{ width: "100%" }}>
                  <span>Explore Our Brands</span>
                  <ArrowRightIcon size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Outlook Section */}
      <section
        style={{
          padding: "6rem 0",
          backgroundColor: "var(--color-black)",
          color: "var(--color-ivory)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at center, rgba(194, 162, 108, 0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container-narrow reveal-up" style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(194, 162, 108, 0.12)",
              border: "1px solid var(--color-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto",
            }}
          >
            <GlobeIcon size={18} className="text-gold" />
          </div>

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
            Boundless Horizons
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.25,
              marginBottom: "1.5rem",
              color: "var(--color-ivory)",
            }}
          >
            Our Global Outlook
          </h2>

          <div className="lux-divider lux-divider-center" />

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--color-warm-grey-light)",
              lineHeight: 1.8,
              maxWidth: "760px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            Rooted in India, Zorielle Hospitality aspires to develop its presence across international hospitality markets, building partnerships and experiences that transcend geographical boundaries.
          </p>

          <Link href="/contact-us" className="btn-gold">
            <span>Partner With Zorielle</span>
            <ArrowRightIcon size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
