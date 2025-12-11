import aboutImage from "@/assets/foto-1.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
              <img
                src={aboutImage}
                alt="Beleza real e diversa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="animate-fade-in-slow">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Sobre o Cazuá
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                No Kamikase, acreditamos que beleza é sobre se sentir bem em sua própria pele.
                Criamos um espaço que parece uma extensão da sua casa - acolhedor, confortável e autêntico.
              </p>
              <p>
                Nossa filosofia é simples: celebrar a beleza real de cada pessoa. Sem padrões
                inalcançáveis, sem pressão. Apenas você, seu bem-estar e profissionais
                apaixonados pelo que fazem.
              </p>
              <p>
                Com uma estética minimalista e tons que remetem ao calor brasileiro,
                oferecemos mais do que serviços de beleza - oferecemos uma experiência
                de autocuidado genuíno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;