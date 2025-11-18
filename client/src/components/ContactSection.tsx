import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText('jibran2004attar@gmail.com');
    toast({
      title: 'Email copied!',
      description: 'The email address has been copied to your clipboard.',
    });
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/jixbran',
      color: 'hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/jibran19',
      color: 'hover:text-accent',
    },
    {
      icon: Mail,
      label: 'Email',
      onClick: copyEmail,
      color: 'hover:text-primary',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in collaborating or discussing ML opportunities? Let's build something intelligent together.
          </p>
        </div>

        <Card className="p-8 text-center space-y-8">
          <div className="space-y-2">
            <div className="text-2xl font-mono font-bold">Get in Touch</div>
            <div className="text-muted-foreground">
              Available for consulting, collaboration, and full-time opportunities
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return link.onClick ? (
                <Button
                  key={link.label}
                  variant="outline"
                  size="lg"
                  onClick={link.onClick}
                  className={`font-mono ${link.color} transition-colors`}
                  data-testid={`button-${link.label.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {link.label}
                </Button>
              ) : (
                <Button
                  key={link.label}
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(link.url, '_blank')}
                  className={`font-mono ${link.color} transition-colors`}
                  data-testid={`button-${link.label.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {link.label}
                </Button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono">
              jibran2004attar@gmail.com
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              +91 9819961411
            </p>
          </div>
        </Card>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Jibran Attar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
