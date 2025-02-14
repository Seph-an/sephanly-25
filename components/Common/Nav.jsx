"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Quotation from "@components/Common/Quotation";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
  const handleClick = () => setIsMenuOpen(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/digital-solutions", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us-for-software-services", label: "Contact" },
  ];

  return (
    <nav className="nav_bar container ">
      <Link href="/" className="">
        <Image
          src="/logo-web-development.svg"
          priority
          alt="sephanly-software-solutions-logo"
          width={250}
          height={250}
          className="w-[200px] sm:w-[250px] ml-[-1rem]  object-contain"
        />
      </Link>

      <div className="flex  items-center gap-12">
        <div className=" flex justify-center items-center gap-5">
          <div
            className={` ${
              isMenuOpen ? "menu_links " : "hidden "
            } lg:flex  justify-around items-center gap-12`}
          >
            {/* {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleClick}
                className={`nav_link ${
                  pathname === href ? "text-primary" : "text-secondary"
                }`}
              >
                {label}
              </Link>
            ))} */}
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleClick}
                className={`nav_link ${
                  href === "/blog" && pathname.startsWith("/blog")
                    ? "text-primary"
                    : pathname === href
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                {label}
              </Link>
            ))}

            <Quotation large={false} onClick={handleClick} />
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
