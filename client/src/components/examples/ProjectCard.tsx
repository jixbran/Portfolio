import { ProjectCard } from '../ProjectCard';
import neuralNetImg from '@assets/generated_images/Neural_network_architecture_diagram_778edf7d.png';

export default function ProjectCardExample() {
  return (
    <div className="max-w-lg">
      <ProjectCard
        title="Neural Architecture Search"
        description="Automated neural network architecture optimization using reinforcement learning and evolutionary algorithms."
        image={neuralNetImg}
        techStack={['PyTorch', 'Python', 'CUDA']}
        metrics={[
          { label: 'Accuracy', value: '98.5%' },
          { label: 'Latency', value: '12ms' },
        ]}
        githubUrl="https://github.com"
        demoUrl="https://demo.com"
      />
    </div>
  );
}
