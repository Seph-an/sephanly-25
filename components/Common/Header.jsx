"use client";

import Nav from "./Nav";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOffer, setIsOffer] = useState(false);
  return (
    <div className="flex-col bg-transparent w-screen py-5 absolute top-0">
      <Nav />
    </div>
  );
};
export default Header;
