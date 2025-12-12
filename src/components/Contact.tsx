import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Caturai, 263",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 97148-6815",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "salaocazua@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@cazuasalao",
    },
  ];

  const hours = [
    { day: "Segunda a Sexta", time: "9h às 20h" },
    { day: "Sábado", time: "9h às 18h" },
    { day: "Domingo", time: "Fechado" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Vamos nos Conhecer?
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Agende seu horário e venha nos conhecer.
            Estamos esperando por você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-slow">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-foreground/70">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="animate-fade-in-slow" style={{ animationDelay: "150ms" }}>
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Horário de Funcionamento
                </h3>
              </div>
              <div className="space-y-4">
                {hours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <span className="text-foreground/80">{schedule.day}</span>
                    <span className="font-medium text-foreground">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft hover:shadow-glow transition-smooth text-base h-14"
              size="lg"
            >
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
