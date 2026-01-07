import { Wind } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import serviceClimate from "@/assets/service-climate.jpg";

const Climatizacion = () => {
  return (
    <ServicePage
      title="Climatización"
      subtitle="Confort térmico"
      description="Instalamos sistemas de aire acondicionado y calefacción eficientes para garantizar el máximo confort en tu hogar o negocio. Apostamos por equipos de bajo consumo y climatización inteligente."
      image={serviceClimate}
      icon={<Wind className="w-8 h-8 text-primary" />}
      features={[
        "Aire acondicionado",
        "Calefacción eficiente",
        "Bombas de calor",
        "Climatización inteligente",
        "Mantenimiento preventivo",
        "Equipos inverter",
      ]}
      subservices={[
        {
          title: "Aire acondicionado split",
          description: "Instalación de equipos split para climatizar estancias individuales con máxima eficiencia.",
        },
        {
          title: "Sistemas multisplit",
          description: "Un solo compresor exterior para climatizar varias estancias de forma independiente.",
        },
        {
          title: "Climatización comercial",
          description: "Sistemas de climatización para oficinas, comercios y locales de mayor superficie.",
        },
        {
          title: "Bombas de calor",
          description: "Sistemas eficientes que proporcionan calefacción en invierno y refrigeración en verano.",
        },
        {
          title: "Climatización inteligente",
          description: "Control por wifi y automatización para optimizar consumo y temperatura.",
        },
        {
          title: "Mantenimiento",
          description: "Revisiones periódicas, limpieza de filtros y reparaciones de equipos de climatización.",
        },
      ]}
      clients={["Viviendas", "Oficinas", "Locales comerciales", "Restaurantes", "Hoteles"]}
    />
  );
};

export default Climatizacion;
