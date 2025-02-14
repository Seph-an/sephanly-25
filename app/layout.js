import "@styles/globals.css";
import { Providers } from "./Providers";
import Nav from "@components/Common/Header";
import Footer from "@components/Common/Footer";
import Chat from "@components/Common/Chat/Chat";
import ChatOptions from "@components/Common/Chat/ChatOptions";
import Top from "@components/Common/Top";
import CookieAlert from "@components/Common/CookieAlert";

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
            <Chat />
            <ChatOptions />
            <Top />
            <CookieAlert />
          </main>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
