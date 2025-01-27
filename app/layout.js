import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css";
// import Nav from "@components/Nav";
// import Footer from "@components/Footer";
// import Top from "@components/Top";
// import Chat from "@components/Chat";
// import ChatOptions from "@components/ChatOptions";
// import CookieAlert from "@components/CookieAlert";
// import { Providers } from "./providers";

// export const metadata = {
//   title: "CV IT UP",
//   description:
//     "Transform your career with our expert CV revamp, LinkedIn optimization, interview preparation, and cover letter writing services. Stand out in today's job market and secure your dream role with our personalized career solutions.",
//   favicon: "/favicon.ico",
// };

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {children}
          {/* <Nav />
          <Providers>{children}</Providers>
          <Footer />
          <ChatOptions />
          <Chat />
          <Top />
          <CookieAlert /> */}
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
