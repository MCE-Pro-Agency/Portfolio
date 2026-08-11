import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, Handshake, Lightbulb, MapPin } from "lucide-react";

const strengths = [
  { icon: Globe2, title: "Une vision internationale", desc: "Une expertise multiculturelle nourrie par des projets et des méthodes venus d’Afrique et d’Europe." },
  { icon: Handshake, title: "Un accompagnement humain", desc: "Un interlocuteur à votre écoute, des échanges simples et une collaboration transparente à chaque étape." },
  { icon: Lightbulb, title: "Des solutions vraiment utiles", desc: "Chaque choix répond à un objectif concret : gagner en visibilité, convaincre et développer votre activité." },
];

const ValuesSection = () => (
  <section id="valeurs" className="relative overflow-hidden bg-background py-14 md:py-20">
    <div className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
    <div className="container relative z-10 px-4">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
            <MapPin size={15} className="text-accent" /> Pourquoi nous choisir ?
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Une vision internationale,{" "}<span className="text-gradient-gold">au cœur du Sénégal.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            MCE associe standards internationaux et compréhension du marché local pour créer des solutions digitales accessibles, modernes et adaptées à chaque ambition.
          </p>
          <a href="#process" className="mt-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent">
            Découvrir notre méthode <ArrowUpRight size={18} />
          </a>
        </motion.div>
        <div className="grid gap-4">
          {strengths.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.12 }} whileHover={{ x: 8 }} className="group flex gap-5 rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-xl">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-accent transition-transform group-hover:rotate-3 group-hover:scale-105"><item.icon size={25} /></div>
              <div><h3 className="text-xl font-bold text-card-foreground">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.desc}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-primary px-7 py-8 text-center shadow-xl md:flex-row md:px-10 md:text-left">
        <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Notre engagement</p><p className="mt-2 max-w-2xl text-xl font-semibold text-primary-foreground md:text-2xl">Une communication simple, authentique et efficace — pensée pour durer.</p></div>
        <a href="#contact" className="shrink-0 rounded-xl bg-accent px-6 py-3 font-bold text-accent-foreground transition-transform hover:scale-105">Parlons de votre projet</a>
      </motion.div>
    </div>
  </section>
);
export default ValuesSection;
