import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Zap, Sun, Car, Wind, BarChart3, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoEnerta from "@/assets/logo-enerta.png";

const services = [
  { name: "Instalaciones Eléctricas", href: "/servicios/instalaciones-electricas", icon: Zap },
  { name: "Energías Renovables", href: "/servicios/energias-renovables", icon: Sun },
  { name: "Puntos de Carga VE", href: "/servicios/puntos-carga-ve", icon: Car },
  { name: "Climatización", href: "/servicios/climatizacion", icon: Wind },
  { name: "Gestión Energética", href: "/servicios/gestion-energetica", icon: BarChart3 },
];

const aboutOptions = [
  { name: "Presentación", href: "/quienes-somos", icon: Users },
  { name: "Partners", href: "/partners", icon: Handshake },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="enerta-container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoEnerta} 
              alt="Enerta Future" 
              className="h-20 w-auto transition-transform group-hover:scale-105"
            />
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

            {/* Quiénes Somos Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 font-medium">
                  Quiénes Somos
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {aboutOptions.map((option) => (
                  <DropdownMenuItem key={option.href} asChild>
                    <Link to={option.href} className="flex items-center gap-3 cursor-pointer">
                      <option.icon className="w-4 h-4 text-primary" />
                      <span>{option.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
              
              <p className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Quiénes Somos
              </p>
              {aboutOptions.map((option) => (
                <Link
                  key={option.href}
                  to={option.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <option.icon className="w-5 h-5 text-primary" />
                  <span>{option.name}</span>
                </Link>
              ))}
              
              <div className="h-px bg-border my-2" />
              
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
