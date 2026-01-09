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
