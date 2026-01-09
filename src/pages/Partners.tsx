import Layout from "@/components/layout/Layout";

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

      {/* Partners Content - Placeholder */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Próximamente añadiremos información sobre nuestros partners y colaboradores.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
