import { Heart, Users, Sparkles } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Um espaço onde você se sente em casa, à vontade para ser você mesmo.",
    },
    {
      icon: Users,
      title: "Autenticidade",
      description: "Celebramos a beleza real e única de cada pessoa que nos visita.",
    },
    {
      icon: Sparkles,
      title: "Bem-estar",
      description: "Mais que beleza, cuidamos do seu bem-estar físico e emocional.",
    },
  ];

  return (
    <section id="mission" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Missão
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Criar um espaço acolhedor onde cada pessoa possa celebrar sua beleza autêntica,
            sentindo-se em casa e cuidada com carinho e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-smooth animate-fade-in-slow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
