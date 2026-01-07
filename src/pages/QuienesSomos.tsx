import { CheckCircle, Users, Shield, Award, Leaf, MapPin, Wrench } from "lucide-react";
import Layout from "@/components/layout/Layout";
import serviceSolar from "@/assets/service-solar.jpg";
import heroImage from "@/assets/hero-enerta.jpg";

const values = [
  { icon: Shield, title: "Profesionalidad", description: "Técnicos cualificados y formación continua para ofrecer el mejor servicio." },
  { icon: Award, title: "Calidad", description: "Materiales de primera y acabados impecables en cada instalación." },
  { icon: CheckCircle, title: "Compromiso", description: "Cumplimos plazos y trabajamos hasta la satisfacción del cliente." },
  { icon: Users, title: "Responsabilidad", description: "Asumimos cada proyecto como propio, con garantía y seguimiento." },
];

const workProcess = [
  { step: 1, title: "Estudio previo", description: "Analizamos tu situación, necesidades y objetivos." },
  { step: 2, title: "Propuesta personalizada", description: "Diseñamos la solución óptima para tu caso concreto." },
  { step: 3, title: "Instalación profesional", description: "Ejecutamos el proyecto con materiales de calidad." },
  { step: 4, title: "Puesta en marcha", description: "Verificamos el funcionamiento y te explicamos todo." },
  { step: 5, title: "Soporte continuo", description: "Mantenimiento y atención postventa cuando lo necesites." },
];

const QuienesSomos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Equipo Enerta" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/80" />
        </div>
        
        <div className="enerta-container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Nuestra historia
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Quiénes somos
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos una empresa técnica, profesional y especializada en electricidad, 
              energías renovables, movilidad eléctrica y eficiencia energética. 
              Operamos en Almería y provincia con más de 15 años de experiencia en el sector.
            </p>
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                No somos solo un electricista
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Enerta Future</strong> es una empresa integral de soluciones 
                  energéticas. Trabajamos con electricidad, energía solar, movilidad eléctrica y 
                  eficiencia energética para particulares, comunidades, negocios y espacios públicos.
                </p>
                <p>
                  Nuestra trayectoria comienza en <strong className="text-foreground">2006</strong>, acumulando 
                  experiencia en instalaciones eléctricas. En <strong className="text-foreground">2020</strong> nos 
                  consolidamos como Enerta Future, evolucionando hacia las energías renovables y la movilidad 
                  eléctrica para ofrecer soluciones completas y adaptadas al futuro energético.
                </p>
                <p>
                  Operamos en toda la provincia de <strong className="text-foreground">Almería</strong>: Roquetas de Mar, 
                  El Ejido, Vícar, Vera, Adra y alrededores. La cercanía nos permite ofrecer un 
                  servicio local, personalizado y de confianza.
                </p>
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

      {/* What we solve */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              ¿Qué problemas resolvemos?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Existimos para facilitarte la vida y quitarte preocupaciones.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="enerta-card text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Instalaciones seguras</h3>
              <p className="text-muted-foreground text-sm">Cumplimos toda la normativa para tu tranquilidad.</p>
            </div>
            <div className="enerta-card text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Ahorro en la factura</h3>
              <p className="text-muted-foreground text-sm">Te ayudamos a reducir tu gasto energético.</p>
            </div>
            <div className="enerta-card text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Transición energética</h3>
              <p className="text-muted-foreground text-sm">Facilitamos el paso a solar y vehículo eléctrico.</p>
            </div>
            <div className="enerta-card text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Sin complicaciones</h3>
              <p className="text-muted-foreground text-sm">Gestionamos subvenciones, normativa y trámites.</p>
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
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Nuestro equipo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Contamos con técnicos cualificados, ingenieros especializados en renovables y 
              electricistas con amplia experiencia. Apostamos por la formación continua para 
              estar siempre a la vanguardia del sector.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro enfoque es cercano y transparente: te asesoramos con claridad, 
              explicándote cada opción para que tomes la mejor decisión. El cliente no es un número, 
              es una persona a la que queremos ayudar.
            </p>
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
              {workProcess.map((process) => (
                <div key={process.step} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary-foreground">{process.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{process.title}</h3>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </div>
                </div>
              ))}
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
    </Layout>
  );
};

export default QuienesSomos;
