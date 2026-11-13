"use client";

import { useEffect } from "react";

/** Progressive enhancement: server-rendered content is visible without JS. */
export function MotionEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const elements = [...document.querySelectorAll<HTMLElement>(
      ".section-heading, .project, .experience-entry, .skill-group, .about-copy, .contact-layout",
    )];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });

    for (const element of elements) {
      element.classList.add("scroll-reveal");
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    }

    const revealAll = () => {
      observer.disconnect();
      elements.forEach(element => element.classList.remove("reveal-pending"));
    };
    const onPreferenceChange = () => { if (preference.matches) revealAll(); };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest(".reveal-pending");
      if (element) {
        element.classList.remove("reveal-pending");
        observer.unobserve(element);
      }
    };

    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      revealAll();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}
