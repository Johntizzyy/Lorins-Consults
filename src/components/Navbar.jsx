import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import blueLogo from "../assets/blue-logo.png";
import whiteLogo from "../assets/white-logo.png";
import logoo from "../assets/lcologo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return path !== "/" && location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-3"
      }`}
      style={{ position: "fixed", width: "100%" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={scrolled ? blueLogo : whiteLogo}
                alt="lorins consults logo"
                style={{ height: "50px" }}
              />

              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"> */}
                {/* <img src={logo} alt="lc-logo" /> */}
                {/*<svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>*/}
              </div>
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-blue-600" : "text-white"
                }`}
              >
                {/* Lorins Consults */}
              </span>
            </Link>

            {/* Professional Surveying Services Badge */}
            <div
              className={`hidden sm:inline-flex items-center rounded-full px-4 py-1.5 mt-2 text-xs font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-white/90"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  scrolled ? "bg-blue-500" : "bg-green-400"
                } animate-pulse`}
              ></div>
              <span>Professional Surveying Services</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? scrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/+2347037905846?text=${encodeURIComponent(
                "Hello! I would like to get a quote for your surveying and landscaping services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Navigation Button */} 
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon
                className={`h-6 w-6 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Bars3Icon
                className={`h-6 w-6 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="bg-white rounded-xl shadow-xl p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-gray-700 ${
                      isActive(link.path)
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t">
                  <a
                    href={`https://wa.me/+2347037905846?text=${encodeURIComponent(
                      "Hello! I would like to get a quote for your surveying and landscaping services."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
