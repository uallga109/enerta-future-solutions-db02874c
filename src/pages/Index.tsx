import { Link } from "react-router-dom";
import { ArrowRight, Zap, Sun, Car, Wind, BarChart3, CheckCircle, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-enerta.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceEv from "@/assets/service-ev.jpg";
import serviceClimate from "@/assets/service-climate.jpg";
import serviceEnergy from "@/assets/service-energy.jpg";

const services = [
  {
    title: "Instalaciones Eléctricas",
    description: "Proyectos completos para viviendas, locales y comunidades. Obra nueva, reformas y mantenimiento.",
    icon: Zap,
    image: serviceElectrical,
    href: "/servicios/instalaciones-electricas",
  },
  {
    title: "Energías Renovables",
    description: "Instalación de paneles solares, baterías y gestión de subvenciones para maximizar tu ahorro.",
    icon: Sun,
    image: serviceSolar,
    href: "/servicios/energias-renovables",
  },
  {
    title: "Puntos de Carga VE",
    description: "Cargadores para vehículos eléctricos en viviendas, comunidades y negocios con gestión Plan MOVES.",
    icon: Car,
    image: serviceEv,
    href: "/servicios/puntos-carga-ve",
  },
  {
    title: "Climatización",
    description: "Sistemas de aire acondicionado y calefacción eficientes para máximo confort y ahorro.",
    icon: Wind,
    image: serviceClimate,
    href: "/servicios/climatizacion",
  },
  {
    title: "Gestión Energética",
    description: "Optimización del consumo, monitorización y asesoramiento para reducir tu factura eléctrica.",
    icon: BarChart3,
    image: serviceEnergy,
    href: "/servicios/gestion-energetica",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "Más de 15 años de experiencia",
    description: "Trayectoria sólida desde 2006, consolidados como Enerta Future desde 2020.",
  },
  {
    icon: Award,
    title: "Calidad y profesionalidad",
    description: "Materiales de primera calidad y técnicos cualificados para instalaciones seguras.",
  },
  {
    icon: CheckCircle,
    title: "Cumplimiento normativo",
    description: "Todas nuestras instalaciones cumplen con la normativa vigente y certificaciones.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Consultoría energética y soluciones adaptadas a cada cliente y necesidad.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center enerta-gradient-bg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Instalación solar profesional"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="enerta-container relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Almería y provincia · Desde 2006
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Energía del futuro,{" "}
              <span className="text-primary">hoy en tu hogar</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Soluciones integrales en electricidad, energías renovables, climatización 
              y movilidad eléctrica. Profesionalidad, calidad y compromiso con cada proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button size="lg" className="w-full sm:w-auto font-semibold text-base px-8">
                  Solicitar presupuesto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/quienes-somos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold text-base px-8">
                  Conocer más
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Nuestros servicios
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Soluciones energéticas completas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Desde instalaciones eléctricas hasta energías renovables, ofrecemos servicios 
              integrales para particulares, comunidades y empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="enerta-card group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.href}>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary">
                    Saber más
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                ¿Por qué elegirnos?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Confía en expertos con experiencia real
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                No somos solo un electricista. Somos una empresa técnica, profesional y 
                especializada que trabaja en toda Almería y provincia, ofreciendo soluciones 
                integrales adaptadas a cada cliente.
              </p>
              <div className="space-y-6">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent rounded-3xl" />
              <img
                src={serviceSolar}
                alt="Instalación profesional"
                className="relative rounded-2xl shadow-enerta-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="enerta-section bg-primary">
        <div className="enerta-container text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            ¿Listo para dar el paso hacia la eficiencia energética?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Te asesoramos sin compromiso. Cuéntanos tu proyecto y te ayudaremos a encontrar 
            la mejor solución, incluyendo gestión de subvenciones.
          </p>
          <Link to="/contacto">
            <Button size="lg" variant="secondary" className="font-semibold text-base px-8">
              Contactar ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
