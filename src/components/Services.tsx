import { Scissors, Sparkles, Heart, Flower } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Cuidado Capilar",
      // items: [
      //   "Cortes personalizados",
      //   "Coloração natural",
      //   "Tratamentos capilares",
      //   "Penteados para ocasiões especiais",
      // ],
    },
    {
      icon: Sparkles,
      title: "Corte de Cabelo",
      // items: [
      //   "Limpeza de pele profunda",
      //   "Tratamentos anti-idade",
      //   "Massagem facial relaxante",
      //   "Design de sobrancelhas",
      // ],
    },
    {
      icon: Heart,
      title: "Luzes",
      // items: [
      //   "Massagem relaxante",
      //   "Aromaterapia",
      //   "Reflexologia",
      //   "Ritual de autocuidado",
      // ],
    },
    {
      icon: Flower,
      title: "Coloração",
      // items: [
      //   "Manicure e pedicure",
      //   "Depilação com cera natural",
      //   "Esfoliação corporal",
      //   "Hidratação profunda",
      // ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Serviços pensados para cuidar de você de forma completa,
            em um ambiente acolhedor e minimalista.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-8 animate-fade-in-slow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-40 h-40 gradient-warm rounded-full flex items-center justify-center shadow-soft mx-auto">
                <h3 className="text-xl font-semibold text-white text-center px-4">
                  {service.title}
                </h3>
              </div>
              {/* <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/70 text-sm flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
