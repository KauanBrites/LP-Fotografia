import portfolioLanche from "@/assets/port/lanche.jpg";
import portfolioLanche1 from "@/assets/port/lanche1.jpg";
import portfolioPorcao from "@/assets/port/porcao.jpg";
import portfolioPrato from "@/assets/port/prato.jpg";
import portfolioEspetinho from "@/assets/port/espetinho.jpg";
import portfolioCaldo from "@/assets/port/caldo.jpg";
import portfolioChapa from "@/assets/port/chapa.jpg";
import portfolioPetitGatue from "@/assets/port/petitgatue.png";

const portfolioItems = [
  {
    image: portfolioLanche,
    title: "Lanches Artesanais",
    description: "Fotografia que valoriza cada ingrediente",
    alt: "Lanche delivery foto profissional",
  },
  {
    image: portfolioPorcao,
    title: "Porções Premium",
    description: "Destaque para textura crocante e quantidade generosa",
    alt: "Porções Premium fotografadas profissionalmente",
  },
  {
    image: portfolioPrato,
    title: "Prato Executivo",
    description: "Composição harmônica e cores vibrantes",
    alt: "Prato Executivo fotografia profissional",
  },
  {
    image: portfolioEspetinho,
    title: "Espetinhos Especiais",
    description: "Destaque para o ponto perfeito da carne",
    alt: "Espetinhos Especiais foto profissional",
  },
  {
    image: portfolioCaldo,
    title: "Caldos Caseiros",
    description: "Fotografia que transmite conforto e sabor",
    alt: "Caldo caseiro fotografia profissional",
  },
  {
    image: portfolioChapa,
    title: "Chapa Especial",
    description: "Destaque para o preparo e apresentação impecável",
    alt: "Chapa especial foto profissional",
  },
  {
    image: portfolioLanche1,
    title: "Hambúrguer Gourmet",
    description: "Foto profissional com ângulo estratégico e iluminação perfeita",
    alt: "Hambúrguer Gourmet fotografado profissionalmente",
  },
  {
    image: portfolioPetitGatue,
    title: "Sobremesas Irresistíveis",
    description: "Detalhes que despertam o desejo imediato",
    alt: "Sobremesas fotografia profissional",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 section-dark">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Nosso Trabalho em <span className="text-gradient">Ação</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Veja a qualidade das fotos que entregamos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl aspect-square card-glow"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 md:group-hover:opacity-100 md:opacity-0 opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg md:text-xl mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
