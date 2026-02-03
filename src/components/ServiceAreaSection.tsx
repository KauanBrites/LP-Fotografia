import { MapPin } from "lucide-react";

const cities = [
  { name: "Ponta Porã", highlight: true, icon: "🏙️" },
  { name: "Dourados", highlight: false, icon: "🌆" },
  { name: "Campo Grande", highlight: false, icon: "🏢" },
  { name: "Região", highlight: false, icon: "📍" },
];

export function ServiceAreaSection() {
  return (
    <section id="atendimento" className="py-16 md:py-24 section-dark">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Onde <span className="text-gradient">Atendemos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Levamos fotografia profissional até você em Ponta Porã, Dourados, Campo Grande e toda região
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {cities.map((city, index) => (
            <div
              key={city.name}
              className={`group relative overflow-hidden flex flex-col items-center gap-3 px-6 py-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                city.highlight
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 border-primary shadow-lg shadow-primary/20"
                  : "bg-card border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {city.icon}
              </div>
              <MapPin
                className={`w-6 h-6 mb-1 ${
                  city.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                }`}
              />
              <span className={`font-semibold text-lg md:text-xl text-center ${
                city.highlight ? "text-primary" : "group-hover:text-primary"
              }`}>
                {city.name}
              </span>
              {city.highlight && (
                <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                  Principal
                </span>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm md:text-base">
            📞 Entre em contato e confirme o atendimento na sua cidade!
          </p>
        </div>
      </div>
    </section>
  );
}
