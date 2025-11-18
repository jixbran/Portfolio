import { Card } from '@/components/ui/card';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export function EducationCard({
  institution,
  degree,
  duration,
  location,
}: EducationCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`card-education-${institution.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold font-mono">{degree}</h3>
          <div className="text-primary font-medium mt-1">{institution}</div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
          <span className="font-mono">{duration}</span>
          <span className="hidden sm:inline">•</span>
          <span>{location}</span>
        </div>
      </div>
    </Card>
  );
}
