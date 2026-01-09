import { Link } from "react-router-dom";
import { ArrowRight, Zap, Sun, Car, Wind, BarChart3, CheckCircle, Shield, Award, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import heroImage from "@/assets/hero-enerta.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceEv from "@/assets/service-ev.jpg";
import serviceClimate from "@/assets/service-climate.jpg";
import serviceEnergy from "@/assets/service-energy.jpg";

const services = [{
  title: "Instalaciones Eléctricas",
  description: "Obra nueva, reformas y mantenimiento integral.",
  icon: Zap,
  image: serviceElectrical,
  href: "/servicios/instalaciones-electricas"
}, {
  title: "Energías Renovables / Fotovoltaica",
  description: "Paneles solares y baterías para ahorro energético.",
  icon: Sun,
  image: serviceSolar,
  href: "/servicios/energias-renovables"
}, {
  title: "Puntos de Carga para Vehículos Eléctricos",
  description: "Instalación en hogares, empresas y comunidades.",
  icon: Car,
  image: serviceEv,
  href: "/servicios/puntos-carga-ve"
}, {
  title: "Climatización",
  description: "Aire acondicionado y calefacción eficiente.",
  icon: Wind,
  image: serviceClimate,
  href: "/servicios/climatizacion"
}, {
  title: "Gestión Energética y Consultoría",
  description: "Optimización de consumo y ahorro en factura eléctrica.",
  icon: BarChart3,
  image: serviceEnergy,
  href: "/servicios/gestion-energetica"
}];

const reasons = [{
  icon: Shield,
  title: "Más de 15 años de experiencia",
  description: "Trayectoria sólida desde 2006, consolidados como Enerta Future desde 2020."
}, {
  icon: Award,
  title: "Calidad y profesionalidad",
  description: "Materiales de primera calidad y técnicos cualificados para instalaciones seguras."
}, {
  icon: CheckCircle,
  title: "Cumplimiento normativo",
  description: "Todas nuestras instalaciones cumplen con la normativa vigente y certificaciones."
}, {
  icon: Users,
  title: "Atención personalizada",
  description: "Consultoría energética y soluciones adaptadas a cada cliente y necesidad."
}];

const locations = ["Almería", "Roquetas de Mar", "El Ejido", "Vícar", "Vera", "Adra"];

// Placeholder images for the carousel - will be replaced later
const expertImages = [
  serviceSolar,
  serviceElectrical,
  serviceEv,
  serviceClimate,
  serviceEnergy,
  serviceSolar,
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Instalación solar profesional" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
        
        <div className="enerta-container relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground font-medium text-sm mb-6 backdrop-blur-sm">
              Almería y provincia · Desde 2006
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Soluciones eléctricas y energéticas integrales en Almería
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Más de 15 años ofreciendo instalaciones seguras, sostenibles y eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button size="lg" className="w-full sm:w-auto font-semibold text-base px-8">
                  Solicita presupuesto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold text-base px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal rows */}
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Soluciones energéticas completas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Desde instalaciones eléctricas hasta energías renovables, ofrecemos servicios 
              integrales para particulares, comunidades y empresas.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <Link 
                key={service.title} 
                to={service.href}
                className="group"
              >
                <div 
                  className="flex items-center gap-6 p-4 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="hidden sm:block w-24 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-1">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Confía en expertos con experiencia real
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                No somos solo un electricista. Somos una empresa técnica, profesional y 
                especializada que trabaja en toda Almería y provincia, ofreciendo soluciones 
                integrales adaptadas a cada cliente.
              </p>
              <div className="space-y-6">
                {reasons.map(reason => (
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
              <ImageCarousel images={expertImages} className="relative" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="enerta-section bg-accent/50">
        <div className="enerta-container">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Áreas de actuación
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ofrecemos nuestros servicios en toda la provincia de Almería y alrededores.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {locations.map(location => (
              <div key={location} className="flex items-center gap-2 px-5 py-3 bg-card rounded-full border border-border shadow-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{location}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 px-5 py-3 bg-primary/10 rounded-full border border-primary/20">
              <span className="font-medium text-primary">...y alrededores</span>
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d408958.3989661725!2d-2.4637136!3d36.8381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1704900000000!5m2!1ses!2ses"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Almería"
              className="w-full"
            />
          </div>
          
          <p className="text-center text-muted-foreground mt-6">
            La cercanía nos permite ofrecer un trato cercano, respuesta rápida y seguimiento personalizado de cada proyecto.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
