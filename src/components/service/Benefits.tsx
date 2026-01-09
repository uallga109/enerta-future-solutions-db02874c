import { CheckCircle, Shield, Zap, TrendingUp, Leaf, Heart } from "lucide-react";

interface BenefitsProps {
  benefits: {
    title: string;
    description: string;
  }[];
}

const icons = [Shield, Zap, TrendingUp, Leaf, Heart, CheckCircle];

const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <section className="enerta-section bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/50">
      <div className="enerta-container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
          Beneficios
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative bg-card p-6 rounded-2xl border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
