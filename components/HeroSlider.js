'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

const slides = [
  {
    image: "/assets/slide1.jpg",
    tagline: "Where Vision Meets Hospitality",
    subtitle: "Creating Destinations. Elevating Experiences. Delivering Value.",
  },
  {
    image: "/assets/slide2.jpg",
    tagline: "Exceptional Hospitality Experiences",
    subtitle: "Creating Memorable Stays & Meaningful Guest Connections",
  },
  {
    image: "/assets/slide3.jpg",
    tagline: "Strategic Real Estate Transformations",
    subtitle: "Partnering With Developers, Owners & Investors Worldwide",
  },
  {
    image: "/assets/slide4.jpg",
    tagline: "Sustainable Long-Term Value",
    subtitle: "From Luxury Destination Resorts to Branded Residences",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider-container" aria-label="Hero Slideshow">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}

      {/* Blackish shade overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="hero-content">
        <span className="hero-subtitle-tag">
          Zorielle Hospitality
        </span>

        <h1 className="hero-title">
          Where Vision Meets Hospitality.
        </h1>

        <p className="hero-tagline">
          Creating Destinations. Elevating Experiences. Delivering Value.
        </p>

        <p className="hero-description">
          Zorielle Hospitality is a hospitality management and development company dedicated to creating, developing and managing exceptional hospitality destinations across luxury hotels, destination resorts, branded serviced residences, and wellness retreats.
        </p>

        <div className="hero-actions">
          <Link href="/our-brands" className="btn-gold">
            <span>Explore Our Brands</span>
            <ArrowRightIcon size={13} />
          </Link>
          <Link href="/our-services" className="btn-outline-light">
            <span>Explore Our Services</span>
            <ArrowRightIcon size={13} />
          </Link>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="hero-slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

