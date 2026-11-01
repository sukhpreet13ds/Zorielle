'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimate() {
  const pathname = usePathname();

  useEffect(() => {
    // Select all section elements marked for scroll-reveal
    const elements = document.querySelectorAll(".reveal-up");
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            entry.target.classList.remove("reveal-up-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("animate__animated")) {
        el.classList.add("reveal-up-pending");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

