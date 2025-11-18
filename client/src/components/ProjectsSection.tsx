import { ProjectCard } from './ProjectCard';
import trainingConvergenceImg from '@assets/generated_images/Model_training_convergence_03f54f11.png';
import nlpTransformerImg from '@assets/generated_images/NLP_transformer_visualization_2badcbb8.png';
import cvModelImg from '@assets/generated_images/CV_model_performance_metrics_6f6dd7f0.png';

export function ProjectsSection() {
  const projects = [
    {
      title: 'IPL Match Analytics Engine',
      description: 'Engineered an advanced win predictor for IPL matches using Logistic Regression, achieving 81% accuracy. Performed feature engineering on a dataset of 1000+ matches, incorporating team form, venue stats, and head-to-head records.',
      image: trainingConvergenceImg,
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Logistic Regression'],
      metrics: [
        { label: 'Accuracy', value: '81%' },
        { label: 'Dataset Size', value: '1000+' },
      ],
      githubUrl: 'https://github.com/jixbran',
    },
    {
      title: 'Content-Based Recommendation Engine',
      description: 'Built a movie recommender using NLP to analyze genres, cast, and plot metadata. Utilized TF-IDF vectorization and cosine similarity to rank movies based on user input.',
      image: nlpTransformerImg,
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'NLP'],
      metrics: [
        { label: 'Algorithm', value: 'TF-IDF' },
        { label: 'Similarity', value: 'Cosine' },
      ],
      githubUrl: 'https://github.com/jixbran',
    },
    {
      title: 'Pose Detection & Form Correction',
      description: 'Implemented real-time pose estimation using MediaPipe to detect and visualize key body landmarks. Designed a feedback system analyzing joint angles to alert users with posture corrections.',
      image: cvModelImg,
      techStack: ['Python', 'MediaPipe', 'OpenCV', 'NumPy'],
      metrics: [
        { label: 'Detection', value: 'Real-time' },
        { label: 'Feedback', value: 'Live' },
      ],
      githubUrl: 'https://github.com/jixbran',
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
            Machine learning projects showcasing practical applications and real-world problem solving
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
