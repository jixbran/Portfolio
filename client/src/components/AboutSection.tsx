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
            I'm an <span className="font-semibold text-primary">AI/ML Engineer</span> specializing in deep learning, 
            computer vision, and neural architecture design. With a strong foundation in mathematics and 
            computer science, I build intelligent systems that solve real-world problems at scale.
          </p>

          <p className="text-muted-foreground">
            My expertise spans the entire ML lifecycle—from research and experimentation to production 
            deployment and optimization. I'm passionate about pushing the boundaries of what's possible 
            with machine learning while maintaining a focus on practical, scalable solutions.
          </p>

          <p className="text-muted-foreground">
            Currently exploring <span className="text-accent font-medium">neural architecture search</span>, 
            <span className="text-primary font-medium"> efficient transformers</span>, and 
            <span className="text-accent font-medium"> multi-modal learning</span>. Always excited to 
            collaborate on challenging ML problems and contribute to the open-source community.
          </p>

          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-publications">
              <div className="text-3xl font-bold font-mono text-primary">12</div>
              <div className="text-sm text-muted-foreground mt-1">Publications</div>
            </div>
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-years">
              <div className="text-3xl font-bold font-mono text-accent">6+</div>
              <div className="text-sm text-muted-foreground mt-1">Years</div>
            </div>
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-projects">
              <div className="text-3xl font-bold font-mono text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center p-4 border border-border rounded-md hover-elevate transition-all" data-testid="stat-citations">
              <div className="text-3xl font-bold font-mono text-accent">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Citations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
