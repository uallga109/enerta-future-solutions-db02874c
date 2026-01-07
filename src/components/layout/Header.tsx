import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Zap, Sun, Car, Wind, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Instalaciones Eléctricas", href: "/servicios/instalaciones-electricas", icon: Zap },
  { name: "Energías Renovables", href: "/servicios/energias-renovables", icon: Sun },
  { name: "Puntos de Carga VE", href: "/servicios/puntos-carga-ve", icon: Car },
  { name: "Climatización", href: "/servicios/climatizacion", icon: Wind },
  { name: "Gestión Energética", href: "/servicios/gestion-energetica", icon: BarChart3 },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="enerta-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-foreground">Enerta Future</span>
              <span className="text-xs text-muted-foreground -mt-1">Energía del futuro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Servicios Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 font-medium">
                  Servicios
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="flex items-center gap-3 cursor-pointer">
                      <service.icon className="w-4 h-4 text-primary" />
                      <span>{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/quienes-somos">
              <Button 
                variant="ghost" 
                className={`font-medium ${isActive("/quienes-somos") ? "bg-accent text-accent-foreground" : ""}`}
              >
                Quiénes Somos
              </Button>
            </Link>

            <Link to="/preguntas-frecuentes">
              <Button 
                variant="ghost" 
                className={`font-medium ${isActive("/preguntas-frecuentes") ? "bg-accent text-accent-foreground" : ""}`}
              >
                FAQ
              </Button>
            </Link>

            <Link to="/contacto">
              <Button variant="default" className="ml-2 font-semibold">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              <p className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Servicios
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <service.icon className="w-5 h-5 text-primary" />
                  <span>{service.name}</span>
                </Link>
              ))}
              
              <div className="h-px bg-border my-2" />
              
              <Link
                to="/quienes-somos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
              >
                Quiénes Somos
              </Link>
              <Link
                to="/preguntas-frecuentes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
              >
                Preguntas Frecuentes
              </Link>
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2"
              >
                <Button className="w-full font-semibold">Contacto</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
