import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content } from "../data/content";

const LanguageContext = createContext(null);

function detectInitialLang() {
  if (typeof window === "undefined") return "id";
  const stored = window.localStorage.getItem("lang");
  if (stored === "id" || stored === "en") return stored;
  const browser = window.navigator.language || "id";
  return browser.toLowerCase().startsWith("id") ? "id" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === "id" ? "en" : "id")),
      t: content[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
