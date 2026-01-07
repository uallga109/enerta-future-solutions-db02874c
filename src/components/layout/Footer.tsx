import { Link } from "react-router-dom";
import { Zap, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="enerta-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">Enerta Future</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Más de 15 años de experiencia en instalaciones eléctricas, energías renovables 
              y soluciones energéticas integrales en Almería y provincia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios/instalaciones-electricas" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Instalaciones Eléctricas
                </Link>
              </li>
              <li>
                <Link to="/servicios/energias-renovables" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Energías Renovables
                </Link>
              </li>
              <li>
                <Link to="/servicios/puntos-carga-ve" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Puntos de Carga VE
                </Link>
              </li>
              <li>
                <Link to="/servicios/climatizacion" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Climatización
                </Link>
              </li>
              <li>
                <Link to="/servicios/gestion-energetica" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Gestión Energética
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/quienes-somos" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Almería y provincia: Roquetas de Mar, El Ejido, Vícar, Vera, Adra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">950 XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">info@enertafuture.es</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">Lun - Vie: 8:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Enerta Future. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Empresa consolidada desde 2020 · +15 años de experiencia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
