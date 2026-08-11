import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-mce.png";

const creations = ["un site web", "un logo", "un flyer", "une vidéo"];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayedText(creations[0]);
      return;
    }

    const word = creations[wordIndex];
    const complete = displayedText === word;
    const empty = displayedText === "";
    const delay = complete && !deleting ? 1400 : deleting ? 55 : 90;

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
      } else if (empty && deleting) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % creations.length);
      } else {
        setDisplayedText(word.slice(0, displayedText.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, displayedText, reduceMotion, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep bg-cover bg-[72%_center] md:bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/65 to-navy-deep/10" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-accent/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[12%] left-[45%] h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container px-4 pt-20">
        <div className="max-w-3xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight"
        >
          Donnez vie à votre image avec{" "}
          <span className="block mt-2 min-h-[1.15em] text-gradient-gold" aria-live="polite">
            {displayedText}
            <motion.span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.82em] w-[3px] bg-accent align-baseline"
              animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 0.75, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl font-body"
        >
          centralisez vos textes, projets et équipes dans une seule
          plateforme. Optimisez votre productivité et développez votre activité avec{" "}
          <span className="text-accent font-semibold">MCE Agency</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold text-base rounded-lg hover:bg-accent/80 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
          <a
            href="#portfolio"
            className="inline-flex px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-bold text-base rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Voir nos réalisations
          </a>
        </motion.div>
        </div>
      </div>

      <motion.a
        href="#portfolio"
        aria-label="Découvrir nos réalisations"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/70 transition-colors hover:text-accent"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={30} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
