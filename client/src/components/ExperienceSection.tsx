import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'AICTE & EY Global Delivery Services',
      role: 'MERN Stack Development Intern',
      duration: 'Feb 2025 - Mar 2025',
      achievements: [
        'Successfully completed a 6-week internship under the Next Gen Employability Program',
        'Built modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
        'Gained hands-on experience in frontend & backend integration, REST API development, and database management',
        'Collaborated in a structured, industry-oriented program to enhance employability and technical proficiency',
      ],
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in full-stack development and ML engineering
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-8 pl-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
