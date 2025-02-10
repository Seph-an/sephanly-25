"use client";
import Hero from "@components/About/Hero";
import Why from "@components/About/Why";
import { NextSeo } from "next-seo";

export default function About() {
  return (
    <div className="">
      {/* <NextSeo
        title="About Us"
        description="We're a passionate team dedicated to turning ideas into engaging digital experiences—blending design, development, and strategy to help your business thrive."
        canonical="https://www.sephanly.com/about-us"
        openGraph={{
          url: "https://www.sephanly.com/about-us",
          title: "About us",
          description:
            "Turn your ideas into engaging digital experiences with our team of experts.",
          images: [
            {
              url: "https://www.example.com/images/my-page-image.jpg",
              width: 800,
              height: 600,
              alt: "My Page Image Alt Text",
            },
          ],
          site_name: "Sephanly Digital Solutions",
        }}
        twitter={{
          handle: "@sephanly",
          site: "@sephanly",
          cardType: "summary_large_image",
        }}
      /> */}
      <Hero />
      <Why />
    </div>
  );
}
