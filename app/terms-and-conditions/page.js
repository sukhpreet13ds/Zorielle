import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Zorielle Hospitality",
  description:
    "Review the Terms & Conditions governing the use of the Zorielle Hospitality website, digital channels, and hospitality engagement.",
};

export default function TermsAndConditionsPage() {
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
          Terms &amp; Conditions
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
            Welcome to Zorielle Hospitality. These Terms &amp; Conditions govern your access to and use of our official website (www.zoriellehotels.com), related online interfaces, and digital interactions with Zorielle Hospitality.
          </p>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            By viewing, accessing, or using this website, you confirm your acceptance of these Terms &amp; Conditions in full. If you do not accept or agree to any part of these terms, you must refrain from using our digital platforms.
          </p>
        </section>

        {/* 1. Informational Purpose */}
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
            1. Nature of the Website &amp; Disclaimers
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            The content presented on this website is for general informational and marketing representation regarding Zorielle Hospitality&apos;s corporate portfolio, brand concepts (including Zorielle Ease, Zorielle Select, Zorielle Star), and hospitality development models.
          </p>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            Nothing on this website constitutes a formal offer, legal guarantee, binding commitment, or solicitation of investment. All hotel management agreements, franchise licensing contracts, lease arrangements, and architectural development partnerships are governed exclusively by separate, definitive written agreements executed between the authorized parties.
          </p>
        </section>

        {/* 2. Intellectual Property Rights */}
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
            2. Intellectual Property Rights
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            All content on this website—including without limitation trademarks, service marks, brand names (Zorielle Hospitality, Zorielle Ease, Zorielle Select, Zorielle Star), logos, visual imagery, architectural concepts, graphic designs, copy, and layout code—is the proprietary property of Zorielle Hospitality and protected by international copyright, trademark, and intellectual property legislation.
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
            <li>You may view, download, and print website materials solely for personal, non-commercial evaluation.</li>
            <li>You must not reproduce, duplicate, modify, distribute, publish, or commercially exploit any material without explicit written consent from Zorielle Hospitality.</li>
          </ul>
        </section>

        {/* 3. Acceptable Use */}
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
            3. Acceptable Use Policy
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            You agree to interact with this website in compliance with all relevant international and regional laws. In particular, you agree not to:
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
            <li>Introduce malicious software, automated scraping scripts, bots, or unauthorized security-probing tools.</li>
            <li>Interfere with or compromise the security, infrastructure, or operational functionality of our hosting environments.</li>
            <li>Transmit misleading, deceptive, defamatory, or fraudulent business information or partner inquiries.</li>
          </ul>
        </section>

        {/* 4. Development & Partnership Inquiries */}
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
            4. Business Inquiries &amp; Confidentiality
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            When submitting project pitches, property specifications, or business enquiries via our digital contact points, you confirm that you have the requisite authority to disclose such information. Preliminary correspondence does not constitute an agreement to manage, license, or finance any hospitality property until formal non-disclosure and operational contracts are finalized.
          </p>
        </section>

        {/* 5. Limitation of Liability */}
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
            5. Limitation of Liability
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            Zorielle Hospitality strives to ensure all information presented on this website is timely and accurate. However, the site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind. To the fullest extent permitted under law, Zorielle Hospitality and its officers, directors, and employees shall not be liable for any direct, indirect, consequential, or punitive damages resulting from your use of or inability to use this website.
          </p>
        </section>

        {/* 6. External Links */}
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
            6. Third-Party Websites &amp; Services
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            Our website may feature links or references to third-party digital services, map providers, or social platforms. These external destinations operate under their own independent terms and privacy controls. Zorielle Hospitality holds no responsibility or liability for third-party content, policies, or practices.
          </p>
        </section>

        {/* 7. Governing Law */}
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
            7. Governing Law &amp; Jurisdiction
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            These Terms &amp; Conditions are governed by and construed in accordance with the substantive laws of India, without regard to conflict of law principles. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
        </section>

        {/* 8. Modifications */}
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
            8. Modifications to Terms
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
            }}
          >
            We reserve the right to revise or update these Terms &amp; Conditions at our discretion at any time. Changes become operational immediately upon publication to this page. Continued usage of our website following any modification constitutes your acceptance of the revised terms.
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
            9. Corporate Inquiries
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "var(--color-warm-grey)",
              lineHeight: 1.85,
              marginBottom: "1.2rem",
            }}
          >
            If you have questions or require clarification regarding these Terms &amp; Conditions, please reach out to:
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
            href="/privacy-policy"
            style={{
              color: "var(--color-gold-dark)",
              fontWeight: 500,
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            View Privacy Policy &rarr;
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

