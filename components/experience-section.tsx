'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin } from 'lucide-react'

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading development of enterprise-level web applications using React, Node.js, and TypeScript. Mentoring junior developers and implementing best practices for code quality and performance.',
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovation Lab',
      location: 'Bogotá, Colombia',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect user interfaces and optimize application performance.',
      technologies: ['React', 'Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      location: 'Medellín, Colombia',
      period: '2021 - 2022',
      description: 'Built responsive web applications and websites for various clients. Focused on creating engaging user experiences and implementing modern design patterns.',
      technologies: ['JavaScript', 'React', 'CSS3', 'SASS', 'Webpack', 'Git']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      location: 'Cali, Colombia',
      period: '2020 - 2021',
      description: 'Started my professional journey working on various web development projects. Gained experience in both frontend and backend technologies while contributing to team success.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap']
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('experience.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                          <p className="text-primary font-medium mb-2">{experience.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}