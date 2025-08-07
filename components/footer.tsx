'use client'

import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
              Leonardo Quintero
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating amazing web experiences.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>leonardo.quintero@email.com</p>
              <p>+57 (300) 123-4567</p>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Leonardo Quintero. {t('footer.rights')}
          </p>
          <p className="text-muted-foreground mt-2">
            {t('footer.made')}
          </p>
        </div>
      </div>
    </footer>
  )
}