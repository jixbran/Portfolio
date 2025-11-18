import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  techStack,
  metrics,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all group" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-video overflow-hidden bg-card border-b border-card-border">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold font-mono mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs" data-testid={`badge-tech-${tech}`}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-1" data-testid={`metric-${metric.label}`}>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
              <div className="text-lg font-mono font-semibold text-primary">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(githubUrl, '_blank')}
              className="flex-1 font-mono"
              data-testid="button-github"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {demoUrl && (
            <Button
              size="sm"
              onClick={() => window.open(demoUrl, '_blank')}
              className="flex-1 font-mono"
              data-testid="button-demo"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
