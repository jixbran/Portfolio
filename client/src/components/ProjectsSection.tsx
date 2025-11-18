import { ProjectCard } from './ProjectCard';
import neuralNetImg from '@assets/generated_images/Neural_network_architecture_diagram_778edf7d.png';
import cvModelImg from '@assets/generated_images/CV_model_performance_metrics_6f6dd7f0.png';
import nlpTransformerImg from '@assets/generated_images/NLP_transformer_visualization_2badcbb8.png';
import rlDashboardImg from '@assets/generated_images/RL_training_dashboard_e08b6d1c.png';
import trainingConvergenceImg from '@assets/generated_images/Model_training_convergence_03f54f11.png';
import timeSeriesImg from '@assets/generated_images/Time_series_forecasting_results_cf1f03a3.png';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Neural Architecture Search',
      description: 'Automated neural network architecture optimization using reinforcement learning and evolutionary algorithms to discover high-performance models.',
      image: neuralNetImg,
      techStack: ['PyTorch', 'Python', 'CUDA', 'Ray'],
      metrics: [
        { label: 'Accuracy', value: '98.5%' },
        { label: 'Latency', value: '12ms' },
      ],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      title: 'Computer Vision Pipeline',
      description: 'End-to-end object detection and segmentation system achieving state-of-the-art results on COCO dataset with real-time inference.',
      image: cvModelImg,
      techStack: ['TensorFlow', 'OpenCV', 'Docker'],
      metrics: [
        { label: 'mAP', value: '94.2%' },
        { label: 'FPS', value: '60' },
      ],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Transformer Language Model',
      description: 'Custom transformer architecture for natural language understanding with attention visualization and interpretability features.',
      image: nlpTransformerImg,
      techStack: ['PyTorch', 'Hugging Face', 'ONNX'],
      metrics: [
        { label: 'BLEU Score', value: '42.8' },
        { label: 'Perplexity', value: '15.3' },
      ],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
    {
      title: 'Reinforcement Learning Agent',
      description: 'Deep Q-Network implementation for autonomous decision-making in complex environments with continuous action spaces.',
      image: rlDashboardImg,
      techStack: ['PyTorch', 'Gym', 'Stable Baselines'],
      metrics: [
        { label: 'Avg Reward', value: '1250' },
        { label: 'Success Rate', value: '92%' },
      ],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Deep Learning Training Pipeline',
      description: 'Scalable distributed training infrastructure for large-scale models with automatic hyperparameter tuning and monitoring.',
      image: trainingConvergenceImg,
      techStack: ['PyTorch Lightning', 'Weights & Biases', 'Kubernetes'],
      metrics: [
        { label: 'Speedup', value: '8x' },
        { label: 'Models Trained', value: '500+' },
      ],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Time Series Forecasting',
      description: 'LSTM-based forecasting model for financial data prediction with uncertainty quantification and anomaly detection.',
      image: timeSeriesImg,
      techStack: ['TensorFlow', 'Pandas', 'SQL'],
      metrics: [
        { label: 'RMSE', value: '0.043' },
        { label: 'R² Score', value: '0.96' },
      ],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-ready ML systems built with modern frameworks and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
