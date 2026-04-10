import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Analyse", desc: "Étude approfondie de vos besoins et de votre marché." },
  { icon: Lightbulb, title: "Stratégie", desc: "Définition d'un plan d'action sur mesure." },
  { icon: PenTool, title: "Création", desc: "Design et développement de vos supports digitaux." },
  { icon: Rocket, title: "Livraison", desc: "Déploiement, suivi et optimisation continue." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Notre <span className="text-gradient-gold">Process</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Une méthodologie éprouvée pour des résultats exceptionnels.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <s.icon size={32} className="text-accent" />
            </div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
