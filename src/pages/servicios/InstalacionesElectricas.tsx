import { Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import heroElectrical from "@/assets/hero-electrical.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";

const InstalacionesElectricas = () => {
  return (
    <ServicePage
      title="Instalaciones Eléctricas"
      subtitle="Electricidad profesional"
      description="Realizamos proyectos eléctricos completos para viviendas, locales comerciales y comunidades. Desde obra nueva hasta reformas y mantenimiento, garantizando seguridad y cumplimiento normativo en cada instalación."
      heroImage={heroElectrical}
      icon={<Zap className="w-8 h-8 text-primary-foreground" />}
      clients={[
        { name: "Particulares", icon: "home" },
        { name: "Comunidades", icon: "building" },
        { name: "Empresas", icon: "briefcase" },
        { name: "Comercios", icon: "store" },
        { name: "Industria", icon: "factory" },
      ]}
      subservices={[
        {
          title: "Obra nueva",
          description: "Instalación eléctrica completa para viviendas y locales en construcción, cumpliendo toda la normativa vigente.",
        },
        {
          title: "Reformas eléctricas",
          description: "Modernización de instalaciones antiguas, ampliación de potencia y actualización a normativa actual.",
        },
        {
          title: "Cuadros eléctricos",
          description: "Diseño, montaje y certificación de cuadros eléctricos para negocios, empresas e industria.",
        },
        {
          title: "Iluminación",
          description: "Proyectos de iluminación eficiente LED para hogares, comercios y espacios públicos.",
        },
        {
          title: "Mantenimiento",
          description: "Revisiones periódicas, reparaciones y mantenimiento preventivo de instalaciones existentes.",
        },
        {
          title: "Automatización",
          description: "Sistemas de control y automatización para optimizar el uso de la energía eléctrica.",
        },
      ]}
      features={[
        { title: "Cuadros eléctricos", description: "Diseño y montaje de cuadros de protección homologados" },
        { title: "Cableado completo", description: "Instalación de cables de alta calidad y seguridad" },
        { title: "Iluminación", description: "Interior y exterior con tecnología LED eficiente" },
        { title: "Enchufes y puntos de luz", description: "Distribución óptima según necesidades" },
        { title: "Sistemas de protección", description: "Diferenciales, magnetotérmicos y toma de tierra" },
        { title: "Certificaciones", description: "Boletines y certificados eléctricos oficiales" },
      ]}
      workProcess={[
        {
          title: "Estudio inicial",
          description: "Análisis de necesidades del cliente y estado de la instalación actual.",
        },
        {
          title: "Diseño del proyecto",
          description: "Planificación del cableado, cuadros y puntos de luz según normativa vigente.",
        },
        {
          title: "Ejecución",
          description: "Instalación completa por electricistas certificados con materiales de calidad.",
        },
        {
          title: "Revisión y certificación",
          description: "Pruebas de seguridad y emisión de certificados necesarios.",
        },
      ]}
      workProcessImage={serviceElectrical}
      benefits={[
        {
          title: "Seguridad total",
          description: "Instalaciones que cumplen la normativa vigente con sistemas de protección avanzados.",
        },
        {
          title: "Ahorro de tiempo",
          description: "Proyecto integral desde obra nueva hasta reformas sin complicaciones.",
        },
        {
          title: "Personalización",
          description: "Diseño adaptado a cada vivienda, local o comunidad según sus necesidades.",
        },
        {
          title: "Mantenimiento incluido",
          description: "Revisiones periódicas y preventivas que prolongan la vida de la instalación.",
        },
        {
          title: "Valor añadido",
          description: "Cuadros eléctricos y sistemas inteligentes que aumentan la eficiencia y control.",
        },
      ]}
    />
  );
};

export default InstalacionesElectricas;
