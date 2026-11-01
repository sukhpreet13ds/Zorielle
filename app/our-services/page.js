import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/Icons";

export const metadata = {
  title: "Our Services | Zorielle Hospitality",
  description:
    "Integrated Hospitality Solutions from Vision to Value. Development, Hotel & Resort Management, Serviced Residences, and Asset Advisory.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "development",
      num: "01",
      title: "Hospitality Development & Conceptualisation",
      desc: "We help transform real estate opportunities into commercially viable hospitality developments with visionary planning and precise positioning.",
      items: [
        "Hospitality project conceptualisation & vision formulation",
        "Market research, demand mapping and comprehensive feasibility",
        "Brand definition and market positioning strategy",
        "Project planning and development advisory",
        "Product mix, key count and master space planning",
      ],
      image: "/assets/expertise11.jpg",
    },
    {
      id: "management",
      num: "02",
      title: "Hotel & Resort Management",
      desc: "Professional turnkey management solutions designed to deliver consistent guest satisfaction, superior brand reputation, and strong operational performance.",
      items: [
        "Comprehensive hotel and resort daily operations",
        "Front office, concierge and VIP guest relations",
        "Executive housekeeping, engineering and maintenance",
        "Culinary and beverage operations",
        "Talent acquisition and human resource management",
        "Rigorous quality assurance and global service standards",
      ],
      image: "/assets/expertise22.jpg",
    },
    {
      id: "residences",
      num: "03",
      title: "Branded Serviced Residences",
      desc: "We create and manage professionally operated serviced residences that seamlessly combine residential warmth with 5-star hotel services.",
      items: [
        "Hospitality-led residential development concepts",
        "Brand positioning, identity and value proposition",
        "Turnkey operations and concierge facility management",
        "Global guest acquisition and distribution channels",
        "Dynamic revenue and long-term occupancy management",
      ],
      image: "/assets/expertise33.jpg",
    },
    {
      id: "wellness",
      num: "04",
      title: "Wellness & Destination Hospitality",
      desc: "We develop transformative hospitality concepts focused on holistic wellness, nature conservation, restorative leisure, and experiential travel.",
      items: [
        "Luxury wellness sanctuaries and holistic retreats",
        "Naturopathy, yoga and integrative health facilities",
        "Nature-based and eco-conscious destinations",
        "Curated leisure and lifestyle resorts",
        "Experiential cultural immersion concepts",
      ],
      image: "/assets/expertise44.jpg",
    },
    {
      id: "revenue",
      num: "05",
      title: "Asset & Revenue Management",
      desc: "We focus on maximising the financial yields and long-term capital appreciation of hospitality real estate assets.",
      items: [
        "Revenue optimization and dynamic pricing algorithms",
        "Occupancy maximization across seasons",
        "Cost control and operational margin efficiency",
        "Global distribution system (GDS) & sales strategy",
        "Transparent performance monitoring and owner reporting",
      ],
      image: "/assets/expertise55.jpg",
    },
    {
      id: "fnb",
      num: "06",
      title: "Food & Beverage Management",
      desc: "We develop and manage memorable dining concepts that become destinations in their own right and drive property profitability.",
      items: [
        "Signature fine dining restaurants and artisan bistros",
        "Casual cafés, bakery and beverage lounges",
        "Banqueting, gala events and meeting catering",
        "Curated chef pop-ups and epicurean food festivals",
        "Concept development, menu engineering and cost control",
      ],
      image: "/assets/expertise66.jpg",
    },
  ];

  const partnershipModels = [
    {
      title: "Hotel Management Agreements",
      desc: "Full operational stewardship under Zorielle standards, maximizing ADR and guest loyalty.",
    },
    {
      title: "Hospitality Consulting",
      desc: "Specialized advisory across feasibility, technical services, pre-opening, and audits.",
    },
    {
      title: "Lease & Operating Agreements",
      desc: "Flexible, predictable leasing and revenue-share models structured for asset security.",
    },
    {
      title: "Brand Licensing & Franchising",
      desc: "Affiliate under Zorielle brand banners while retaining proprietary owner operations.",
    },
    {
      title: "Strategic Development Partnerships",
      desc: "Collaborative co-development from concept inception through architectural completion.",
    },
    {
      title: "Joint Hospitality Ventures",
      desc: "Equity and equity-light joint ventures aligning financial interests for exponential growth.",
    },
  ];

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div
          className="page-header-bg"
          style={{ backgroundImage: "url('/assets/slide4.jpg')" }}
        />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <span className="hero-subtitle-tag">Integrated Solutions</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            From Vision to Value.
          </h1>
          <p className="hero-tagline" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Integrated Hospitality Solutions for a Changing World.
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
            Zorielle Hospitality partners with developers, landowners, property owners, and investors to conceptualise, develop, and manage hospitality assets. We understand that every hospitality project has different objectives. Our services are therefore designed to provide flexible, customised solutions across the entire hospitality lifecycle.
          </p>
        </div>
      </section>

      {/* Services Alternating Rows with Images */}
      <section style={{ padding: "3rem 0 6rem 0", backgroundColor: "var(--color-ivory)" }}>
        <div className="container-lux" style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.id}
                className="service-alternating-row"
              >
                {/* Image Column */}
                <div
                  className="service-img-col"
                  style={{
                    order: isEven ? 1 : 2,
                  }}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(13,13,13,0.55), transparent)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1.2rem",
                      color: "var(--color-gold)",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {svc.num}
                  </span>
                </div>

                {/* Content Column */}
                <div
                  className="service-content-col"
                  style={{
                    order: isEven ? 2 : 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-gold-dark)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Expertise {svc.num}
                  </div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "clamp(1.5rem, 2.5vw, 1.95rem)",
                      fontWeight: 500,
                      marginBottom: "0.8rem",
                      color: "var(--color-black)",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-warm-grey)",
                      fontSize: "0.98rem",
                      lineHeight: 1.75,
                      marginBottom: "1.4rem",
                    }}
                  >
                    {svc.desc}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                      marginTop: "auto",
                      paddingTop: "1.2rem",
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    {svc.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.65rem",
                          fontSize: "0.9rem",
                          color: "var(--color-black)",
                        }}
                      >
                        <CheckCircleIcon size={14} className="text-gold" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Partnership Models Section */}
      <section
        id="partnerships"
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
              Collaboration Structures
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--color-black)",
              }}
            >
              Partnership Models
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
              Flexible partnerships. Shared vision. Sustainable value. We offer different engagement structures depending on the nature and objectives of the property.
            </p>
          </div>

          <div className="partnership-models-grid">
            {partnershipModels.map((pm, idx) => (
              <div
                key={idx}
                className="lux-card"
                style={{
                  background: "var(--color-ivory-warm)",
                  border: "none",
                }}
              >
                <div
                  className="structure-badge"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--color-gold-dark)",
                    letterSpacing: "0.15em",
                    marginBottom: "0.8rem",
                  }}
                >
                  STRUCTURE 0{idx + 1}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    marginBottom: "0.8rem",
                    color: "var(--color-black)",
                  }}
                >
                  {pm.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-warm-grey)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  {pm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Owner CTA Banner */}
      <section
        style={{
          padding: "7rem 0",
          backgroundColor: "var(--color-black)",
          color: "var(--color-ivory)",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container-narrow">
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Owner, Developer or Investor?
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 400,
              color: "var(--color-ivory)",
              marginBottom: "1.2rem",
              lineHeight: 1.25,
            }}
          >
            Your property could be the next distinctive hospitality destination.
          </h2>

          <div className="lux-divider lux-divider-center" />

          <p
            style={{
              color: "var(--color-warm-grey-light)",
              fontSize: "1.1rem",
              maxWidth: "680px",
              margin: "0 auto 2.5rem auto",
              lineHeight: 1.75,
            }}
          >
            Let&apos;s explore how Zorielle Hospitality can help unlock its commercial and experiential potential.
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

