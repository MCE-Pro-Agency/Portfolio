import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, FileImage, Globe, Grid2X2, Palette, Play, Video, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { flyers, logos, sites, videos } from "@/data/portfolio";

type Category = "all" | "sites" | "logos" | "videos" | "flyers";

const categories = [
  { key: "all", label: "Tous", icon: Grid2X2 },
  { key: "sites", label: "Sites Web", icon: Globe },
  { key: "logos", label: "Logos", icon: Palette },
  { key: "videos", label: "Vidéos", icon: Video },
  { key: "flyers", label: "Flyers", icon: FileImage },
] as const;

const sections = [
  { key: "sites", title: "Sites Web", intro: "Des expériences digitales performantes et intuitives.", items: sites, path: "/portfolio/sites" },
  { key: "logos", title: "Logos", intro: "Des identités visuelles distinctives et mémorables.", items: logos, path: "/portfolio/logos" },
  { key: "videos", title: "Vidéos", intro: "Des formats vivants qui captent et racontent.", items: videos, path: "/portfolio/videos" },
  { key: "flyers", title: "Flyers", intro: "Des supports conçus pour informer et déclencher l’action.", items: flyers, path: "/portfolio/flyers" },
] as const;

type PortfolioItem = {
  img: string;
  name: string;
  desc: string;
  url?: string;
};

const ProjectCard = ({ item, category, onPreview }: { item: PortfolioItem; category: Exclude<Category, "all">; onPreview: (src: string, alt: string) => void }) => {
  const isPortrait = category === "flyers";
  const isSquare = category === "logos";
  const isVideo = category === "videos";

  return (
    <motion.article layout whileHover={{ y: -8 }} className="group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-shadow hover:shadow-2xl">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className={"w-full object-cover transition-transform duration-700 group-hover:scale-105 " + (isPortrait ? "aspect-[4/5]" : isSquare ? "aspect-square" : "aspect-[4/3]")}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-navy-deep">
              {isVideo ? "Voir la vidéo" : "Voir le projet"} {isVideo ? <Play size={16} /> : <ExternalLink size={16} />}
            </a>
          ) : (
            <button onClick={() => onPreview(item.img, item.name)} className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-navy-deep">Agrandir</button>
          )}
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-navy-deep/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
          {sections.find((section) => section.key === category)?.title}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-card-foreground">{item.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
      </div>
    </motion.article>
  );
};

const Realisations = () => {
  const [active, setActive] = useState<Category>("all");
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const visibleSections = active === "all" ? sections : sections.filter((section) => section.key === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-primary to-blue-mid pb-16 pt-24 text-primary-foreground md:pb-20 md:pt-28">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-mid/30 blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="container relative z-10 px-4 text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Nos <span className="text-gradient-gold">Réalisations</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">Explorez nos créations digitales, identités visuelles, vidéos et supports de communication depuis un seul espace.</p>
          </motion.div>
        </section>

        <section className="relative z-20 -mt-8 pb-20">
          <div className="container px-4">
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 rounded-2xl border border-border bg-card p-3 shadow-xl">
              {categories.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={"inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all md:px-6 " + (active === key ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}
                >
                  <Icon size={18} /> {label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="mt-16 space-y-20">
                {visibleSections.map((section) => (
                  <section key={section.key}>
                    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-mid">Créations MCE</p>
                        <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">{section.title}</h2>
                        <p className="mt-2 text-muted-foreground">{section.intro}</p>
                      </div>
                      <Link to={section.path} className="hidden items-center gap-2 font-bold text-primary transition-colors hover:text-accent sm:inline-flex">Voir tous les {section.title.toLowerCase()} <ArrowRight size={18} /></Link>
                    </div>

                    <div className={"grid gap-6 md:grid-cols-2 " + (section.key === "videos" ? "lg:grid-cols-2" : "lg:grid-cols-3")}>
                      {section.items.map((item) => (
                        <ProjectCard key={item.name} item={item} category={section.key} onPreview={(src, alt) => setPreview({ src, alt })} />
                      ))}
                    </div>

                    <div className="mt-9 flex justify-center">
                      <Link to={section.path} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-mid">
                        Voir plus — {section.title} <ArrowRight size={18} />
                      </Link>
                    </div>
                  </section>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {preview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPreview(null)} className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-5">
            <button onClick={() => setPreview(null)} aria-label="Fermer" className="absolute right-6 top-6 text-white transition-colors hover:text-accent"><X size={34} /></button>
            <motion.img initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.88 }} src={preview.src} alt={preview.alt} className="max-h-[88vh] max-w-full rounded-2xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Realisations;
