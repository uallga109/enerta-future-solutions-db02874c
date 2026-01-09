import Layout from "@/components/layout/Layout";

const PoliticaCookies = () => {
  return (
    <Layout>
      <section className="enerta-section bg-secondary/30">
        <div className="enerta-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Política de Cookies
            </h1>
          </div>
        </div>
      </section>

      <section className="enerta-section">
        <div className="enerta-container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">¿Qué son las cookies?</h2>
            <p className="text-muted-foreground mb-6">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
              Se utilizan para recordar sus preferencias y mejorar su experiencia de navegación.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Tipos de cookies que utilizamos</h2>
            <p className="text-muted-foreground mb-4">
              En nuestro sitio web utilizamos los siguientes tipos de cookies:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li><strong>Cookies técnicas:</strong> Son esenciales para el funcionamiento del sitio web y permiten la navegación básica.</li>
              <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio web, proporcionando información sobre las áreas visitadas y el tiempo de navegación.</li>
              <li><strong>Cookies de personalización:</strong> Permiten recordar sus preferencias para personalizar su experiencia en futuras visitas.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Gestión de cookies</h2>
            <p className="text-muted-foreground mb-6">
              Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie. 
              Sin embargo, si rechaza las cookies, es posible que algunas partes del sitio web no funcionen correctamente.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Cómo desactivar las cookies</h2>
            <p className="text-muted-foreground mb-6">
              Puede configurar las opciones de cookies en los ajustes de su navegador. A continuación, le indicamos 
              cómo hacerlo en los navegadores más comunes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
              <li>Mozilla Firefox: Opciones → Privacidad y seguridad → Cookies</li>
              <li>Safari: Preferencias → Privacidad → Cookies</li>
              <li>Microsoft Edge: Configuración → Cookies y permisos del sitio</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Actualización de la política</h2>
            <p className="text-muted-foreground">
              Esta política de cookies puede actualizarse periódicamente para reflejar cambios en nuestras prácticas 
              de cookies o por otros motivos operativos, legales o regulatorios. Le recomendamos revisar esta página 
              regularmente para estar informado sobre el uso de cookies.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaCookies;
