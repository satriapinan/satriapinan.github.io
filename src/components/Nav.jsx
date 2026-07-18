import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import "./Nav.css";

export default function Nav({ activeId }) {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { id: "about", label: t.ui.navAbout },
    { id: "experience", label: t.ui.navExperience },
    { id: "projects", label: t.ui.navProjects },
    { id: "skills", label: t.ui.navSkills },
    { id: "contact", label: t.ui.navContact },
  ];

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#home" className="nav__brand mono" onClick={() => setOpen(false)}>
          satria<span className="nav__at">@</span>portfolio<span className="nav__cursor">_</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link mono ${activeId === l.id ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__switch mono"
            onClick={toggleLang}
            aria-label={t.ui.langToggle}
            title={t.ui.langToggle}
          >
            <span className={lang === "id" ? "is-on" : ""}>ID</span>
            <span className="nav__switch-sep">/</span>
            <span className={lang === "en" ? "is-on" : ""}>EN</span>
          </button>

          <button
            className="nav__switch mono"
            onClick={toggleTheme}
            aria-label={t.ui.themeToggle}
            title={t.ui.themeToggle}
          >
            <span className={theme === "dark" ? "is-on" : ""}>dark</span>
            <span className="nav__switch-sep">/</span>
            <span className={theme === "light" ? "is-on" : ""}>light</span>
          </button>

          <button
            className="nav__toggle mono"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.ui.menuAriaLabel}
            aria-expanded={open}
          >
            {open ? t.ui.menuClose : t.ui.menuOpen}
          </button>
        </div>
      </div>
    </header>
  );
}
