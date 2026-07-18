import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import RouteLine from "./components/RouteLine.jsx";
import { useScrollProgress } from "./useScrollProgress.js";
import { useLanguage } from "./context/LanguageContext.jsx";

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"];

export default function App() {
  const progress = useScrollProgress();
  const { t } = useLanguage();
  const [waypoints, setWaypoints] = useState([]);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    document.title = t.ui.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.ui.metaDescription);
  }, [t]);

  useEffect(() => {
    const routeLabels = {
      about: t.ui.routeAbout,
      experience: t.ui.routeExperience,
      projects: t.ui.routeProjects,
      skills: t.ui.routeSkills,
      contact: t.ui.routeContact,
    };

    const measure = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;

      const rawWp = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        let ratio = (el.offsetTop - doc.clientHeight * 0.3) / total;
        return { id, label: routeLabels[id], ratio: Math.max(0, Math.min(1, ratio)) };
      }).filter(Boolean);

      const minDistance = 0.12;
      for (let i = 1; i < rawWp.length; i++) {
        if (rawWp[i].ratio - rawWp[i - 1].ratio < minDistance) {
          rawWp[i].ratio = rawWp[i - 1].ratio + minDistance;
        }
      }

      if (rawWp.length > 0 && rawWp[rawWp.length - 1].ratio > 1) {
        rawWp[rawWp.length - 1].ratio = 1;
        for (let i = rawWp.length - 2; i >= 0; i--) {
          if (rawWp[i + 1].ratio - rawWp[i].ratio < minDistance) {
            rawWp[i].ratio = rawWp[i + 1].ratio - minDistance;
          }
        }
      }

      setWaypoints(rawWp);
    };

    measure();
    window.addEventListener("resize", measure);
    const timer = setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timer);
    };
  }, [t]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.3;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }

      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      
      if (scrollHeight > 0 && scrollTop >= scrollHeight - 50) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }

      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <RouteLine progress={progress} waypoints={waypoints} activeId={activeId} />
      <Nav activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
