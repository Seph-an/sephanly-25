import {
  LayoutTemplate,
  ChartLine,
  Share2,
  Webhook,
  LaptopMinimalCheck,
  GlobeLock,
} from "lucide-react";

const ServiceDetails = [
  {
    title: "Web Development",
    description:
      "Crafting fast, responsive, and user-friendly websites tailored to your brand.",

    link: "/digital-solutions#web-development",
    Icon: <LayoutTemplate size={20} />,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boosting your visibility and driving organic traffic through proven SEO strategies.",

    link: "/digital-solutions#seo",
    Icon: <ChartLine size={20} />,
  },
  {
    title: "Digital Marketing",
    description:
      "Connecting you with your audience through data-driven campaigns that deliver results.",

    link: "/digital-solutions#digital-marketing",
    Icon: <Share2 size={20} />,
  },
  {
    title: "API Integration",
    description:
      "Streamlining operations by integrating powerful APIs into your systems.",

    link: "/digital-solutions#api-integration",
    Icon: <Webhook size={20} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually stunning interfaces that captivate and enhance user experiences.",

    link: "/digital-solutions#ui-ux-design",
    Icon: <LaptopMinimalCheck size={20} />,
  },
  {
    title: "Custom Software Development",
    description:
      "Building bespoke software solutions that solve your unique business challenges.",

    link: "/digital-solutions#custom-software",
    Icon: <GlobeLock size={20} />,
  },
];

export default ServiceDetails;
