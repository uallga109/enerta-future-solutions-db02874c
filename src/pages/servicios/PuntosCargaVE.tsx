import { Car } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import heroEv from "@/assets/hero-ev.jpg";
import serviceEv from "@/assets/service-ev.jpg";

const PuntosCargaVE = () => {
  return (
    <ServicePage
      title="Puntos de Carga VE"
      subtitle="Movilidad eléctrica"
      description="Instalamos cargadores para vehículos eléctricos en viviendas, comunidades y negocios. Ofrecemos servicio completo: diseño, instalación, mantenimiento y gestión de ayudas del Plan MOVES."
      heroImage={heroEv}
      icon={<Car className="w-8 h-8 text-primary-foreground" />}
      clients={[
        { name: "Propietarios de VE", icon: "car" },
        { name: "Comunidades", icon: "building" },
        { name: "Empresas con flotas", icon: "briefcase" },
        { name: "Parkings privados", icon: "warehouse" },
        { name: "Espacios públicos", icon: "landmark" },
      ]}
      subservices={[
        {
          title: "Instalación doméstica",
          description: "Punto de carga en tu garaje particular para cargar tu vehículo eléctrico cómodamente en casa.",
        },
        {
          title: "Instalación comunitaria",
          description: "Cargadores compartidos en garajes de comunidades de vecinos con sistema de facturación individual.",
        },
        {
          title: "Instalación empresarial",
          description: "Puntos de carga para flotas de empresa, empleados o clientes en instalaciones comerciales.",
        },
        {
          title: "Cargadores rápidos",
          description: "Instalación de cargadores de alta potencia para reducir tiempos de carga.",
        },
        {
          title: "Gestión Plan MOVES",
          description: "Tramitación completa de subvenciones del Plan MOVES para tu instalación de carga.",
        },
        {
          title: "Mantenimiento",
          description: "Servicio de mantenimiento preventivo y correctivo de puntos de carga.",
        },
      ]}
      features={[
        { title: "Cargadores domésticos", description: "Wallbox y puntos de carga para garaje particular" },
        { title: "Cargadores comunitarios", description: "Soluciones multiusuario con gestión de pagos" },
        { title: "Cargadores rápidos", description: "Alta potencia para carga en menos tiempo" },
        { title: "Gestión Plan MOVES", description: "Tramitación de subvenciones incluida" },
        { title: "Mantenimiento incluido", description: "Servicio preventivo y correctivo" },
        { title: "Cumplimiento normativo", description: "Instalaciones certificadas y homologadas" },
      ]}
      workProcess={[
        {
          title: "Evaluación del punto",
          description: "Análisis de ubicación, potencia disponible y tipo de cargador más adecuado.",
        },
        {
          title: "Diseño personalizado",
          description: "Selección del cargador óptimo y planificación detallada de la instalación.",
        },
        {
          title: "Instalación y pruebas",
          description: "Montaje profesional del cargador y comprobación de funcionamiento.",
        },
        {
          title: "Mantenimiento y soporte",
          description: "Servicio preventivo y correctivo para garantizar durabilidad y rendimiento.",
        },
      ]}
      workProcessImage={serviceEv}
      benefits={[
        {
          title: "Comodidad",
          description: "Carga en casa, comunidad o empresa sin depender de cargadores públicos.",
        },
        {
          title: "Rapidez",
          description: "Instalación de cargadores domésticos o rápidos según tu necesidad.",
        },
        {
          title: "Subvenciones",
          description: "Tramitación del Plan MOVES incluida para maximizar tu ahorro.",
        },
        {
          title: "Seguridad",
          description: "Cumplimiento normativo total con sistemas certificados.",
        },
        {
          title: "Escalabilidad",
          description: "Soluciones adaptables para particulares, comunidades y flotas.",
        },
      ]}
    />
  );
};

export default PuntosCargaVE;
