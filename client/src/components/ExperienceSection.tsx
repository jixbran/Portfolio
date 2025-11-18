import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Tech AI Corp',
      role: 'Senior ML Engineer',
      duration: '2022 - Present',
      achievements: [
        'Led development of computer vision pipeline processing 10M+ images daily with 99.2% accuracy',
        'Reduced model inference latency by 60% through ONNX optimization and GPU acceleration',
        'Architected distributed training system enabling 8x faster model iteration',
        'Mentored team of 5 ML engineers on best practices and system design',
      ],
      techStack: ['PyTorch', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes'],
    },
    {
      company: 'AI Research Lab',
      role: 'Machine Learning Researcher',
      duration: '2020 - 2022',
      achievements: [
        'Published 3 papers on neural architecture search in top-tier ML conferences',
        'Developed novel attention mechanisms improving transformer efficiency by 40%',
        'Built benchmark datasets and evaluation frameworks adopted by research community',
        'Collaborated with cross-functional teams on production ML deployments',
      ],
      techStack: ['PyTorch', 'JAX', 'Python', 'CUDA', 'Weights & Biases'],
    },
    {
      company: 'Data Science Startup',
      role: 'ML Engineer',
      duration: '2018 - 2020',
      achievements: [
        'Implemented end-to-end ML pipelines for time series forecasting and anomaly detection',
        'Achieved 95% accuracy on customer churn prediction model deployed to production',
        'Optimized data processing workflows reducing training time by 70%',
        'Created internal ML tooling and libraries adopted across engineering teams',
      ],
      techStack: ['Scikit-learn', 'TensorFlow', 'PostgreSQL', 'Flask', 'Docker'],
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
            Building production ML systems at scale
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
