import { Car } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import serviceEv from "@/assets/service-ev.jpg";

const PuntosCargaVE = () => {
  return (
    <ServicePage
      title="Puntos de Carga VE"
      subtitle="Movilidad eléctrica"
      description="Instalamos cargadores para vehículos eléctricos en viviendas, comunidades y negocios. Ofrecemos servicio completo: diseño, instalación, mantenimiento y gestión de ayudas del Plan MOVES."
      image={serviceEv}
      icon={<Car className="w-8 h-8 text-primary" />}
      features={[
        "Cargadores domésticos",
        "Cargadores comunitarios",
        "Cargadores rápidos",
        "Gestión Plan MOVES",
        "Mantenimiento incluido",
        "Cumplimiento normativo",
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
      clients={["Propietarios de VE", "Comunidades de vecinos", "Empresas con flotas", "Parkings privados", "Espacios públicos"]}
    />
  );
};

export default PuntosCargaVE;
