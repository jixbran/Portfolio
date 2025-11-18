import { SkillCard } from './SkillCard';
import { Brain, Code, Database } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'ML Frameworks',
      icon: Brain,
      skills: [
        { name: 'PyTorch', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'Hugging Face', level: 85 },
        { name: 'JAX', level: 80 },
      ],
    },
    {
      title: 'Languages & Tools',
      icon: Code,
      skills: [
        { name: 'Python', level: 98 },
        { name: 'C++', level: 85 },
        { name: 'CUDA', level: 82 },
        { name: 'Docker', level: 90 },
        { name: 'Git', level: 95 },
      ],
    },
    {
      title: 'Data & Cloud',
      icon: Database,
      skills: [
        { name: 'SQL', level: 88 },
        { name: 'AWS', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Kubernetes', level: 78 },
        { name: 'MLflow', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the modern ML engineering stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
