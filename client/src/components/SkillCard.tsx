import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`card-skill-${title.toLowerCase()}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-md">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold font-mono">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2" data-testid={`skill-${skill.name}`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <Badge variant="secondary" className="font-mono text-xs">
                {skill.level}%
              </Badge>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
