import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // { name: "Home", href: "#home" },
    // { name: "Our Facility", href: "#facility" },
    // { name: "Our Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <img src="../public/favicon.png"  alt="Logo" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-foreground">
              Resrishti
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8  ">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
            {/* <Button
              onClick={() => scrollToSection("#contact")}
              className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity rounded-full px-6"
            >
              Get a Quote
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              {/* <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity rounded-full"
              >
                Get a Quote
              </Button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
