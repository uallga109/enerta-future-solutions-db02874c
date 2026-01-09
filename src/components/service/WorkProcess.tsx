interface WorkProcessProps {
  steps: {
    title: string;
    description: string;
  }[];
  image?: string;
}

const WorkProcess = ({ steps, image }: WorkProcessProps) => {
  return (
    <section 
      className="enerta-section relative"
      style={image ? {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      <div className="enerta-container relative z-10">
        <h2 className={`font-heading text-2xl sm:text-3xl font-bold mb-12 text-center ${image ? 'text-white' : 'text-foreground'}`}>
          Proceso de trabajo
        </h2>
        
        {/* Timeline centered */}
        <div className="max-w-2xl mx-auto">
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
                    <div className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                      image 
                        ? 'bg-white/95 border-white/20 hover:bg-white hover:shadow-lg' 
                        : 'bg-card border-border hover:border-primary hover:shadow-lg'
                    }`}>
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
      </div>
    </section>
  );
};

export default WorkProcess;
