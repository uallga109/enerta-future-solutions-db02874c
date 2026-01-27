import { Link } from "react-router-dom";
import { CheckCircle, Users, Shield, Award, Leaf, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceEv from "@/assets/service-ev.jpg";
import serviceClimate from "@/assets/service-climate.jpg";
import serviceEnergy from "@/assets/service-energy.jpg";
import bannerPresentacion from "@/assets/banner-presentacion.jpeg";
import imagenEnerta1 from "@/assets/imagen-enerta-1.jpeg";
import imagenEnerta2 from "@/assets/imagen-enerta-2.jpeg";
import bannerFaq from "@/assets/banner-faq.jpeg";
import bannerContacto from "@/assets/banner-contacto.jpeg";
import videoEnerta from "@/assets/video-enerta.mp4";
const values = [{
  icon: Shield,
  title: "Profesionalidad",
  description: "Técnicos cualificados y formación continua para ofrecer el mejor servicio."
}, {
  icon: Award,
  title: "Calidad",
  description: "Materiales de primera y acabados impecables en cada instalación."
}, {
  icon: CheckCircle,
  title: "Compromiso",
  description: "Cumplimos plazos y trabajamos hasta la satisfacción del cliente."
}, {
  icon: Users,
  title: "Responsabilidad",
  description: "Asumimos cada proyecto como propio, con garantía y seguimiento."
}];
const workProcess = [{
  step: 1,
  title: "Estudio previo",
  description: "Analizamos tu situación, necesidades y objetivos."
}, {
  step: 2,
  title: "Propuesta personalizada",
  description: "Diseñamos la solución óptima para tu caso concreto."
}, {
  step: 3,
  title: "Instalación profesional",
  description: "Ejecutamos el proyecto con materiales de calidad."
}, {
  step: 4,
  title: "Puesta en marcha",
  description: "Verificamos el funcionamiento y te explicamos todo."
}, {
  step: 5,
  title: "Soporte continuo",
  description: "Mantenimiento y atención postventa cuando lo necesites."
}];
const timeline = [{
  year: "2006",
  title: "Inicio en el sector eléctrico",
  description: "Comenzamos nuestra trayectoria ofreciendo servicios de instalaciones eléctricas."
}, {
  year: "2015",
  title: "Expansión y crecimiento",
  description: "Ampliamos nuestra cartera de clientes y servicios en toda la provincia."
}, {
  year: "2020",
  title: "Nace Enerta Future",
  description: "Nos consolidamos como empresa especializada en energías renovables y movilidad eléctrica."
}, {
  year: "Hoy",
  title: "Referentes en Almería",
  description: "Más de 15 años de experiencia ofreciendo soluciones integrales."
}];

// Team carousel images with new photos
const teamImages = [serviceSolar, serviceElectrical, serviceEv, serviceClimate, serviceEnergy, imagenEnerta1, imagenEnerta2, bannerFaq, bannerContacto, bannerPresentacion];
const QuienesSomos = () => {
  return <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerPresentacion} alt="Equipo Enerta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
        
        <div className="enerta-container relative z-10">
          <div className="max-w-3xl animate-slide-up">
            
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Expertos en instalaciones eléctricas y energías renovables en Almería
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              Más de 15 años ofreciendo soluciones integrales con profesionalidad, calidad y compromiso.
            </p>
            <Link to="/quienes-somos#historia">
              <Button size="lg" className="font-semibold text-base px-8">
                Conócenos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* History / Timeline Section */}
      <section id="historia" className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Nuestra trayectoria
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desde 2006 en el sector eléctrico, consolidándonos como Enerta Future en 2020. 
              Cada proyecto refleja nuestra pasión por mejorar, innovar y ofrecer soluciones seguras y eficientes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => <div key={item.year} className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-primary flex-shrink-0 items-center justify-center z-10">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1 bg-card p-6 rounded-xl border border-border shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-sm">
                          {item.year}
                        </span>
                        <h3 className="font-heading font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              "Cada proyecto refleja nuestra pasión por mejorar, innovar y ofrecer soluciones seguras y eficientes."
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Conoce nuestro trabajo
              </h2>
              <p className="text-muted-foreground">
                Descubre cómo trabajamos y la calidad que ofrecemos en cada proyecto.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <video 
                controls 
                className="w-full aspect-video object-cover"
                poster={bannerPresentacion}
              >
                <source src={videoEnerta} type="video/mp4" />
                Tu navegador no soporta la reproducción de vídeos.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Carousel */}
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent rounded-3xl" />
              <ImageCarousel images={teamImages} className="relative" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Nuestro equipo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Contamos con técnicos cualificados, ingenieros especializados en renovables y 
                electricistas con amplia experiencia. Apostamos por la formación continua para 
                estar siempre a la vanguardia del sector.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nuestro enfoque es cercano y transparente: te asesoramos con claridad, 
                explicándote cada opción para que tomes la mejor decisión. El cliente no es un número, 
                es una persona a la que queremos ayudar.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-medium">Técnicos cualificados</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-medium">Formación continua</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-medium">Trato cercano</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-medium">Asesoramiento claro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="enerta-section bg-accent/50">
        <div className="enerta-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Nuestros valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estos principios guían cada proyecto que realizamos.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Cómo trabajamos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un proceso claro y organizado que da tranquilidad.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {workProcess.map(process => <div key={process.step} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary-foreground">{process.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{process.title}</h3>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Compromiso con la sostenibilidad
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nuestra especialización en energía solar, movilidad eléctrica y eficiencia 
                  energética refleja nuestro compromiso con un futuro más sostenible. 
                  Ayudamos a nuestros clientes a reducir su huella de carbono y su consumo 
                  energético de forma responsable y técnica.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No se trata de discursos, sino de soluciones reales y eficientes que 
                  benefician tanto al cliente como al medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="enerta-section bg-accent/50">
        <div className="enerta-container">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Servicio local y personalizado
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Trabajamos en <strong className="text-foreground">Almería y provincia</strong>: 
              Roquetas de Mar, El Ejido, Vícar, Vera, Adra y alrededores.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La cercanía nos permite ofrecer un trato cercano, respuesta rápida y 
              seguimiento personalizado de cada proyecto. Estás en buenas manos.
            </p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default QuienesSomos;