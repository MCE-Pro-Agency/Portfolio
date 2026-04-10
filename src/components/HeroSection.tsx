import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-illustration.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-navy-deep/50" />

      <div className="relative z-10 container text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
        >
          Gérez votre agence{" "}
          <span className="text-gradient-gold">en toute simplicité</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto font-body"
        >
          Centralisez vos Leads, clients, projets et équipes dans une seule
          plateforme. Optimisez votre productivité et développez votre activité avec{" "}
          <span className="text-accent font-semibold">MCE Agency</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold text-base rounded-lg hover:bg-accent/80 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
          >
            Commencer gratuitement →
          </a>
          <a
            href="#portfolio"
            className="inline-flex px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-bold text-base rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Voir nos réalisations
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
