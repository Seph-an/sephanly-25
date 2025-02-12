"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Quotation from "@components/Common/Quotation";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav_bar container">
      <Link href="/" className="">
        <Image
          src="/logo-web-development.svg"
          priority
          alt="sephanly-software-solutions-logo"
          width={100}
          height={100}
          className="w-[200px] sm:w-[250px] h-auto ml-[-1rem]  object-contain"
        />
      </Link>

      <div className="flex  items-center gap-12">
        <div className=" flex justify-center items-center gap-5">
          <div
            // className={`${
            //   isMenuOpen ? "menu_links" : "hidden"
            // } lg:flex justify-around items-center gap-12 `}
            className={`menu_links transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            } lg:flex justify-around items-center gap-12`}
          >
            <Link href="/" className="nav_link">
              Home
            </Link>
            <Link href="/about-us" className="nav_link">
              About
            </Link>
            <Link href="/digital-solutions" className="nav_link">
              Services
            </Link>
            <Link href="/blog" className="nav_link">
              Blog
            </Link>
            <Link href="/contact-us-for-software-services" className="nav_link">
              Contact
            </Link>
            <Quotation large={false} />
          </div>

          <button className="block lg:hidden" onClick={toggleMenu}>
            {!isMenuOpen ? (
              <Menu color="#16a34a" size={50} strokeWidth={2} />
            ) : (
              <X color="#16a34a" size={50} strokeWidth={2} />
            )}
            <span className="sr-only">MENU</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
