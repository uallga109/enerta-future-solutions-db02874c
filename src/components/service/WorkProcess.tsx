interface WorkProcessProps {
  steps: {
    title: string;
    description: string;
  }[];
  image?: string;
}

const WorkProcess = ({ steps, image }: WorkProcessProps) => {
  return (
    <section className="enerta-section">
      <div className="enerta-container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
          Proceso de trabajo
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent hidden sm:block" />
              
              <div className="space-y-6">
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
                    <div className="flex-1 pb-2">
                      <div className="bg-card p-5 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent rounded-3xl" />
              <img
                src={image}
                alt="Proceso de trabajo"
                className="relative rounded-2xl shadow-enerta-elevated w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
