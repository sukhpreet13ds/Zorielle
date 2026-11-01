'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, CloseIcon, ArrowTiltIcon } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleMobileNav = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    router.push(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const leftNavItems = [
    { label: "Home", href: "/" },
    { label: "OUR BRANDS", href: "/our-brands" },
    { label: "OUR SERVICES", href: "/our-services" },
  ];

  const rightNavItems = [
    { label: "ABOUT US", href: "/about-us" },
    { label: "CONTACT US", href: "/contact-us" },
  ];

  const allNavItems = [
    { label: "Home", href: "/" },
    { label: "Our Brands", href: "/our-brands" },
    { label: "Our Services", href: "/our-services" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Desktop Left Side Links */}
          <nav className="nav-links-group nav-links-left">
            {leftNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Logo - Centered on Desktop, Left on Mobile */}
          <div className="nav-logo-center">
            <Link href="/" aria-label="Zorielle Hospitality Home">
              <Image
                src="/assets/zorielle-logo.png"
                alt="Zorielle Hospitality"
                width={190}
                height={55}
                priority
                className="nav-logo-img"
              />
            </Link>
          </div>

          {/* Desktop Right Side Links */}
          <nav className="nav-links-group nav-links-right">
            {rightNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <MenuIcon size={30} className="text-ivory hover:text-gold transition-colors" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop + Zoom-in Panel */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? "open" : ""}`}
        style={{ display: mobileMenuOpen ? "block" : "none" }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="mobile-menu-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Logo and Close Button */}
          <div className="mobile-menu-header">
           <div></div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
              className="p-1 text-ivory hover:text-gold transition-colors"
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              <CloseIcon size={22} />
            </button>
          </div>

          {/* Big Text Menu Items with Arrow Tilt Icon */}
          <div className="mobile-menu-items">
            {allNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleMobileNav(e, item.href)}
                  className={`mobile-menu-link ${isActive ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  <span>{item.label}</span>
                  <ArrowTiltIcon size={18} className="tilt-icon" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Footer */}
          <div className="mobile-menu-footer">
            <div style={{ color: "var(--color-warm-grey-light)", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
              Creating Destinations. Elevating Experiences.
            </div>
            <a
              href="/contact-us"
              onClick={(e) => handleMobileNav(e, "/contact-us")}
              className="btn-gold"
              style={{ width: "100%", marginTop: "0.5rem", cursor: "pointer" }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

