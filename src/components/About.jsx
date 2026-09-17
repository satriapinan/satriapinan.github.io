import { useLanguage } from "../context/LanguageContext.jsx";
import "./About.css";

export default function About() {
  const { t } = useLanguage();
  const { education, profile, ui } = t;

  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="eyebrow">{ui.aboutEyebrow}</p>
        <h2 className="section__title">{ui.aboutTitle}</h2>

        <div className="about__grid">
          <div>
            <p className="about__summary">{profile.summary}</p>
            <div className="about__links">
              <a className="about__link mono" href="#experience">
                {ui.aboutCtaExperience}
              </a>
              <a className="about__link mono" href="#projects">
                {ui.aboutCtaProjects}
              </a>
            </div>
          </div>

          <div className="about__side">
            <div className="about__block">
              <h3 className="about__label mono">{ui.labelEducation}</h3>
              <p className="about__value">{education.school}</p>
              <p className="about__meta mono">{education.degree} · {education.period}</p>
            </div>

            <div className="about__block">
              <h3 className="about__label mono">{ui.labelLanguage}</h3>
              <p className="about__value">{ui.languageNames}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
