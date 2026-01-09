import { Home, Building2, Building, Store, Factory, Users, Car, Landmark, Hotel, UtensilsCrossed, Briefcase, Warehouse } from "lucide-react";

interface ClientCardsProps {
  clients: {
    name: string;
    icon: string;
  }[];
}

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  building2: <Building2 className="w-8 h-8" />,
  store: <Store className="w-8 h-8" />,
  factory: <Factory className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  car: <Car className="w-8 h-8" />,
  landmark: <Landmark className="w-8 h-8" />,
  hotel: <Hotel className="w-8 h-8" />,
  restaurant: <UtensilsCrossed className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
  warehouse: <Warehouse className="w-8 h-8" />,
};

const ClientCards = ({ clients }: ClientCardsProps) => {
  return (
    <section className="enerta-section bg-secondary/30">
      <div className="enerta-container">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
          ¿Para quién es este servicio?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center w-32 h-32 bg-card rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {iconMap[client.icon] || <Home className="w-8 h-8" />}
              </div>
              <span className="mt-3 text-sm font-semibold text-foreground text-center px-2">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCards;
