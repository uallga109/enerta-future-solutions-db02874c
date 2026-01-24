import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg animate-slide-up">
      <div className="enerta-container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Aviso de Cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo. El consentimiento de estas tecnologías nos permitirá procesar datos como el comportamiento de navegación o las identificaciones únicas en este sitio. No consentir o retirar el consentimiento, puede afectar negativamente a ciertas características y funciones.
              </p>
              <div className="flex flex-wrap gap-3 mt-2 text-xs">
                <Link to="/aviso-legal" className="text-primary hover:underline">
                  Aviso Legal
                </Link>
                <Link to="/politica-privacidad" className="text-primary hover:underline">
                  Política de Privacidad
                </Link>
                <Link to="/politica-cookies" className="text-primary hover:underline">
                  Política de Cookies
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0 w-full lg:w-auto">
            <Button
              variant="outline"
              onClick={handleDeny}
              className="flex-1 lg:flex-none"
            >
              Denegar
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 lg:flex-none"
            >
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
