import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ClientCards from "@/components/service/ClientCards";
import FlipCards from "@/components/service/FlipCards";
import FeaturesCarousel from "@/components/service/FeaturesCarousel";
import WorkProcess from "@/components/service/WorkProcess";
import Benefits from "@/components/service/Benefits";
import HiringProcess from "@/components/service/HiringProcess";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: ReactNode;
  features: {
    title: string;
    description: string;
  }[];
  subservices: {
    title: string;
    description: string;
    image?: string;
  }[];
  clients: {
    name: string;
    icon: string;
  }[];
  workProcess: {
    title: string;
    description: string;
  }[];
  workProcessImage?: string;
  benefits: {
    title: string;
    description: string;
  }[];
}

const ServicePage = ({
  title,
  subtitle,
  description,
  heroImage,
  icon,
  features,
  subservices,
  clients,
  workProcess,
  workProcessImage,
  benefits,
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
        
        <div className="enerta-container relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              {title}
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              {description}
            </p>
            <Link to="/contacto">
              <Button size="lg" className="font-semibold">
                Solicitar presupuesto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mejoradora Exclusive Offer */}
      <section className="py-8 bg-gradient-to-r from-primary/5 via-accent/20 to-primary/5 border-b border-primary/10">
        <div className="enerta-container">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex-1">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Ventaja exclusiva con Mejoradora
              </h3>
              <p className="text-muted-foreground">
                Si cambias tu compañía de luz a Mejoradora, podrás acceder a ofertas especiales en este servicio de Enerta Future.
                Una forma sencilla de ahorrar en tu factura eléctrica y mejorar tu instalación con mejores condiciones.
              </p>
            </div>
            <a 
              href="https://www.mejoradora.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Conocer Mejoradora
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <ClientCards clients={clients} />

      {/* Servicios específicos */}
      <FlipCards subservices={subservices} />

      {/* Lo que incluye */}
      <FeaturesCarousel features={features} />

      {/* Proceso de trabajo */}
      <WorkProcess steps={workProcess} image={workProcessImage} />

      {/* Beneficios */}
      <Benefits benefits={benefits} />

      {/* Proceso de contratación */}
      <HiringProcess />
    </Layout>
  );
};

export default ServicePage;
