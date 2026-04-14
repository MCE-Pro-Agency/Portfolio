import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aminata D.",
    role: "CEO, TechStart Africa",
    text: "MCE a complètement transformé notre image digitale. Professionnalisme et créativité au rendez-vous !",
  },
  {
    name: "Pierre L.",
    role: "Directeur Marketing, FoodCorp",
    text: "Un accompagnement sur mesure et des résultats qui dépassent nos attentes. Je recommande vivement.",
  },
  {
    name: "Fatou S.",
    role: "Fondatrice, Mode Éthique",
    text: "Leur sens du design et leur réactivité font toute la différence. Notre logo est devenu iconique.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16"
      >
        Ce que disent nos <span className="text-gradient-gold">clients</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-card-foreground/80 italic mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-bold text-card-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
