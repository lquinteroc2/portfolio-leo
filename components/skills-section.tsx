'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: '🎨',
      skills: [
        'React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript',
        'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'Material-UI'
      ]
    },
    {
      title: t('skills.backend'),
      icon: '⚡',
      skills: [
        'Node.js', 'Express.js', 'NestJS', 'Python', 'PHP',
        'REST APIs', 'GraphQL', 'WebSocket', 'JWT', 'OAuth'
      ]
    },
    {
      title: t('skills.database'),
      icon: '🗄️',
      skills: [
        'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase',
        'Supabase', 'Prisma', 'Mongoose', 'Sequelize', 'TypeORM'
      ]
    },
    {
      title: t('skills.tools'),
      icon: '🛠️',
      skills: [
        'Git', 'Docker', 'AWS', 'Vercel', 'Netlify',
        'Webpack', 'Vite', 'Jest', 'Cypress', 'Figma'
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Technologies I'm Excited About</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'AI/ML', 'Web3', 'Blockchain', 'IoT', 'Microservices',
              'Serverless', 'Progressive Web Apps', 'WebAssembly', 'GraphQL',
              'Edge Computing', 'DevOps', 'CI/CD', 'Cloud Architecture'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Badge 
                  variant="outline" 
                  className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}