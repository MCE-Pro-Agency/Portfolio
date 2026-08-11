import { motion } from "framer-motion";
import { ArrowRight, Clapperboard, Globe, Palette, Share2 } from "lucide-react";

const solutions = [
  { icon: Globe, title: "Sites web", desc: "Vitrine, e-commerce ou landing page : une présence rapide, intuitive et pensée pour convertir.", href: "/portfolio/sites" },
  { icon: Palette, title: "Identité visuelle", desc: "Logo, charte et supports cohérents pour rendre votre marque mémorable au premier regard.", href: "/portfolio/logos" },
  { icon: Share2, title: "Communication digitale", desc: "Des contenus et campagnes adaptés à votre audience pour gagner en visibilité et en engagement.", href: "#contact" },
  { icon: Clapperboard, title: "Vidéo & motion", desc: "Des formats vivants et professionnels pour raconter votre activité avec plus d’impact.", href: "/portfolio/videos" },
];

const TestimonialsSection = () => (
  <section id="solutions" className="bg-background py-14 md:py-20">
    <div className="container px-4">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Des solutions concrètes</p><h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">Tout ce qu’il faut pour <span className="text-gradient-gold">faire grandir votre image.</span></h2></div>
        <p className="max-w-md text-muted-foreground md:text-right">Choisissez un besoin précis ou confiez-nous l’ensemble de votre communication : nous construisons une réponse cohérente.</p>
      </motion.div>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <motion.a key={solution.title} href={solution.href} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -7 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative flex items-start gap-5">
              <span className={"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white " + (index % 2 ? "bg-blue-mid" : "bg-primary")}><solution.icon size={26} /></span>
              <div><h3 className="text-xl font-bold text-card-foreground">{solution.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{solution.desc}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent">Découvrir <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span></div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
export default TestimonialsSection;
