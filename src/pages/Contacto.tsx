import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import serviceSolar from "@/assets/service-solar.jpg";

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedPrivacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad para enviar el mensaje.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setAcceptedPrivacy(false);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      {/* Hero with background image */}
      <section className="relative enerta-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={serviceSolar} alt="Contacto Enerta Future" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="enerta-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground font-medium text-sm mb-4 backdrop-blur-sm">
              Estamos aquí para ayudarte
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Contacto
            </h1>
            <p className="text-lg text-primary-foreground/90">
              ¿Tienes un proyecto en mente? Cuéntanos qué necesitas y te asesoramos 
              sin compromiso. Estaremos encantados de ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="enerta-section">
        <div className="enerta-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-muted-foreground text-sm">
                      Almería y provincia: Roquetas de Mar, El Ejido, Vícar, Vera, Adra y alrededores.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <a href="tel:639089786" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      639 089 786
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@enertafuture.es</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                    <p className="text-muted-foreground text-sm">Lunes a Viernes: 8:00 - 19:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/50 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Presupuesto gratuito</h3>
                    <p className="text-muted-foreground text-sm">
                      Todos nuestros presupuestos son gratuitos y sin compromiso. 
                      Te asesoramos para encontrar la mejor solución.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Envíanos un mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="600 000 000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Servicio de interés</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                      >
                        <option value="">Seleccionar servicio</option>
                        <option value="electricidad">Instalaciones Eléctricas</option>
                        <option value="solar">Energías Renovables</option>
                        <option value="carga-ve">Puntos de Carga VE</option>
                        <option value="climatizacion">Climatización</option>
                        <option value="gestion">Gestión Energética</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                      rows={5}
                      required
                    />
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={acceptedPrivacy}
                      onCheckedChange={(checked) => setAcceptedPrivacy(checked === true)}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      He leído y acepto la <Link to="/politica-privacidad" className="text-primary hover:underline">política de privacidad</Link> *
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* WhatsApp Section */}
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Atención directa y sin intermediarios
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contacta con nuestro equipo por WhatsApp y recibe una primera orientación técnica sobre tu proyecto.
                </p>
                <a
                  href="https://wa.me/34639089786?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contactar por WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
