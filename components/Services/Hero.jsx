"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [originalOffset, setOriginalOffset] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const nav = document.getElementById("stickyNav");
    if (nav) {
      setOriginalOffset(nav.offsetTop);
    }

    const handleScroll = () => {
      if (window.scrollY >= originalOffset) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [originalOffset]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-screen pt-28 pb-16 bg-tertiary">
      <div className="max-w-7xl mx-auto text-secondary">
        <h1 className="text-center font-semibold text-4xl">
          Explore our digital solutions
        </h1>
        <div
          id="stickyNav"
          className={` ${
            isFixed
              ? "fixed mt-0 w-full top-0 bg-secondary p-2 left-1/2 transform -translate-x-1/2"
              : "mt-12 relative mx-auto"
          }`}
        >
          <ul
            className={`transition-all duration-300 lg:text-lg font-medium flex justify-between flex-wrap gap-3 list-none ${
              isFixed
                ? "w-full bg-tertiary shadow-md py-6 px-6 z-50 rounded-lg"
                : ""
            }`}
          >
            {[
              { id: "Web", label: "Web Dev" },
              { id: "Seo", label: "SEO" },
              { id: "Api", label: "API Integration" },
              { id: "Digital", label: "Digital Marketing" },
              { id: "Uix", label: "UI/UX" },
              { id: "Custom", label: "Custom Software" },
            ].map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className={`transition-colors duration-300 ${
                    activeSection === id ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
