'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Message sent successfully! I\'ll get back to you soon.')
    setIsSubmitting(false)
    
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'leonardo.quintero@email.com',
      href: 'mailto:leonardo.quintero@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+57 (300) 123-4567',
      href: 'tel:+573001234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bogotá, Colombia',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Why Work With Me?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ 3+ years of professional experience</li>
                  <li>✅ Expertise in modern web technologies</li>
                  <li>✅ Strong focus on user experience</li>
                  <li>✅ Agile development methodologies</li>
                  <li>✅ Clear communication and timely delivery</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t('contact.form.name')}</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        className="mt-1"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="mt-1"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      required 
                      className="mt-1"
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5} 
                      className="mt-1"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}