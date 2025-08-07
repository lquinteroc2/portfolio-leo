'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface LanguageContextType {
  language: 'en' | 'es'
  setLanguage: (lang: 'en' | 'es') => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'I create modern web applications with cutting-edge technologies and best practices',
    'hero.cta.contact': 'Get In Touch',
    'hero.cta.projects': 'View Projects',
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about creating exceptional digital experiences',
    'about.description': 'I\'m a dedicated Full Stack Developer with expertise in modern web technologies. I love building scalable applications that solve real-world problems and deliver outstanding user experiences.',
    'about.stats.experience': 'Years Experience',
    'about.stats.projects': 'Projects Completed',
    'about.stats.technologies': 'Technologies',
    'about.stats.clients': 'Happy Clients',
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My journey in software development',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent work',
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies I work with',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools & Others',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s work together on your next project',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with ❤️ using Next.js'
  },
  es: {
    'nav.about': 'Acerca',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Full Stack',
    'hero.subtitle': 'Creo aplicaciones web modernas con tecnologías de vanguardia y mejores prácticas',
    'hero.cta.contact': 'Contactame',
    'hero.cta.projects': 'Ver Proyectos',
    'about.title': 'Acerca de Mí',
    'about.subtitle': 'Apasionado por crear experiencias digitales excepcionales',
    'about.description': 'Soy un Desarrollador Full Stack dedicado con experiencia en tecnologías web modernas. Me encanta construir aplicaciones escalables que resuelven problemas del mundo real y brindan experiencias de usuario excepcionales.',
    'about.stats.experience': 'Años de Experiencia',
    'about.stats.projects': 'Proyectos Completados',
    'about.stats.technologies': 'Tecnologías',
    'about.stats.clients': 'Clientes Satisfechos',
    'experience.title': 'Experiencia Profesional',
    'experience.subtitle': 'Mi trayectoria en desarrollo de software',
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Algunos de mis trabajos recientes',
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologías con las que trabajo',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas y Otros',
    'contact.title': 'Contáctame',
    'contact.subtitle': 'Trabajemos juntos en tu próximo proyecto',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Tu Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.made': 'Hecho con ❤️ usando Next.js'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'es'>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}