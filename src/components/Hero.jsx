import { contact } from "../data/content";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">{t.ui.heroEyebrow}</p>

          <p className="hero__codeline mono">{t.ui.heroCodeline}</p>
          <h1 className="hero__name">
            Satria Pinandita
            <br />
            Abyatarsyah
          </h1>

          <p className="hero__role mono">{contact.role}</p>

          <p className="hero__tagline">{t.profile.tagline}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="/Satria_Pinandita_Abyatarsyah-CV.pdf" download>
              {t.ui.ctaDownload}
            </a>
            <a className="btn btn--ghost" href="#contact">
              {t.ui.ctaContact}
            </a>
          </div>
        </div>

        <aside className="hero__panel">
          <p className="hero__panel-title mono">{t.ui.statusTitle}</p>
          <ul className="hero__panel-list mono">
            <li><span className="dot dot--live" />{t.ui.statusRole}</li>
            <li><span className="dot" />{t.ui.statusBase}: {t.profile.location}</li>
            <li><span className="dot" />{t.ui.statusFocus}</li>
            <li><span className="dot" />{t.ui.statusExperience}</li>
            <li><span className="dot" />{t.ui.statusLang}: {t.ui.languageNames}</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
