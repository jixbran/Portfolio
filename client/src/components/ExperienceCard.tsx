import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  techStack: string[];
}

export function ExperienceCard({
  company,
  role,
  duration,
  achievements,
  techStack,
}: ExperienceCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all relative" data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="absolute left-0 top-8 w-1 h-16 bg-gradient-to-b from-primary to-accent -ml-px" />
      
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold font-mono">{role}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
            <span className="text-primary font-medium">{company}</span>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground font-mono">{duration}</span>
          </div>
        </div>

        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-muted-foreground flex gap-3" data-testid={`achievement-${index}`}>
              <span className="text-primary mt-1.5">▹</span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs" data-testid={`badge-tech-${tech}`}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
