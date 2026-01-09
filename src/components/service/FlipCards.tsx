import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface FlipCardsProps {
  subservices: {
    title: string;
    description: string;
    image?: string;
  }[];
}

const FlipCard = ({ 
  title, 
  description, 
  image, 
  index 
}: { 
  title: string; 
  description: string; 
  image?: string; 
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-64 perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full enerta-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Imagen próximamente</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-4">
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlipCards = ({ subservices }: FlipCardsProps) => {
  return (
    <section className="enerta-section">
      <div className="enerta-container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
          Servicios específicos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subservices.map((sub, index) => (
            <FlipCard
              key={index}
              title={sub.title}
              description={sub.description}
              image={sub.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;
