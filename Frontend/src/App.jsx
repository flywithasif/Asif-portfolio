import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Engineering from "./pages/Engineering";
import Experience from "./pages/Experience";
import GitHub from "./pages/GitHub";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-hidden bg-[#070707] text-[#f4f1eb]">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />

          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />

          <Route
            path="/engineering"
            element={
              <PageTransition>
                <Engineering />
              </PageTransition>
            }
          />

          <Route
            path="/experience"
            element={
              <PageTransition>
                <Experience />
              </PageTransition>
            }
          />

          <Route
            path="/github"
            element={
              <PageTransition>
                <GitHub />
              </PageTransition>
            }
          />

          <Route
            path="/resume"
            element={
              <PageTransition>
                <Resume />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
