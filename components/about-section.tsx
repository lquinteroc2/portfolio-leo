'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { Card, CardContent } from '@/components/ui/card'

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { number: '3+', label: t('about.stats.experience') },
    { number: '50+', label: t('about.stats.projects') },
    { number: '15+', label: t('about.stats.technologies') },
    { number: '25+', label: t('about.stats.clients') },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With expertise in React, Node.js, TypeScript, and modern cloud technologies, 
              I focus on creating robust, scalable solutions that drive business growth and 
              enhance user satisfaction.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">
                  Creating responsive and interactive user interfaces with modern frameworks
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Backend Development</h3>
                <p className="text-sm text-muted-foreground">
                  Building scalable APIs and server-side applications with Node.js
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="font-semibold mb-2">DevOps & Cloud</h3>
                <p className="text-sm text-muted-foreground">
                  Deploying and managing applications on modern cloud platforms
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold mb-2">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">
                  Designing intuitive and user-friendly digital experiences
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}