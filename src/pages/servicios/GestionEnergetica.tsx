import { BarChart3 } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import heroEnergy from "@/assets/hero-energy.jpg";
import serviceEnergy from "@/assets/service-energy.jpg";

const GestionEnergetica = () => {
  return (
    <ServicePage
      title="Gestión Energética"
      subtitle="Optimización y ahorro"
      description="Analizamos tu consumo eléctrico y te proponemos soluciones para reducir tu factura. Monitorización en tiempo real, consultoría energética y recomendación de sistemas más eficientes."
      heroImage={heroEnergy}
      icon={<BarChart3 className="w-8 h-8 text-primary-foreground" />}
      clients={[
        { name: "Hogares", icon: "home" },
        { name: "Empresas", icon: "briefcase" },
        { name: "Comunidades", icon: "building" },
        { name: "Industria", icon: "factory" },
        { name: "Edificios públicos", icon: "landmark" },
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
      features={[
        { title: "Auditoría energética", description: "Análisis completo de consumo y eficiencia" },
        { title: "Monitorización en tiempo real", description: "Control y alertas de tu instalación" },
        { title: "Optimización de consumo", description: "Recomendaciones personalizadas de ahorro" },
        { title: "Análisis de facturas", description: "Estudio detallado de tus costes eléctricos" },
        { title: "Recomendaciones", description: "Plan de acciones para reducir consumo" },
        { title: "Informes detallados", description: "Documentación y certificaciones oficiales" },
      ]}
      workProcess={[
        {
          title: "Auditoría inicial",
          description: "Análisis exhaustivo del consumo actual y eficiencia de tu instalación.",
        },
        {
          title: "Propuesta de optimización",
          description: "Recomendaciones de tarifas, hábitos de consumo y equipos más eficientes.",
        },
        {
          title: "Implementación de mejoras",
          description: "Ajustes en la instalación, sistemas de monitorización y seguimiento.",
        },
        {
          title: "Informe y certificación",
          description: "Entrega de informes detallados y certificados energéticos oficiales.",
        },
      ]}
      workProcessImage={heroEnergy}
      benefits={[
        {
          title: "Ahorro en factura",
          description: "Optimización de consumo y tarifas para reducir tus costes eléctricos.",
        },
        {
          title: "Visibilidad total",
          description: "Monitorización en tiempo real de toda tu instalación eléctrica.",
        },
        {
          title: "Mejor planificación",
          description: "Auditorías y recomendaciones personalizadas para tu situación.",
        },
        {
          title: "Cumplimiento normativo",
          description: "Certificaciones y estudios oficiales para tu inmueble.",
        },
        {
          title: "Tranquilidad",
          description: "Consultoría profesional para hogares, empresas y comunidades.",
        },
      ]}
    />
  );
};

export default GestionEnergetica;
