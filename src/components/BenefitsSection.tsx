import {
  TrendingUp,
  Award,
  Smartphone,
  CircleDollarSign,
  Sparkles,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Fotos que Vendem Mais",
    description:
      "Imagens profissionais aumentam significativamente a taxa de conversão no iFood e redes sociais.",
  },
  {
    icon: Award,
    title: "Destaque-se da Concorrência",
    description:
      "Enquanto seus concorrentes usam fotos amadoras, você terá imagens profissionais que chamam atenção.",
  },
  {
    icon: Smartphone,
    title: "Pensadas para iFood e Instagram",
    description:
      "Fotos otimizadas especificamente para as plataformas onde seu cliente está.",
  },
  {
    icon: CircleDollarSign,
    title: "Retorno Sobre Investimento",
    description:
      "Fotos profissionais pagam a si mesmas rapidamente com o aumento de pedidos e ticket médio.",
  },
  {
    icon: Sparkles,
    title: "Branding Profissional",
    description:
      "Sua marca se posiciona de forma profissional, transmitindo confiança e qualidade.",
  },
  {
    icon: Zap,
    title: "Processo Rápido",
    description:
      "Sessão fotográfica eficiente e entrega rápida para você começar a usar suas fotos o quanto antes.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Por Que Investir em{" "}
            <span className="text-gradient">Fotos Profissionais?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Fotos profissionais valorizam seu produto, despertam desejo e
            aumentam as chances de venda no delivery e redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
