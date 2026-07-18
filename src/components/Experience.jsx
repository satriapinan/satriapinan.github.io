import { useLanguage } from "../context/LanguageContext.jsx";
import "./Experience.css";

export default function Experience() {
  const { t } = useLanguage();
  const { experience, ui } = t;

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="eyebrow">{ui.experienceEyebrow}</p>
        <h2 className="section__title">{ui.experienceTitle}</h2>

        <ol className="experience__list">
          {experience.map((job) => (
            <li className="experience__item" key={job.code}>
              <div className="experience__marker">
                <span className={`experience__dot ${job.current ? "is-current" : ""}`} />
                <span className="experience__code mono">{job.code}</span>
              </div>

              <div className="experience__body">
                <div className="experience__head">
                  <div>
                    <h3 className="experience__company">{job.company}</h3>
                    <p className="experience__role">{job.role} — {job.place}</p>
                  </div>
                  <span className={`experience__period mono ${job.current ? "is-current" : ""}`}>
                    {job.period}
                  </span>
                </div>

                <ul className="experience__points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
