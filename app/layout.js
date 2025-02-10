import "@styles/globals.css";
import { Providers } from "./Providers";
import Nav from "@components/Common/Header";
import Footer from "@components/Common/Footer";
import Top from "@components/Common/Top";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Providers>
          <main className="app">
            <Nav />
            {children}
            <Footer />
            <Top />
            {/* <Nav />
          <Providers>{children}</Providers>
          <Footer />
          <ChatOptions />
          <Chat />
          <Top />
          <CookieAlert /> */}
          </main>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
