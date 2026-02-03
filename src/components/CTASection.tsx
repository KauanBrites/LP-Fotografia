import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5567992522270?text=Olá, quero fotos profissionais para meu negócio";

export function CTASection() {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-12 lg:p-16 text-center">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Leve seu Delivery para o{" "}
              <span className="text-gradient">Próximo Nível</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10">
              Fotos profissionais fazem diferença no faturamento. Solicite um
              orçamento e veja seu negócio se destacar.
            </p>
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
      </div>
    </section>
  );
}
