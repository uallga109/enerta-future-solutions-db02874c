import { Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import serviceElectrical from "@/assets/service-electrical.jpg";

const InstalacionesElectricas = () => {
  return (
    <ServicePage
      title="Instalaciones Eléctricas"
      subtitle="Electricidad profesional"
      description="Realizamos proyectos eléctricos completos para viviendas, locales comerciales y comunidades. Desde obra nueva hasta reformas y mantenimiento, garantizando seguridad y cumplimiento normativo en cada instalación."
      image={serviceElectrical}
      icon={<Zap className="w-8 h-8 text-primary" />}
      features={[
        "Cuadros eléctricos",
        "Cableado completo",
        "Iluminación interior y exterior",
        "Enchufes y puntos de luz",
        "Sistemas de protección",
        "Certificaciones eléctricas",
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
      clients={["Particulares", "Comunidades de vecinos", "Empresas", "Comercios", "Industria"]}
    />
  );
};

export default InstalacionesElectricas;
