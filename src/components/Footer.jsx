import { contact } from "../data/content";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono">© {new Date().getFullYear()} {contact.name}</p>
        <p className="mono footer__end">{t.ui.footerEnd}</p>
      </div>
    </footer>
  );
}
