import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Prices } from "./pages/Prices/Prices";
import { About } from "./pages/About/About";
import { Contacts } from "./pages/Contacts/Contacts";
import { Logo } from "./components/Logo/Logo";
import { Footer } from "./components/Footer/Footer";
import { CookieConsent } from "./components/Cookies/CookieConsent";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext";

export const App = () => {
  return (
    <LanguageProvider> 
    <div className="layout">
      <CookieConsent />
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Logo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
};
