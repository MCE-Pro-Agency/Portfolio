import { motion } from "framer-motion";

const CtaSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/50 to-transparent" />
    <div className="container px-4 relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight"
      >
        Et si votre projet était{" "}
        <span className="text-gradient-gold">le prochain</span> ?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-6 text-primary-foreground/60 max-w-xl mx-auto text-lg"
      >
        Parlons de votre vision. Notre équipe est prête à donner vie à vos ambitions digitales.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10"
      >
        <a
          href="mailto:contact@mce-agency.com"
          className="inline-flex px-8 py-4 bg-gold text-accent-foreground font-bold text-base rounded-lg hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20"
        >
          Demander un devis
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
