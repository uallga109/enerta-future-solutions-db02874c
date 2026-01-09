import Layout from "@/components/layout/Layout";

const PoliticaPrivacidad = () => {
  return (
    <Layout>
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Política de Privacidad
            </h1>
          </div>
        </div>
      </section>

      <section className="enerta-section">
        <div className="enerta-container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Responsable del tratamiento</h2>
            <p className="text-muted-foreground mb-6">
              Enerta Future es responsable del tratamiento de los datos personales del Usuario y le informa de que estos 
              datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), 
              y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Finalidad del tratamiento</h2>
            <p className="text-muted-foreground mb-6">
              Los datos personales recabados a través de los formularios de contacto serán utilizados con la finalidad 
              de gestionar las consultas y solicitudes de presupuesto de los usuarios, así como para el envío de 
              comunicaciones comerciales si el usuario ha dado su consentimiento.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Legitimación</h2>
            <p className="text-muted-foreground mb-6">
              La base legal para el tratamiento de los datos es el consentimiento del usuario otorgado al enviar el 
              formulario de contacto, así como el interés legítimo de Enerta Future en atender las consultas recibidas.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Conservación de datos</h2>
            <p className="text-muted-foreground mb-6">
              Los datos personales se conservarán durante el tiempo necesario para dar respuesta a la consulta planteada 
              y, en su caso, durante el período de tiempo que dure la relación comercial entre las partes.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Derechos del usuario</h2>
            <p className="text-muted-foreground mb-6">
              El usuario puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad, limitación u 
              oposición al tratamiento de sus datos personales dirigiéndose a Enerta Future a través de los datos de 
              contacto facilitados en esta web.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Destinatarios</h2>
            <p className="text-muted-foreground mb-6">
              No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la prestación del 
              servicio solicitado.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Seguridad</h2>
            <p className="text-muted-foreground">
              Enerta Future ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad 
              e integridad de los datos personales, así como para evitar su alteración, pérdida, tratamiento o acceso 
              no autorizado.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidad;
