import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, X, Globe, Palette, Video, ChevronDown, ChevronUp } from "lucide-react";

import site1 from "@/assets/portfolio-site-1.jpg";
import site2 from "@/assets/portfolio-site-2.jpg";
import site3 from "@/assets/portfolio-site-3.jpg";
import site4 from "@/assets/portfolio-site-4.jpg";
import site5 from "@/assets/portfolio-site-5.jpg";
import site6 from "@/assets/portfolio-site-6.jpg";
import site7 from "@/assets/portfolio-site-7.jpg";
import logo1 from "@/assets/portfolio-logo-1.jpg";
import logo2 from "@/assets/portfolio-logo-2.jpg";
import logo3 from "@/assets/portfolio-logo-3.jpg";
import video1 from "@/assets/portfolio-video-1.jpg";
import video2 from "@/assets/portfolio-video-2.jpg";

const categories = [
  { key: "sites", label: "Sites Web", icon: Globe },
  { key: "logos", label: "Logos", icon: Palette },
  { key: "videos", label: "Vidéos", icon: Video },
] as const;

type Category = (typeof categories)[number]["key"];

const INITIAL_COUNT: Record<Category, number> = {
  sites: 3,
  logos: 3,
  videos: 2,
};

const sites = [
  { img: site1, name: "Mce Pro Agency", desc: "Agence de communication digitale", url: "https://mce-pro.agency/" },
  { img: site2, name: "Timalove", desc: "Plateforme site de rencontre", url: "https://www.tima-love.com/" },
  { img: site3, name: "Garage mécanique Amilly", desc: "Site vitrine garagiste", url: "https://garage-mecanique-amilly.com/" },
  { img: site5, name: "Delwin Voyage", desc: "Agence de voyage", url: "https://delwinvoyage.sn/" },
  { img: site4, name: "Clinique Auto", desc: "Garage", url: "https://lacliniqueauto.com/" },
  { img: site6, name: "RPI", desc: "Site vitrine Immeuble", url: "https://rpi-bardage.com/" },
  { img: site7, name: "Marimika", desc: "Site e-commerce", url: "https://marimika.com/" },
];

const logos = [
  { img: logo1, name: "Maison Élégance", desc: "Identité visuelle luxe" },
  { img: logo2, name: "TechCube", desc: "Logo tech startup" },
  { img: logo3, name: "OrganicLeaf", desc: "Branding bio & naturel" },
];

const videos = [
  { img: video1, name: "Film Corporate MCE", desc: "Présentation d'entreprise", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { img: video2, name: "Event Highlight", desc: "Couverture événementielle", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

const dataMap: Record<Category, readonly any[]> = { sites, logos, videos };

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("sites");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<Category, boolean>>({
    sites: false,
    logos: false,
    videos: false,
  });

  const handleCategoryChange = (key: Category) => {
    setActive(key);
  };

  const toggleExpand = () => {
    setExpanded((prev) => ({ ...prev, [active]: !prev[active] }));
  };

  const isExpanded = expanded[active];
  const totalItems = dataMap[active].length;
  const initialCount = INITIAL_COUNT[active];
  const hasMore = totalItems > initialCount;

  const visibleSites = isExpanded ? sites : sites.slice(0, INITIAL_COUNT.sites);
  const visibleLogos = isExpanded ? logos : logos.slice(0, INITIAL_COUNT.logos);
  const visibleVideos = isExpanded ? videos : videos.slice(0, INITIAL_COUNT.videos);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Nos <span className="text-gradient-gold">Réalisations</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Découvrez une sélection de projets qui illustrent notre savoir-faire en communication digitale.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {categories.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                active === key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active === "sites" && (
            <motion.div
              key="sites"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleSites.map((s) => (
                <motion.div
                  key={s.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.name}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg flex items-center gap-2 hover:bg-accent/80 transition-colors"
                      >
                        Voir le site <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-card-foreground">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {active === "logos" && (
            <motion.div
              key="logos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleLogos.map((l) => (
                <motion.div
                  key={l.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(l.img)}
                  className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={l.img}
                      alt={l.name}
                      loading="lazy"
                      width={600}
                      height={600}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-deep/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">Agrandir</span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-card-foreground">{l.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{l.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {active === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {visibleVideos.map((v) => (
                <motion.div
                  key={v.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={v.img}
                      alt={v.name}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-deep/50 flex items-center justify-center">
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center hover:bg-accent transition-colors hover:scale-110 duration-300"
                      >
                        <Play size={28} className="text-accent-foreground ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-card-foreground">{v.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Voir plus / Voir moins */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleExpand}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isExpanded ? (
                <>
                  Voir moins <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Voir plus <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-deep/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Logo agrandi"
              className="max-w-lg w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
