import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import logoGreenplug from "@/assets/logo-greenplug.webp";
import logoPolicharger from "@/assets/logo-policharger.webp";
import logoChargevite from "@/assets/logo-chargevite.webp";

const partners = [
  {
    name: "Green Plug",
    description: "Empresa especializada en soluciones de carga para vehículos eléctricos, ofreciendo puntos de recarga inteligentes y eficientes para el hogar, empresas y espacios públicos.",
    logo: logoGreenplug,
    url: "https://www.greenplug.es/"
  },
  {
    name: "Policharger",
    description: "Fabricante líder de cargadores para vehículos eléctricos con tecnología avanzada, diseño innovador y opciones de conectividad para todo tipo de instalaciones.",
    logo: logoPolicharger,
    url: "https://policharger.com/"
  },
  {
    name: "ChargeVite",
    description: "Proveedor de infraestructura de carga rápida y ultrarrápida para vehículos eléctricos, con soluciones escalables para particulares, empresas y flotas.",
    logo: logoChargevite,
    url: "https://chargevite.com/"
  }
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Colaboradores
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Nuestros Partners
            </h1>
            <p className="text-lg text-muted-foreground">
              Trabajamos con los mejores fabricantes y distribuidores del sector para garantizar 
              la máxima calidad en todas nuestras instalaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Content */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="max-w-4xl mx-auto space-y-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Logo */}
                  <div className="w-full md:w-48 h-24 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <h2 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {partner.name}
                      </h2>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
