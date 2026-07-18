import { contact } from "../data/content";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();
  const { ui } = t;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="eyebrow">{ui.contactEyebrow}</p>
        <h2 className="section__title">{ui.contactTitle}</h2>

        <div className="contact__grid">
          <p className="contact__text">{ui.contactText}</p>

          <div className="contact__links">
            <a className="contact__link" href={`mailto:${contact.email}`}>
              <span className="contact__link-label mono">{ui.linkEmail}</span>
              <span className="contact__link-value">{contact.email}</span>
            </a>
            <a className="contact__link" href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
              <span className="contact__link-label mono">{ui.linkLinkedin}</span>
              <span className="contact__link-value">{contact.linkedin}</span>
            </a>
            <a className="contact__link" href={`https://${contact.github}`} target="_blank" rel="noreferrer">
              <span className="contact__link-label mono">{ui.linkGithub}</span>
              <span className="contact__link-value">{contact.github}</span>
            </a>
            <a className="contact__link" href={`tel:${contact.phone.replace(/\s|-/g, "")}`}>
              <span className="contact__link-label mono">{ui.linkPhone}</span>
              <span className="contact__link-value">{contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
