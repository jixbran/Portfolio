import { EducationCard } from './EducationCard';

export function EducationSection() {
  const education = [
    {
      institution: 'K J College of Engineering & Management Research',
      degree: 'Bachelor of Engineering in Computer Engineering',
      duration: '2022 - 2026',
      location: 'Pune',
    },
    {
      institution: 'Nowrosjee Wadia College',
      degree: 'Higher Secondary Education (11th & 12th)',
      duration: '2020 - 2022',
      location: 'Pune',
    },
    {
      institution: 'Sinhgad City School (CBSE Board)',
      degree: 'Secondary Education (10th)',
      duration: 'Till 2020',
      location: 'Pune',
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4">
            Academic <span className="text-accent">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.institution} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
