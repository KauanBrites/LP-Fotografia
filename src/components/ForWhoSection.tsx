import { Utensils, ChefHat, Pizza, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Utensils,
    title: "Lanchonetes",
    description:
      "Destaque seus hambúrgueres e lanches com fotos que fazem qualquer cliente ter água na boca",
  },
  {
    icon: ChefHat,
    title: "Restaurantes",
    description:
      "Mostre a qualidade dos seus pratos com imagens profissionais que transmitem sabor e sofisticação",
  },
  {
    icon: Pizza,
    title: "Pizzarias",
    description:
      "Pizzas irresistíveis que se destacam no feed e aumentam seus pedidos no iFood",
  },
  {
    icon: Truck,
    title: "Delivery em Geral",
    description:
      "Qualquer negócio de delivery que quer se destacar da concorrência com fotos profissionais",
  },
];

export function ForWhoSection() {
  return (
    <section id="para-quem" className="py-16 md:py-24 section-dark">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Para Quem É Este <span className="text-gradient">Serviço?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Para negócios que querem se destacar visualmente com fotos que
            chamem atenção e gerem mais pedidos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-glow bg-card border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
