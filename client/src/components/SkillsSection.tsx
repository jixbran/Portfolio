import { SkillCard } from './SkillCard';
import { Brain, Code, Database } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'ML & Data Science',
      icon: Brain,
      skills: [
        { name: 'PyTorch', level: 85 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Pandas', level: 92 },
        { name: 'NumPy', level: 90 },
      ],
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 82 },
        { name: 'HTML/CSS', level: 88 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'MongoDB', level: 80 },
        { name: 'React', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'Streamlit', level: 85 },
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
