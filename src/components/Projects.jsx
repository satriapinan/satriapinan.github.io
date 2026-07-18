import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Projects.css";

const ALL = "__ALL__";
const FILTER_KEYS = ["React.js", "Next.js", "Vite", "Micro-frontend", "Go", "Java Spring Boot"];

export default function Projects() {
  const { t } = useLanguage();
  const { projects, ui } = t;
  const [filter, setFilter] = useState(ALL);

  const filters = [ALL, ...FILTER_KEYS];

  const visible = useMemo(() => {
    if (filter === ALL) return projects;
    return projects.filter((p) => p.tech.some((tech) => tech.includes(filter)));
  }, [filter, projects]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="eyebrow">{ui.projectsEyebrow}</p>
        <h2 className="section__title">{ui.projectsTitle}</h2>

        <div className="projects__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`chip mono ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === ALL ? ui.filterAll : f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((p) => (
            <article className="pcard" key={p.code}>
              <div className="pcard__head">
                <span className="pcard__code mono">{p.code}</span>
                <span className="pcard__period mono">{p.period}</span>
              </div>
              <h3 className="pcard__name">{p.name}</h3>
              <p className="pcard__context mono">{p.context} · {p.role}</p>
              <p className="pcard__desc">{p.desc}</p>
              <div className="pcard__tags">
                {p.tech.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
