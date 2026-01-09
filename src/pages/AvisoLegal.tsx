import Layout from "@/components/layout/Layout";

const AvisoLegal = () => {
  return (
    <Layout>
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Aviso Legal
            </h1>
          </div>
        </div>
      </section>

      <section className="enerta-section">
        <div className="enerta-container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Datos identificativos</h2>
            <p className="text-muted-foreground mb-6">
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, 
              de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los 
              siguientes datos: Enerta Future, con domicilio en Almería.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Objeto</h2>
            <p className="text-muted-foreground mb-6">
              El presente aviso legal regula el uso y utilización del sitio web enertafuture.es, del que es titular 
              Enerta Future. La navegación por el sitio web atribuye la condición de usuario del mismo e implica la 
              aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Propiedad intelectual e industrial</h2>
            <p className="text-muted-foreground mb-6">
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación 
              y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son 
              propiedad de Enerta Future o dispone de licencia o autorización expresa por parte de los autores.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Exclusión de garantías y responsabilidad</h2>
            <p className="text-muted-foreground mb-6">
              Enerta Future no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza 
              que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad 
              del portal o la transmisión de virus o programas maliciosos.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Modificaciones</h2>
            <p className="text-muted-foreground mb-6">
              Enerta Future se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
              oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se 
              presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Legislación aplicable y jurisdicción</h2>
            <p className="text-muted-foreground">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las 
              actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente 
              las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su 
              uso los Juzgados y Tribunales de Almería.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AvisoLegal;
