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
    // <nav className="flex-col w-full py-3">
    <nav className="nav_bar ">
      <Link href="/" className="">
        <Image
          src="/logo-web-development.svg"
          priority
          alt="sephanly-software-solutions-logo"
          width={100}
          height={100}
          className="w-[100px] h-auto ml-[-1rem] lg:w-[220px] object-contain"
        />
      </Link>

      <div className=" flex  items-center gap-12">
        <div className="flex justify-center items-center gap-5">
          <div
            className={`${
              isMenuOpen ? "menu_links" : "hidden"
            } lg:flex justify-around items-center gap-12 `}
          >
            <Link href="#" className="nav_link">
              Home
            </Link>
            <Link href="#" className="nav_link">
              About
            </Link>
            <Link href="#" className="nav_link">
              Services
            </Link>
            <Link href="#" className="nav_link">
              Blog
            </Link>
            <Link href="#" className="nav_link">
              Contact
            </Link>
          </div>

          <button className="block lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <Menu color="#34464f" size={40} strokeWidth={2} />
            ) : (
              <X color="#34464f" size={40} strokeWidth={2} />
            )}
            <span className="sr-only">MENU</span>
          </button>
        </div>
        <Quotation large={false} />
        {/* <Link
          href="#"
          className="text-base text-white bg-green-600 shadow-lg p-2.5 rounded-md transition-all ease-in-out delay-150 hover:bg-red "
        >
          Get Quotation
        </Link> */}
      </div>
    </nav>
    // </nav>
  );
};

export default Nav;
