import { createContext, useContext, useState } from "react";

type Language = "fr" | "en" | "zh" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    "site.title": "Expert Topographe",
    "nav.services": "Services",
    "nav.expertise": "Expertise",
    "nav.contact": "Contact",
    "hero.title": "Ets TCHANTEO",
    "hero.subtitle": " & Fils",
    "hero.description": "Production et distribution des produits alimentaires, BTP et Commerce General. Expertise technique et précision au service de vos projets d'aménagement, construction et délimitation foncière.",
    "hero.cta1": "Découvrir nos Services",
    "hero.cta2": "Nous Contacter",
    "button.quote": "Devis Gratuit",
    "services.title": "Nos Services Professionnels",
    "services.description": "Une gamme complète de services topographiques pour répondre à tous vos besoins",
    "surveyor.name": "TCHANTEO KAMO Hervé"
  },
  en: {
    "site.title": "Expert Surveyor",
    "nav.services": "Services",
    "nav.expertise": "Expertise",
    "nav.contact": "Contact",
    "hero.title": ".",
    "hero.subtitle": "Ets TCHANTEO & Fils",
    "hero.description": "Technical expertise and precision at the service of your development, construction and land delimitation projects.",
    "hero.cta1": "Discover our Services",
    "hero.cta2": "Contact Us",
    "button.quote": "Free Quote",
    "services.title": "Our Professional Services",
    "services.description": "A complete range of topographic services to meet all your needs",
    "surveyor.name": "TCHANTEO KAMO Hervé"
  },
  zh: {
    "site.title": "专业测量师",
    "nav.services": "服务",
    "nav.expertise": "专业知识",
    "nav.contact": "联系我们",
    "hero.title": "专业",
    "hero.subtitle": "测量师",
    "hero.description": "技术专长和精确度为您的开发、建设和土地划界项目服务。",
    "hero.cta1": "了解我们的服务",
    "hero.cta2": "联系我们",
    "button.quote": "免费报价",
    "services.title": "我们的专业服务",
    "services.description": "全面的地形测量服务，满足您的所有需求",
    "surveyor.name": "TCHANTEO KAMO Hervé"
  },
  es: {
    "site.title": "Topógrafo Experto",
    "nav.services": "Servicios",
    "nav.expertise": "Experiencia",
    "nav.contact": "Contacto",
    "hero.title": "Topógrafo",
    "hero.subtitle": "Profesional",
    "hero.description": "Experiencia técnica y precisión al servicio de sus proyectos de desarrollo, construcción y delimitación de tierras.",
    "hero.cta1": "Descubrir nuestros Servicios",
    "hero.cta2": "Contáctanos",
    "button.quote": "Presupuesto Gratis",
    "services.title": "Nuestros Servicios Profesionales",
    "services.description": "Una gama completa de servicios topográficos para satisfacer todas sus necesidades",
    "surveyor.name": "TCHANTEO KAMO Hervé"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};