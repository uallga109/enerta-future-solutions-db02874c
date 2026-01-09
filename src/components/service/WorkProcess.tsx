interface WorkProcessProps {
  steps: {
    title: string;
    description: string;
  }[];
}

const WorkProcess = ({ steps }: WorkProcessProps) => {
  return (
    <section className="enerta-section">
      <div className="enerta-container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
          Proceso de trabajo
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent hidden sm:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <span className="font-heading font-bold text-primary-foreground text-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card p-6 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
