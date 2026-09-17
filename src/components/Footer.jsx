import { contact } from "../data/content";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { id: "home", label: "home" },
    { id: "about", label: t.ui.routeAbout },
    { id: "experience", label: t.ui.routeExperience },
    { id: "projects", label: t.ui.routeProjects },
    { id: "skills", label: t.ui.routeSkills },
    { id: "contact", label: t.ui.routeContact },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <nav className="footer__links" aria-label="Footer quick links">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="footer__link mono">
                #{l.label}
              </a>
            ))}
          </nav>
          <a href="#home" className="footer__top mono">
            {t.ui.footerBackToTop}
          </a>
        </div>
        <div className="footer__inner">
          <p className="mono">© {new Date().getFullYear()} {contact.name}</p>
          <p className="mono footer__end">{t.ui.footerEnd}</p>
        </div>
      </div>
    </footer>
  );
}
