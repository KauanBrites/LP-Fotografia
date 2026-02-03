import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import logoEspetosGoiano from "@/assets/espetosgoiano.png";
import logoDivinoFogao from "@/assets/divinofogao.png";
import logoSaborDivino from "@/assets/sabordivino.png";
import logoLanchesDelivery from "@/assets/lanches-delivery.png";

const clients = [
  { name: "Espeto Goiano", logo: logoEspetosGoiano },
  { name: "Divino Sabor", logo: logoSaborDivino },
  { name: "Divino Fogão", logo: logoDivinoFogao },
  { name: "Lanches Delivery", logo: logoLanchesDelivery },
];

const testimonials = [
  {
    name: "Nilton Pusquê",
    role: "Proprietário do Espetos Goiano - Ponta Porã/MS",
    content:
      "As fotos da MK Produções fizeram meus produtos se destacarem no iFood. Tive um aumento de 30% nos pedidos no primeiro mês. Investimento que valeu cada centavo!",
  },
  {
    name: "Junior Peroli",
    role: "Dono da Lanches Delivery - Aral Moreira/MS",
    content:
      "Profissionalismo total! As fotos ficaram incríveis e o processo foi super rápido. Agora meu Instagram está muito mais profissional e as vendas aumentaram bastante.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="clientes" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Nossos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Confiaram no nosso trabalho e estão vendendo mais com fotos
            profissionais
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 md:mb-16">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-3 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 group-hover:scale-110 shadow-lg">
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="card-glow bg-card border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground text-base md:text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
