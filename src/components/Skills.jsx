import { skills } from "../data/content";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Skills.css";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="eyebrow">{t.ui.skillsEyebrow}</p>
        <h2 className="section__title">{t.ui.skillsTitle}</h2>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__group" key={group.group}>
              <p className="skills__label mono">{group.group}</p>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
