import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Zorielle Hospitality",
  description:
    "Read Zorielle Hospitality's Privacy Policy to understand how we collect, use, protect, and manage your personal information when using our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-ivory)",
        minHeight: "100vh",
        padding: "160px 0 6rem 0",
      }}
    >
      <div
        className="container-narrow"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
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
          Legal Documentation
        </span>

        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
            fontWeight: 400,
            color: "var(--color-black)",
            marginBottom: "0.8rem",
            lineHeight: 1.2,
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-warm-grey)",
            marginBottom: "2rem",
          }}
        >
          Effective Date: January 1, 2026 | Last Updated: January 2026
        </p>

        <div className="lux-divider" style={{ marginBottom: "3rem" }} />

        {/* Introduction */}
        <section style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-black)",
              lineHeight: 1.85,
              marginBottom: "1.2rem",
              fontWeight: 400,
            }}
          >
            At Zorielle Hospitality, we hold privacy, discretion, and data integrity in the highest regard. This Privacy Policy details our practices concerning the collection, use, disclosure, and protection of personal and commercial data gathered when you visit our website (www.zoriellehotels.com), engage with our corporate communications, or enquire about hotel development, management partnerships, and hospitality services.
          </p>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            By accessing our website or submitting information to us, you consent to the practices described in this policy. If you do not agree with any aspect of this Privacy Policy, please discontinue use of our site and services.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            1. Information We Collect
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            We collect information that you voluntarily provide to us, as well as certain data automatically captured when you browse our digital channels:
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.5rem",
              color: "var(--color-warm-grey)",
              fontSize: "1.02rem",
              lineHeight: 1.85,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              marginBottom: "1.2rem",
            }}
          >
            <li>
              <strong style={{ color: "var(--color-black)" }}>Direct Enquiries &amp; Contact Data:</strong> Name, professional title, corporate email address, telephone number, company or organisation name, and correspondence details submitted through email, direct phone calls, or messaging channels.
            </li>
            <li>
              <strong style={{ color: "var(--color-black)" }}>Partnership &amp; Real Estate Information:</strong> Details concerning hospitality property assets, geographical locations, investment ranges, architectural blueprints, or management proposals shared for evaluation.
            </li>
            <li>
              <strong style={{ color: "var(--color-black)" }}>Technical &amp; Browsing Information:</strong> Internet Protocol (IP) addresses, browser type, device identifiers, operating systems, referring URLs, pages visited, duration of visit, and interaction patterns gathered via server logs.
            </li>
            <li>
              <strong style={{ color: "var(--color-black)" }}>Cookies &amp; Tracking Technologies:</strong> Information collected via cookies and similar technologies to facilitate smooth website navigation and evaluate performance metrics.
            </li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            2. How We Use Your Information
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            Zorielle Hospitality uses the gathered data strictly for legitimate commercial, operational, and development objectives, including:
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.5rem",
              color: "var(--color-warm-grey)",
              fontSize: "1.02rem",
              lineHeight: 1.85,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <li>Responding to partner, owner, and developer enquiries with tailored hospitality advisory.</li>
            <li>Evaluating hotel management, brand licensing, and joint-venture development opportunities.</li>
            <li>Operating, maintaining, optimizing, and ensuring the digital security of our website.</li>
            <li>Sending relevant corporate announcements, brand publications, or project updates when requested.</li>
            <li>Complying with statutory, regulatory, and legal obligations applicable to our operations.</li>
          </ul>
        </section>

        {/* 3. Information Sharing and Disclosure */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            3. Information Sharing &amp; Disclosure
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            We do not sell, rent, or trade your personal information to third parties. We may disclose data under the following limited conditions:
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.5rem",
              color: "var(--color-warm-grey)",
              fontSize: "1.02rem",
              lineHeight: 1.85,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <li>
              <strong style={{ color: "var(--color-black)" }}>Corporate Affiliates:</strong> To subsidiaries, affiliates, and property operating entities within the Zorielle Hospitality group for business operations.
            </li>
            <li>
              <strong style={{ color: "var(--color-black)" }}>Authorized Service Providers:</strong> To vetted technology vendors, hosting providers, and professional advisors bound by stringent confidentiality agreements.
            </li>
            <li>
              <strong style={{ color: "var(--color-black)" }}>Legal Mandates:</strong> Where required by applicable legislation, judicial orders, governmental regulatory bodies, or to protect the rights, safety, and property of Zorielle Hospitality.
            </li>
          </ul>
        </section>

        {/* 4. Data Security */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            4. Data Security &amp; Confidentiality
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            We employ modern administrative, physical, and technical safeguards engineered to defend your personal information against unauthorised access, alteration, disclosure, or accidental destruction. While no electronic transmission over the internet can be guaranteed to be fully invulnerable, we regularly assess and enhance our security protocols.
          </p>
        </section>

        {/* 5. Data Retention */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            5. Retention of Information
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            We retain personal information for the period necessary to fulfil the objectives outlined in this Privacy Policy, unless a longer retention period is required or permitted by statutory, legal, tax, or regulatory requirements.
          </p>
        </section>

        {/* 6. Your Rights */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            6. Your Privacy Rights
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            Subject to applicable regional laws, you may hold rights regarding your personal information, including:
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.5rem",
              color: "var(--color-warm-grey)",
              fontSize: "1.02rem",
              lineHeight: 1.85,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <li>Requesting access to the personal information we maintain concerning you.</li>
            <li>Requesting correction or updates to inaccurate or incomplete information.</li>
            <li>Requesting deletion or erasure of your personal records from our active systems.</li>
            <li>Opting out of non-essential promotional correspondence at any time.</li>
          </ul>
        </section>

        {/* 7. Cookies Policy */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            7. Cookies &amp; Tracking Technologies
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            Our website uses minimal, necessary cookies to provide an intuitive user journey and analyse site traffic trends. You can manage or block cookies through your individual browser settings; however, disabling certain cookies may affect how specific features function.
          </p>
        </section>

        {/* 8. Policy Updates */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            8. Policy Updates &amp; Amendments
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            Zorielle Hospitality reserves the right to amend or revise this Privacy Policy periodically to reflect evolving business practices, technological improvements, or legal standards. Revisions will become effective immediately upon being posted on this page with an updated &ldquo;Effective Date&rdquo;.
          </p>
        </section>

        {/* 9. Contact */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              fontWeight: 500,
              color: "var(--color-black)",
              marginBottom: "1rem",
            }}
          >
            9. Contact Information
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1.2rem",
            }}
          >
            For any inquiries, requests, or privacy concerns regarding this Privacy Policy, please contact our team directly:
          </p>
          <div
            style={{
              fontSize: "1.02rem",
              color: "var(--color-black)",
              lineHeight: 1.9,
            }}
          >
            <div><strong>Zorielle Hospitality</strong></div>
            <div>Email: <a href="mailto:info@zoriellehotels.com" style={{ color: "var(--color-gold-dark)", textDecoration: "underline" }}>info@zoriellehotels.com</a></div>
            <div>Website: <a href="https://www.zoriellehotels.com" style={{ color: "var(--color-gold-dark)", textDecoration: "underline" }}>www.zoriellehotels.com</a></div>
            <div>Headquarters: India | International Markets</div>
          </div>
        </section>

        <div className="lux-divider" style={{ marginBottom: "2.5rem" }} />

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <Link
            href="/terms-and-conditions"
            style={{
              color: "var(--color-gold-dark)",
              fontWeight: 500,
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            View Terms &amp; Conditions &rarr;
          </Link>
          <Link
            href="/"
            style={{
              color: "var(--color-warm-grey)",
              fontWeight: 500,
              fontSize: "0.95rem",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

