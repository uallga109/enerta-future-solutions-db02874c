import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: ReactNode;
  features: string[];
  subservices: { title: string; description: string }[];
  clients: string[];
}

const ServicePage = ({
  title,
  subtitle,
  description,
  image,
  icon,
  features,
  subservices,
  clients,
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/90" />
        </div>
        
        <div className="enerta-container relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              {icon}
            </div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              {subtitle}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
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

      {/* Features */}
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Lo que incluye este servicio
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subservices */}
      <section className="enerta-section">
        <div className="enerta-container">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
            Servicios específicos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subservices.map((sub, index) => (
              <div key={index} className="enerta-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-heading font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {sub.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="enerta-section bg-accent/50">
        <div className="enerta-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
              ¿Para quién es este servicio?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="enerta-section bg-primary">
        <div className="enerta-container text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            ¿Necesitas este servicio?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Cuéntanos tu proyecto y te enviamos un presupuesto personalizado sin compromiso.
          </p>
          <Link to="/contacto">
            <Button size="lg" variant="secondary" className="font-semibold">
              Contactar ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
