import { motion } from "framer-motion";
import { CheckCircle2, Compass, PenTool, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, title: "Diagnostic", desc: "Vos besoins, objectifs et priorités." },
  { icon: CheckCircle2, title: "Direction", desc: "La solution, le style et les livrables." },
  { icon: PenTool, title: "Création", desc: "Conception, échanges et validation." },
  { icon: Rocket, title: "Livraison & suivi", desc: "Mise en ligne, prise en main et évolution." },
];

const ProcessSection = () => (
  <section id="process" className="relative overflow-hidden bg-gradient-to-br from-secondary/70 via-background to-blue-mid/10 py-20 md:py-28">
    <motion.div aria-hidden="true" className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-mid/15 blur-3xl" animate={{ scale: [1, 1.18, 1], x: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
    <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:32px_32px]" />
    <div className="container relative z-10 px-4">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-blue-mid/30 bg-background px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-mid">Notre méthode</span>
        <h2 className="mt-5 text-3xl font-bold text-foreground md:text-5xl">De l’idée au résultat, <span className="text-gradient-gold">simplement.</span></h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Un parcours fluide en quatre étapes, avec vous du début à la fin.</p>
      </motion.div>

      <div className="mt-16 overflow-x-auto pb-6 [scrollbar-width:thin]">
        <div className="relative mx-auto flex min-w-[920px] max-w-6xl items-start px-4">
          <motion.div
            className="absolute left-[12.5%] right-[12.5%] top-8 h-1 origin-left rounded-full bg-gradient-to-r from-accent via-blue-mid to-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.25 + index * 0.18 }}
              whileHover={{ y: -10 }}
              className="group relative w-1/4 px-3 text-center"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.12 }}
                className={"relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-background text-white shadow-lg " + (index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-blue-mid" : "bg-accent")}
              >
                <step.icon size={27} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy-deep text-xs font-bold text-white">{index + 1}</span>
              </motion.div>
              <div className="mt-7 rounded-2xl border border-blue-mid/20 bg-card p-5 shadow-md transition-all group-hover:border-blue-mid/50 group-hover:shadow-xl">
                <h3 className="text-lg font-bold text-card-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground md:hidden">Faites glisser pour voir les étapes →</p>
    </div>
  </section>
);
export default ProcessSection;
