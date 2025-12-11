import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fundo.jpg";
import Logo from "@/assets/logo";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Beleza Real,
          <br />
          <span className="text-primary">Aconchego Genuíno</span>
        </h1> */}
        <div className="flex justify-center mb-6  animate-fade-in-slow">
          <Logo />
        </div>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-slow">
         Experiência real de beleza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slow">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft hover:shadow-glow transition-smooth text-base px-8"
          >
            Agendar Horário
          </Button>
          <Button
            onClick={() => scrollToSection("services")}
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 transition-smooth text-base px-8"
          >
            Nossos Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
