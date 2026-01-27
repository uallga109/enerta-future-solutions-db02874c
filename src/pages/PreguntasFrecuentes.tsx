import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import bannerFaq from "@/assets/banner-faq.jpeg";
const faqs = [{
  category: "General",
  questions: [{
    q: "¿En qué zona geográfica trabajáis?",
    a: "Operamos en toda la provincia de Almería, incluyendo Roquetas de Mar, El Ejido, Vícar, Vera, Adra y alrededores."
  }, {
    q: "¿Cuánta experiencia tenéis?",
    a: "Contamos con más de 15 años de experiencia en el sector eléctrico. Nos consolidamos como Enerta Future en 2020, ampliando nuestros servicios hacia las energías renovables y la movilidad eléctrica."
  }, {
    q: "¿Qué tipos de clientes atendéis?",
    a: "Trabajamos con particulares, comunidades de vecinos, empresas, comercios e industria. Cada proyecto se adapta a las necesidades específicas del cliente."
  }]
}, {
  category: "Presupuestos y pagos",
  questions: [{
    q: "¿Cómo puedo solicitar un presupuesto?",
    a: "Puedes contactarnos a través del formulario de contacto, por teléfono o por email. Realizamos una visita o estudio previo para ofrecerte un presupuesto detallado y sin compromiso."
  }, {
    q: "¿Los presupuestos son gratuitos?",
    a: "Sí, todos nuestros presupuestos son gratuitos y sin compromiso."
  }, {
    q: "¿Qué formas de pago aceptáis?",
    a: "Aceptamos transferencia bancaria, pago en efectivo y financiación para proyectos de mayor envergadura. Consulta las opciones disponibles para tu caso."
  }]
}, {
  category: "Instalaciones solares",
  questions: [{
    q: "¿Cuánto puedo ahorrar con paneles solares?",
    a: "El ahorro depende de tu consumo, la orientación de tu tejado y la potencia instalada. En general, nuestros clientes consiguen ahorros del 50% al 70% en su factura eléctrica."
  }, {
    q: "¿Gestionáis las subvenciones?",
    a: "Sí, nos encargamos de toda la tramitación de subvenciones y ayudas disponibles para instalaciones fotovoltaicas, incluyendo deducciones fiscales."
  }, {
    q: "¿Cuánto dura la instalación de paneles solares?",
    a: "Una instalación residencial típica se completa en 1-3 días. Proyectos comerciales o de mayor envergadura pueden requerir más tiempo según la complejidad."
  }, {
    q: "¿Qué garantía tienen los paneles?",
    a: "Los paneles solares tienen garantía de producto de 10-25 años y garantía de rendimiento de hasta 25-30 años, dependiendo del fabricante."
  }]
}, {
  category: "Puntos de carga VE",
  questions: [{
    q: "¿Puedo instalar un cargador en mi garaje comunitario?",
    a: "Sí, es posible. Gestionamos la instalación en comunidades de vecinos cumpliendo la normativa y con sistemas de facturación individual."
  }, {
    q: "¿Qué es el Plan MOVES y cómo me beneficia?",
    a: "El Plan MOVES es un programa de ayudas del gobierno para la instalación de puntos de carga de vehículos eléctricos. Podemos gestionar la solicitud completa para que obtengas el máximo beneficio."
  }, {
    q: "¿Cuánto cuesta instalar un punto de carga?",
    a: "El precio varía según el tipo de cargador y la complejidad de la instalación. Un cargador doméstico básico puede partir de 700-1.000€. Solicita presupuesto personalizado."
  }]
}, {
  category: "Climatización",
  questions: [{
    q: "¿Qué tipo de aire acondicionado me recomendáis?",
    a: "Depende del espacio, el uso y tu presupuesto. Trabajamos con equipos inverter de alta eficiencia energética que consumen menos y mantienen mejor la temperatura."
  }, {
    q: "¿Hacéis mantenimiento de equipos de climatización?",
    a: "Sí, ofrecemos servicio de mantenimiento preventivo y correctivo: limpieza de filtros, revisión de gas, reparaciones, etc."
  }]
}, {
  category: "Instalaciones eléctricas",
  questions: [{
    q: "¿Hacéis certificaciones eléctricas (boletines)?",
    a: "Sí, emitimos certificados de instalación eléctrica (boletines) para obra nueva, reformas y cambios de potencia."
  }, {
    q: "¿Podéis modernizar una instalación antigua?",
    a: "Por supuesto. Realizamos reformas eléctricas para actualizar instalaciones antiguas a la normativa actual, mejorando la seguridad y eficiencia."
  }]
}];
const PreguntasFrecuentes = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const toggleItem = (id: string) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  return <Layout>
      {/* Hero with background image */}
      <section className="relative enerta-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerFaq} alt="Preguntas Frecuentes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="enerta-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Encuentra respuestas a las preguntas más habituales sobre nuestros servicios. 
              Si no encuentras lo que buscas, no dudes en contactarnos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map(category => <div key={category.category}>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, index) => {
                const id = `${category.category}-${index}`;
                const isOpen = openItems.includes(id);
                return <div key={id} className="bg-card border border-border rounded-xl overflow-hidden">
                        <button onClick={() => toggleItem(id)} className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/50 transition-colors">
                          <span className="font-medium text-foreground pr-4">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && <div className="px-5 pb-5 pt-0">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.a}
                            </p>
                          </div>}
                      </div>;
              })}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Technical Audit CTA */}
      <section className="enerta-section bg-accent/50">
        <div className="enerta-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              ¿Su proyecto tiene requisitos específicos?
            </h2>
            <p className="text-muted-foreground mb-6">
              Si tienes necesidades particulares o un proyecto complejo, 
              solicita una auditoría técnica personalizada.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="font-semibold">
                Solicitar auditoría técnica
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default PreguntasFrecuentes;