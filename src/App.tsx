import Navbar from "./components/ui/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import Chatbot from "./components/Chatbot";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./contexts/themProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // handel shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.altKey) return;

      const key = e.key.toLowerCase();

      switch (key) {
        case "d":
          e.preventDefault();
          const link = document.createElement("a");
          link.href = "/resume.pdf";
          link.download = "Amit_Bhagat_Resume.pdf";
          link.click();
          break;
        case "a":
          e.preventDefault();
          navigate("/about");
          break;
        case "c":
          e.preventDefault();
          navigate("/contact");
          break;
        case "l":
          e.preventDefault();
          setTheme(theme === "dark" ? "light" : "dark");
          break;
        case "h":
          e.preventDefault();
          navigate("/");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, setTheme, theme]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-[80%] lg:w-1/2 p-1 mb-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
