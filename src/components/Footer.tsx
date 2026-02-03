export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#inicio" className="font-display text-xl text-gradient">
            MK Produções
          </a>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2025 MK Produções - Fotografia Profissional para Delivery. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
