import { Sun } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import serviceSolar from "@/assets/service-solar.jpg";

const EnergiasRenovables = () => {
  return (
    <ServicePage
      title="Energías Renovables"
      subtitle="Fotovoltaica y solar"
      description="Instalamos sistemas de paneles solares residenciales y comerciales para que generes tu propia energía, reduzcas tu factura eléctrica y contribuyas a un futuro más sostenible. Gestionamos subvenciones y beneficios fiscales."
      image={serviceSolar}
      icon={<Sun className="w-8 h-8 text-primary" />}
      features={[
        "Paneles solares fotovoltaicos",
        "Inversores de alta eficiencia",
        "Sistemas de baterías",
        "Monitorización en tiempo real",
        "Gestión de subvenciones",
        "Asesoramiento fiscal",
      ]}
      subservices={[
        {
          title: "Instalación residencial",
          description: "Sistemas fotovoltaicos para viviendas unifamiliares, adaptados a tu consumo y orientación.",
        },
        {
          title: "Instalación comercial",
          description: "Proyectos solares para empresas, naves industriales y comercios con alta demanda energética.",
        },
        {
          title: "Almacenamiento energético",
          description: "Sistemas de baterías para almacenar la energía producida y usarla cuando más la necesites.",
        },
        {
          title: "Gestión de subvenciones",
          description: "Tramitación completa de ayudas y subvenciones para instalaciones fotovoltaicas.",
        },
        {
          title: "Eficiencia energética",
          description: "Asesoramiento para maximizar el ahorro y optimizar tu consumo energético.",
        },
        {
          title: "Comunidades solares",
          description: "Instalaciones compartidas para comunidades de vecinos con reparto de producción.",
        },
      ]}
      clients={["Viviendas unifamiliares", "Comunidades de vecinos", "Empresas", "Naves industriales", "Comercios"]}
    />
  );
};

export default EnergiasRenovables;
