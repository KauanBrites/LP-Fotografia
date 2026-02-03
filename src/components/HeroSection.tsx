import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBurger from "@/assets/hero-burger.jpg";

const WHATSAPP_LINK = "https://wa.me/5567992522270?text=Olá, quero fotos profissionais para meu negócio";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBurger}
          alt="Hambúrguer profissional fotografado para delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-20 md:py-32">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 animate-fade-in">
          Fotos Profissionais que{" "}
          <span className="text-gradient">Vendem Mais</span> no Delivery
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Imagens profissionais para lanchonetes, restaurantes e pizzarias que
          querem aumentar pedidos no iFood e Instagram.
        </p>

        <div
          className="animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            asChild
            size="lg"
            className="btn-primary text-lg px-8 py-6 font-bold"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              SOLICITAR ORÇAMENTO
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
