import { Phone, Users, FileText, FileSignature, Wrench, CheckCircle } from "lucide-react";

const hiringSteps = [
  {
    icon: Phone,
    title: "Contacto inicial",
    description: "Por teléfono, WhatsApp o formulario web",
  },
  {
    icon: Users,
    title: "Reunión técnica",
    description: "Visita para evaluar tus necesidades",
  },
  {
    icon: FileText,
    title: "Presupuesto",
    description: "Propuesta personalizada y aprobación",
  },
  {
    icon: FileSignature,
    title: "Acuerdo",
    description: "Firma de contrato y condiciones",
  },
  {
    icon: Wrench,
    title: "Ejecución",
    description: "Proyecto según cronograma acordado",
  },
  {
    icon: CheckCircle,
    title: "Entrega final",
    description: "Revisión y soporte post-servicio",
  },
];

const HiringProcess = () => {
  return (
    <section className="enerta-section bg-secondary/30">
      <div className="enerta-container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
          Proceso de contratación
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hiringSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 relative">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent border-2 border-card flex items-center justify-center font-heading font-bold text-foreground text-sm">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
