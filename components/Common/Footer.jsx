import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  MonitorCog,
  UserSearch,
  Mail,
  Phone,
  MapPin,
  Clock8,
  Timer,
} from "lucide-react";

const Footer = () => {
  const iconColor = "#92e3a9";
  const iconSize = 20;
  const iconWidth = 2;
  const iconStyles = "flex items-center gap-2 ";
  const footerTitles = " gap-1 flex items-center mb-2";
  const footer_style = "text-elementary font-semibold text-base sm:text-lg ";
  const currentYear = new Date().getFullYear();
  const year = `©️ ${currentYear}`;
  return (
    <footer className="z-20 w-screen bg-secondary">
      <div className=" container flex flex-wrap justify-between gap-5 sm:gap-3 text-white  py-12">
        <div className=" flex flex-col w-fit">
          <div className={footerTitles}>
            <UserSearch
              color={iconColor}
              size={iconSize}
              strokeWidth={iconWidth}
            />
            <h2 className={footer_style}>Contacts</h2>
          </div>
          <p className="text-base text-white max-w-sm">
            Hello 🖐, You are free to Call, Text, Mail, Visit, Whatsapp, Follow,
            Visit ... We will be glad to interact with you.
          </p>
          <ul className="flex flex-col list-none mt-3">
            <li className={iconStyles}>
              <Phone
                color={iconColor}
                size={iconSize}
                strokeWidth={iconWidth}
              />{" "}
              <span>02 - 07 - 86 - 86 - 06</span>{" "}
            </li>
            <li className={iconStyles}>
              {" "}
              <Mail
                color={iconColor}
                size={iconSize}
                strokeWidth={iconWidth}
              />{" "}
              <span>services@sephanly.com</span>{" "}
            </li>
            <li className={iconStyles}>
              {" "}
              <Clock8
                color={iconColor}
                size={iconSize}
                strokeWidth={iconWidth}
              />{" "}
              <span>8:00 am - 5:00 pm, Mon - Fri</span>{" "}
            </li>
            <li className={iconStyles}>
              {" "}
              <Timer
                color={iconColor}
                size={iconSize}
                strokeWidth={iconWidth}
              />{" "}
              <span>8:00 am - 1:00 pm, Sat</span>{" "}
            </li>
            <li className={iconStyles}>
              {" "}
              <MapPin
                color={iconColor}
                size={iconSize}
                strokeWidth={iconWidth}
              />{" "}
              <span>Suite A104, Madonna House Annex - Off Westlands Road</span>{" "}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <div className={footerTitles}>
              <MonitorCog
                color={iconColor}
                size={iconSize}
                strokeWidth={iconWidth}
              />
              <h2 className={footer_style}>Services</h2>
            </div>
            <ul className="flex flex-col text-opacity-85">
              <Link href="#" className="">
                Web development
              </Link>
              <Link href="#" className="">
                SEO
              </Link>
              <Link href="#" className="">
                Digital Marketing
              </Link>
              <Link href="#" className="">
                API Integration
              </Link>
              <Link href="#" className="">
                UI/UX
              </Link>
              <Link href="#" className="">
                Custom Software
              </Link>
            </ul>
          </div>
          <div className="policies flex flex-col">
            <div className={footerTitles}>
              <ShieldCheck
                color={iconColor}
                size={iconSize}
                strokeWidth={iconWidth}
              />
              <h2 className={footer_style}>Policies</h2>
            </div>
            <ul className="flex flex-col">
              <Link href="/privacy_policy" className="">
                Privacy Policy
              </Link>
              <Link href="/terms_of_service" className="">
                Terms of Service
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-0">
          <div className={footerTitles}>
            <Building2
              color={iconColor}
              size={iconSize}
              strokeWidth={iconWidth}
            />
            <h2 className={footer_style}>Company</h2>
          </div>
          <ul className="flex flex-col">
            <Link href="#" className="">
              Home
            </Link>
            <Link href="#" className="">
              About
            </Link>
            <Link href="#" className="">
              Services
            </Link>
            <Link href="#" className="">
              Going Online
            </Link>
            <Link href="#" className="">
              Trusted by
            </Link>
            <Link href="#" className="">
              FAQ
            </Link>
            <Link href="#" className="">
              Blog
            </Link>
            <Link href="#" className="">
              Careers
            </Link>
          </ul>
        </div>

        <div className="mt-8 sm:mt-0 flex items-center gap-6 sm:gap-4 flex-col  pt-8">
          <Link href="/">
            <Image
              src="/logo-web-development-footer.svg"
              alt="web-development-ui-ux-api-integration-web-design-website"
              width={100}
              height={100}
              className="w-[250px] h-full object-contain -ml-3"
            />
          </Link>

          <p className="text-center md:text-left w-full sm:max-w-60 text-base lg:max-w-72">
            We specialize in guiding individuals to achieve their professional
            goals, and take great pride in their progress and success.
          </p>
        </div>
      </div>
      <div className="w-screen p-2 bg-white mt-5">
        <p className="text-sm text-center font-light text-secondary">
          {`${year}. All rights reserved | Developed by: `}
          <span className="text-primary font-regular">
            <Link href="#" className="underline">
              Sephanly
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
