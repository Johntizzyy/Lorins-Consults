import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

// ScrollToTop component to handle scroll behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll behavior and add a tiny delay
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10); // Small delay (10ms)

    // Also set scroll restoration to manual here
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow w-full" style={{ marginTop: "0px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
