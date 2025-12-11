import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Ana Paula Silva",
      text: "Lorem ipsum dolor sit amet. Eos libero aliquid cum iste possimus in Quis rerum sed necessitatibus facilis ut perspiciatis aliquam! Ab saepe architecto ab quibusdam blanditiis qui fuga autem sit molestiae voluptatem sed quis earum qui quia galisum.",
      rating: 5,
    },
    {
      name: "Carolina Mendes",
      text: "Lorem ipsum dolor sit amet. Ut velit commodi a minus animi est illum explicabo. Sed iusto incidunt aut quia soluta ut accusamus laborum a dolores internos hic consequatur suscipit.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      text: "Lorem ipsum dolor sit amet. Ab obcaecati Quis qui neque quia aut voluptas explicabo id labore quisquam ea neque quisquam ut dignissimos ipsa. Et dolorem enim ex quaerat omnis ut numquam perspiciatis aut dicta repellat aut officia dolore.",
      rating: 5,
    },
    {
      name: "Beatriz Oliveira",
      text: "Lorem ipsum dolor sit amet. Est atque ducimus hic nesciunt omnis ea recusandae voluptas et consequatur perspiciatis. Ut eaque nisi et sunt perferendis 33 quae possimu",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que dizem sobre nós
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Histórias reais de pessoas que encontraram no Kamikase
            um espaço de acolhimento e beleza autêntica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-smooth animate-fade-in-slow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-base">
                "{review.text}"
              </p>
              <p className="font-semibold text-foreground">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
