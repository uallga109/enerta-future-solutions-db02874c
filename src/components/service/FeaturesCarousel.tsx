import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface FeaturesCarouselProps {
  features: {
    title: string;
    description: string;
  }[];
}

const FeaturesCarousel = ({ features }: FeaturesCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="enerta-section bg-secondary/30">
      <div className="enerta-container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
          Lo que incluye este servicio
        </h2>
        
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden md:flex"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-0 md:mx-8" ref={emblaRef}>
            <div className="flex gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-[320px]"
                >
                  <div className="bg-card p-6 rounded-2xl border-2 border-border h-full hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="font-heading font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm pl-8 line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center hover:border-primary transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center hover:border-primary transition-all duration-300"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
