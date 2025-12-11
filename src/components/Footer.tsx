import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Cazuá
          </h3>
          <p className="text-foreground/70 mb-6 max-w-md mx-auto">
            Celebrando a beleza real em um espaço de acolhimento e autenticidade.
          </p>
          <div className="flex items-center justify-center gap-2 text-foreground/60 text-sm">
            {/* <span>Feito com</span> */}
            <Heart className="w-4 h-4 fill-secondary text-secondary" />
            {/* <span>para você</span> */}
          </div>
          <p className="text-foreground/50 text-sm mt-4">
            © 2025 Cazuá Salão de Beleza.
             {/* Todos os direitos reservados. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;