import { Wind } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import heroClimate from "@/assets/hero-climate.jpg";
import serviceClimate from "@/assets/service-climate.jpg";

const Climatizacion = () => {
  return (
    <ServicePage
      title="Climatización"
      subtitle="Confort térmico"
      description="Instalamos sistemas de aire acondicionado y calefacción eficientes para garantizar el máximo confort en tu hogar o negocio. Apostamos por equipos de bajo consumo y climatización inteligente."
      heroImage={heroClimate}
      icon={<Wind className="w-8 h-8 text-primary-foreground" />}
      clients={[
        { name: "Viviendas", icon: "home" },
        { name: "Oficinas", icon: "building2" },
        { name: "Comercios", icon: "store" },
        { name: "Restaurantes", icon: "restaurant" },
        { name: "Hoteles", icon: "hotel" },
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
      features={[
        { title: "Aire acondicionado", description: "Equipos split e inverter de bajo consumo" },
        { title: "Calefacción eficiente", description: "Bombas de calor y sistemas híbridos" },
        { title: "Bombas de calor", description: "Climatización reversible frío/calor" },
        { title: "Climatización inteligente", description: "Control por wifi y programación horaria" },
        { title: "Mantenimiento preventivo", description: "Revisiones y limpieza de filtros incluidas" },
        { title: "Equipos inverter", description: "Máxima eficiencia y ahorro energético" },
      ]}
      workProcess={[
        {
          title: "Diagnóstico de necesidades",
          description: "Análisis del tamaño del espacio, uso previsto y número de estancias a climatizar.",
        },
        {
          title: "Diseño del sistema",
          description: "Selección del equipo óptimo: split, multisplit o bombas de calor según necesidades.",
        },
        {
          title: "Instalación y pruebas",
          description: "Montaje profesional, conexión y verificación de eficiencia del sistema.",
        },
        {
          title: "Mantenimiento y optimización",
          description: "Revisiones periódicas y ajustes de programación para máximo rendimiento.",
        },
      ]}
      workProcessImage={serviceClimate}
      benefits={[
        {
          title: "Confort óptimo",
          description: "Temperatura estable y agradable en todas las estancias durante todo el año.",
        },
        {
          title: "Ahorro energético",
          description: "Equipos eficientes e inverter que reducen significativamente el consumo.",
        },
        {
          title: "Automatización inteligente",
          description: "Control por wifi y programación de horarios desde tu móvil.",
        },
        {
          title: "Versatilidad",
          description: "Soluciones adaptadas para hogares, oficinas, comercios y hoteles.",
        },
        {
          title: "Mantenimiento incluido",
          description: "Prolonga la vida útil de los equipos y evita averías costosas.",
        },
      ]}
    />
  );
};

export default Climatizacion;
