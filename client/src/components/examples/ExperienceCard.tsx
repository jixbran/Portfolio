import { ExperienceCard } from '../ExperienceCard';

export default function ExperienceCardExample() {
  return (
    <div className="max-w-3xl">
      <ExperienceCard
        company="Tech AI Corp"
        role="Senior ML Engineer"
        duration="2022 - Present"
        achievements={[
          'Led development of computer vision pipeline processing 10M+ images daily',
          'Reduced model inference latency by 60% through optimization',
          'Architected distributed training system for large-scale models',
        ]}
        techStack={['PyTorch', 'TensorFlow', 'AWS', 'Docker']}
      />
    </div>
  );
}
