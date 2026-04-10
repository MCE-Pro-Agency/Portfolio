import { motion } from "framer-motion";
import { Award, Globe2, Users, TrendingUp } from "lucide-react";

const values = [
  { icon: Award, number: "+10", label: "Projets réalisés", desc: "Sites, logos, vidéos livrés avec excellence." },
  { icon: Globe2, number: "2", label: "Continents couverts", desc: "Expertise Afrique & Europe." },
  { icon: Users, number: "100%", label: "Sur mesure", desc: "Accompagnement personnalisé pour chaque client." },
  { icon: TrendingUp, number: "↑", label: "Résultats concrets", desc: "Croissance mesurable pour nos partenaires." },
];

const ValuesSection = () => (
  <section id="valeurs" className="py-20 md:py-28 bg-gradient-to-br from-navy-deep via-primary to-navy">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-16"
      >
        Pourquoi <span className="text-gradient-gold">nous choisir</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <v.icon size={28} className="text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-1">{v.number}</div>
            <h3 className="text-lg font-bold text-primary-foreground mb-2">{v.label}</h3>
            <p className="text-sm text-primary-foreground/60">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
