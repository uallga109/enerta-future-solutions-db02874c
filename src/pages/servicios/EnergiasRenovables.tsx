import { Sun } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import heroSolar from "@/assets/hero-solar.jpg";
import serviceSolar from "@/assets/service-solar.jpg";

const EnergiasRenovables = () => {
  return (
    <ServicePage
      title="Energías Renovables"
      subtitle="Fotovoltaica"
      description="Instalamos sistemas de energía solar fotovoltaica para hogares, empresas y comunidades. Te ayudamos a generar tu propia energía, reducir tu factura eléctrica y contribuir a un futuro más sostenible."
      heroImage={heroSolar}
      icon={<Sun className="w-8 h-8 text-primary-foreground" />}
      clients={[
        { name: "Viviendas", icon: "home" },
        { name: "Comunidades", icon: "building" },
        { name: "Empresas", icon: "briefcase" },
        { name: "Naves industriales", icon: "warehouse" },
        { name: "Edificios públicos", icon: "landmark" },
      ]}
      subservices={[
        { title: "Instalación residencial", description: "Paneles solares para viviendas unifamiliares con máximo aprovechamiento." },
        { title: "Instalación comunitaria", description: "Sistemas fotovoltaicos para comunidades con reparto equitativo." },
        { title: "Instalación comercial", description: "Soluciones para empresas y comercios que buscan reducir costes." },
        { title: "Baterías de almacenamiento", description: "Sistemas de acumulación para usar la energía cuando la necesitas." },
        { title: "Gestión de subvenciones", description: "Tramitación completa de ayudas y beneficios fiscales." },
        { title: "Monitorización", description: "Sistemas de control en tiempo real para optimizar el rendimiento." },
      ]}
      features={[
        { title: "Paneles solares", description: "Módulos fotovoltaicos de alta eficiencia y garantía" },
        { title: "Inversores", description: "Equipos de conversión de última generación" },
        { title: "Baterías", description: "Sistemas de almacenamiento para autoconsumo nocturno" },
        { title: "Estructuras", description: "Soportes y anclajes adaptados a cada cubierta" },
        { title: "Protecciones", description: "Sistemas de seguridad eléctrica homologados" },
        { title: "Monitorización", description: "App de control y seguimiento en tiempo real" },
      ]}
      workProcess={[
        { title: "Estudio de viabilidad", description: "Análisis de consumo, orientación solar y espacio disponible." },
        { title: "Diseño del sistema", description: "Dimensionamiento óptimo de paneles, baterías e inversores." },
        { title: "Instalación y puesta en marcha", description: "Montaje profesional, conexiones y pruebas de rendimiento." },
        { title: "Monitorización y seguimiento", description: "Sistemas de control en tiempo real y mantenimiento opcional." },
      ]}
      workProcessImage={serviceSolar}
      benefits={[
        { title: "Reducción de factura", description: "Genera tu propia energía y reduce tus costes eléctricos." },
        { title: "Sostenibilidad", description: "Contribuye al medio ambiente disminuyendo tu huella de carbono." },
        { title: "Independencia energética", description: "Baterías de almacenamiento para usar energía cuando quieras." },
        { title: "Subvenciones y ayudas", description: "Gestión completa de Planes MOVES y beneficios fiscales." },
        { title: "Valor de la propiedad", description: "Instalación moderna que aporta plusvalía a tu inmueble." },
      ]}
    />
  );
};

export default EnergiasRenovables;