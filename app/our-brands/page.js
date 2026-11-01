import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Our Brands | Zorielle Hospitality",
  description:
    "Explore the brand portfolio of Zorielle Hospitality: Zorielle Ease, Zorielle Select, Zorielle Star, and Beyond Hotels.",
};

export default function BrandsPage() {
  const brands = [
    {
      id: "ease",
      badge: "Contemporary Comfort",
      name: "ZORIELLE EASE",
      tagline: "Stay Easy. Live Well.",
      description:
        "A contemporary hospitality experience designed for business and leisure travellers who value comfort, convenience, and thoughtful service. Zorielle Ease brings together functional design, comfortable accommodation, and essential lifestyle amenities to deliver a welcoming and dependable stay.",
      highlights: [
        "Smart, intuitive room automation and ergonomic design",
        "Essential lifestyle amenities and 24/7 seamless connectivity",
        "Prime connectivity in key urban and suburban business hubs",
        "Effortless check-in and friendly, attentive service",
      ],
      image: "/assets/brand11.jpg",
      reverse: false,
    },
    {
      id: "select",
      badge: "Upscale Hospitality",
      name: "ZORIELLE SELECT",
      tagline: "A Better Way to Stay.",
      description:
        "An elevated hospitality experience for discerning travellers who appreciate refined interiors, personalised attention, and thoughtfully curated facilities. Zorielle Select combines contemporary sophistication with attentive service and distinctive guest experiences.",
      highlights: [
        "Refined interior aesthetics curated by top hospitality architects",
        "Bespoke dining and curated artisan lounge experiences",
        "Dedicated guest relations and personalized concierge",
        "Sophisticated meeting and social gathering spaces",
      ],
      image: "/assets/brand22.jpg",
      reverse: true,
    },
    {
      id: "star",
      badge: "Luxury Hospitality",
      name: "ZORIELLE STAR",
      tagline: "Where Exceptional Becomes Extraordinary.",
      description:
        "The luxury expression of the Zorielle portfolio, designed for premium hotels, exclusive resorts, and sophisticated destinations. Zorielle Star represents refined luxury, personalised experiences, exceptional service, and attention to every detail.",
      highlights: [
        "Iconic architectural statements in premier destinations",
        "World-class private butler and ultra-personalized itineraries",
        "Fine dining gastronomic journeys and world-class spas",
        "Unsurpassed attention to detail and discreet luxury",
      ],
      image: "/assets/brand33.jpg",
      reverse: false,
    },
  ];

  const beyondHotels = [
    {
      title: "Wellness Retreats",
      desc: "Holistic wellness, naturopathy, and rejuvenation escapes set amidst restorative natural landscapes.",
      image: "/assets/brandb11.jpg",
    },
    {
      title: "Serviced Residences",
      desc: "Branded long-stay residences uniting residential intimacy with full-service luxury hotel amenities.",
      image: "/assets/brandb22.jpg",
    },
    {
      title: "Destination Resorts",
      desc: "Immersive retreats designed to celebrate local heritage, nature, and cultural storytelling.",
      image: "/assets/brandb33.jpg",
    },
    {
      title: "Lifestyle Hospitality",
      desc: "Dynamic social hubs blending vibrant culinary concepts, entertainment, and modern living.",
      image: "/assets/brandb44.jpg",
    },
  ];

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div
          className="page-header-bg"
          style={{ backgroundImage: "url('/assets/slide3.jpg')" }}
        />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <span className="hero-subtitle-tag">Brand Portfolio</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            One Vision. Distinctive Hospitality Experiences.
          </h1>
          <p className="hero-tagline" style={{ maxWidth: "720px", margin: "0 auto" }}>
            Designed to cater to different hospitality segments while maintaining a common commitment to quality, comfort, and exceptional service.
          </p>
        </div>
      </section>

      {/* Intro Narrative */}
      <section style={{ padding: "5rem 0 3rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.8,
            }}
          >
            At Zorielle Hospitality, we believe that every traveller has different expectations and every destination has a unique identity. Our brand portfolio is thoughtfully tiered to address unique guest needs and market segments, from contemporary comfort to ultra-luxury destinations.
          </p>
        </div>
      </section>

      {/* Core Brands Showcase (Ease, Select, Star) */}
      <section style={{ padding: "3rem 0 6rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-lux" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          
          {/* Horizontal 3 Brand Logos Bar (above the 3 cards) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
              padding: "2.4rem 2rem",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
              border: "1px solid rgba(194, 162, 108, 0.22)",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {/* Logo 1 - Zorielle Ease (Replace with brand logo) */}
            <a
              href="#ease"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.7rem",
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ position: "relative", width: "180px", height: "110px" }}>
                <Image
                  src="/assets/zorielle.png"
                  alt="Zorielle Ease"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                Zorielle Ease
              </span>
            </a>

            {/* Logo 2 - Zorielle Select (Replace with brand logo) */}
            <a
              href="#select"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.7rem",
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ position: "relative", width: "180px", height: "110px" }}>
                <Image
                  src="/assets/select.png"
                  alt="Zorielle Select"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                Zorielle Select
              </span>
            </a>

            {/* Logo 3 - Zorielle Star (Replace with brand logo) */}
            <a
              href="#star"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.7rem",
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ position: "relative", width: "180px", height: "110px" }}>
                <Image
                  src="/assets/star.png"
                  alt="Zorielle Star"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                Zorielle Star
              </span>
            </a>
          </div>

          {brands.map((brand) => (
            <div
              key={brand.id}
              id={brand.id}
              className="lux-card"
              style={{
                padding: "3.5rem 1rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
                borderRadius: "12px",
                borderTop: "3px solid var(--color-gold)",
                scrollMarginTop: "120px",
              }}
            >
              <div style={{ order: brand.reverse ? 2 : 1 }}>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-gold-dark)",
                    display: "inline-block",
                    padding: "0.25rem 0.8rem",
                    background: "var(--color-gold-subtle)",
                    borderRadius: "4px",
                    marginBottom: "1rem",
                  }}
                >
                  {brand.badge}
                </span>

                <h2
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                    color: "var(--color-black)",
                  }}
                >
                  {brand.name}
                </h2>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontStyle: "italic",
                    color: "var(--color-warm-grey)",
                    marginBottom: "1.5rem",
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{brand.tagline}&rdquo;
                </h3>

                <p
                  style={{
                    color: "var(--color-warm-grey)",
                    fontSize: "1.02rem",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {brand.description}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2.5rem" }}>
                  {brand.highlights.map((hl, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.92rem", color: "var(--color-black)" }}>
                      <span style={{ color: "var(--color-gold)", marginTop: "2px" }}>◆</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact-us" className="btn-dark">
                  <span>Enquire About {brand.name}</span>
                  <ArrowRightIcon size={13} />
                </Link>
              </div>

              <div
                style={{
                  order: brand.reverse ? 1 : 2,
                  position: "relative",
                  height: "440px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Hotels Section */}
      <section
        id="beyond"
        style={{
          padding: "6rem 0",
          backgroundColor: "#ffffff",
          scrollMarginTop: "100px",
        }}
      >
        <div className="container-lux">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              Specialised Verticals
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--color-black)",
              }}
            >
              Beyond Hotels
            </h2>
            <div className="lux-divider lux-divider-center" />
            <p
              style={{
                color: "var(--color-warm-grey)",
                fontSize: "1.05rem",
                maxWidth: "680px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Our hospitality vision extends into specialised and emerging hospitality segments tailored for modern travel aspirations.
            </p>
          </div>

          <div className="beyond-hotels-grid">
            {beyondHotels.map((item, idx) => (
              <div
                key={idx}
                className="lux-card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  border: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="card-img-wrap" style={{ position: "relative", height: "230px", width: "100%" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                    }}
                  />
                </div>
                <div className="card-content" style={{ padding: "1.8rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      marginBottom: "0.6rem",
                      color: "var(--color-black)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-warm-grey)",
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uncompromising Commitment Quote */}
      <section
        style={{
          padding: "6rem 0",
          backgroundColor: "var(--color-black)",
          color: "var(--color-ivory)",
          textAlign: "center",
        }}
      >
        <div className="container-narrow">
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              lineHeight: 1.35,
              color: "var(--color-ivory)",
              marginBottom: "1.5rem",
            }}
          >
            Different experiences. One uncompromising commitment to hospitality.
          </h2>
          <div className="lux-divider lux-divider-center" />
          <p
            style={{
              color: "var(--color-warm-grey-light)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              maxWidth: "680px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            Partner with us to create or convert your property under one of Zorielle&apos;s distinctive brands.
          </p>
          <Link href="/contact-us" className="btn-gold">
            <span>Discuss Brand Affiliation</span>
            <ArrowRightIcon size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}

