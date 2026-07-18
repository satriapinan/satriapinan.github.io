import { softSkills } from "../data/content";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./About.css";

export default function About() {
  const { t } = useLanguage();
  const { education, organizations, profile, ui } = t;

  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="eyebrow">{ui.aboutEyebrow}</p>
        <h2 className="section__title">{ui.aboutTitle}</h2>

        <div className="about__grid">
          <p className="about__summary">{profile.summary}</p>

          <div className="about__side">
            <div className="about__block">
              <p className="about__label mono">{ui.labelEducation}</p>
              <p className="about__value">{education.school}</p>
              <p className="about__meta mono">{education.degree} · {education.period}</p>
            </div>

            <div className="about__block">
              <p className="about__label mono">{ui.labelLanguage}</p>
              <p className="about__value">{ui.languageNames}</p>
            </div>

            <div className="about__block">
              <p className="about__label mono">{ui.labelSoftSkills}</p>
              <div className="about__tags">
                {softSkills.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="about__block">
              <p className="about__label mono">{ui.labelOrganizations}</p>
              {organizations.map((o) => (
                <p className="about__meta" key={o.role}>
                  <span className="about__value">{o.role}</span> — {o.org}
                  <span className="mono about__period"> · {o.period}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
