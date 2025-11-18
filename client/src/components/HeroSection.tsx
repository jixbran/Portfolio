import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-mono tracking-tight">
              <span className="gradient-text">Jibran Attar</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Aspiring AI/ML Engineer specializing in
              <span className="text-primary"> machine learning</span>,
              <span className="text-accent"> computer vision</span>, and
              <span className="text-primary"> full-stack development</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="font-mono"
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://github.com/jixbran', '_blank')}
              className="font-mono"
              data-testid="button-github"
            >
              GitHub
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-12">
            <Card className="p-6 hover-elevate transition-all" data-testid="card-metric-1">
              <div className="font-mono text-4xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground mt-2">ML Projects</div>
            </Card>
            <Card className="p-6 hover-elevate transition-all" data-testid="card-metric-2">
              <div className="font-mono text-4xl font-bold text-accent">81%</div>
              <div className="text-sm text-muted-foreground mt-2">Best Model Accuracy</div>
            </Card>
            <Card className="p-6 hover-elevate transition-all" data-testid="card-metric-3">
              <div className="font-mono text-4xl font-bold text-primary">2026</div>
              <div className="text-sm text-muted-foreground mt-2">Graduating</div>
            </Card>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
