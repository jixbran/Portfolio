export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-4">
            About <span className="text-accent">Me</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground">
            I'm <span className="font-semibold text-primary">Jibran Attar</span>, a Computer Engineering student 
            passionate about AI/ML and building intelligent systems. Currently pursuing my Bachelor's degree at 
            K J College of Engineering & Management Research, Pune, graduating in 2026.
          </p>

          <p className="text-muted-foreground">
            My journey in technology combines practical machine learning projects with full-stack development 
            experience. I've worked on diverse projects ranging from IPL match prediction systems to real-time 
            pose detection applications, leveraging frameworks like PyTorch, TensorFlow, and Scikit-learn.
          </p>

          <p className="text-muted-foreground">
            Currently exploring <span className="text-accent font-medium">deep learning</span>, 
            <span className="text-primary font-medium"> computer vision</span>, and 
            <span className="text-accent font-medium"> NLP applications</span>. I'm eager to contribute to 
            innovative AI/ML projects and continue learning cutting-edge technologies in the field.
          </p>

          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-publications">
              <div className="text-3xl font-bold font-mono text-primary">2026</div>
              <div className="text-sm text-muted-foreground mt-1">Graduation</div>
            </div>
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-years">
              <div className="text-3xl font-bold font-mono text-accent">3+</div>
              <div className="text-sm text-muted-foreground mt-1">ML Projects</div>
            </div>
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-projects">
              <div className="text-3xl font-bold font-mono text-primary">81%</div>
              <div className="text-sm text-muted-foreground mt-1">Best Accuracy</div>
            </div>
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-citations">
              <div className="text-3xl font-bold font-mono text-accent">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Tech Skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
