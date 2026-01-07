import { BarChart3 } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import serviceEnergy from "@/assets/service-energy.jpg";

const GestionEnergetica = () => {
  return (
    <ServicePage
      title="Gestión Energética"
      subtitle="Optimización y ahorro"
      description="Analizamos tu consumo eléctrico y te proponemos soluciones para reducir tu factura. Monitorización en tiempo real, consultoría energética y recomendación de sistemas más eficientes."
      image={serviceEnergy}
      icon={<BarChart3 className="w-8 h-8 text-primary" />}
      features={[
        "Auditoría energética",
        "Monitorización en tiempo real",
        "Optimización de consumo",
        "Análisis de facturas",
        "Recomendaciones personalizadas",
        "Informes detallados",
      ]}
      subservices={[
        {
          title: "Auditoría energética",
          description: "Estudio completo de tu instalación para detectar puntos de mejora y ahorro potencial.",
        },
        {
          title: "Monitorización",
          description: "Sistemas de monitorización para ver tu consumo en tiempo real y detectar anomalías.",
        },
        {
          title: "Optimización de tarifa",
          description: "Análisis de tu contrato eléctrico y recomendaciones para elegir la tarifa más ventajosa.",
        },
        {
          title: "Consultoría de ahorro",
          description: "Asesoramiento personalizado con plan de acciones para reducir tu factura eléctrica.",
        },
        {
          title: "Gestión de instalaciones",
          description: "Monitorización y gestión remota de instalaciones fotovoltaicas y eléctricas.",
        },
        {
          title: "Certificación energética",
          description: "Emisión de certificados de eficiencia energética para viviendas y locales.",
        },
      ]}
      clients={["Hogares", "Empresas", "Comunidades", "Instalaciones industriales", "Edificios públicos"]}
    />
  );
};

export default GestionEnergetica;
