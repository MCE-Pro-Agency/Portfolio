import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { flyers } from "@/data/portfolio";

const PortfolioFlyers = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-background pb-20 pt-28">
        <div className="container px-4">
          <Link to="/realisations" className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={18} /> Retour
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-14 text-center">
            <h1 className="text-3xl font-bold text-foreground md:text-5xl">Nos <span className="text-gradient-gold">Flyers</span></h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Des supports promotionnels pensés pour informer, attirer l’attention et déclencher l’action.</p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-3">
            {flyers.map((flyer, index) => (
              <motion.article
                key={flyer.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setLightbox(flyer.img)}
                className="group cursor-pointer overflow-hidden rounded-xl bg-card shadow-md transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img src={flyer.img} alt={flyer.name} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/55 opacity-0 transition-opacity group-hover:opacity-100"><span className="font-semibold text-primary-foreground">Agrandir</span></div>
                </div>
                <div className="p-4 text-center"><h2 className="font-bold text-card-foreground">{flyer.name}</h2><p className="mt-1 text-xs text-muted-foreground">{flyer.desc}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-5" onClick={() => setLightbox(null)}>
            <button aria-label="Fermer" className="absolute right-6 top-6 text-primary-foreground hover:text-accent" onClick={() => setLightbox(null)}><X size={32} /></button>
            <motion.img initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} src={lightbox} alt="Flyer agrandi" className="max-h-[88vh] max-w-full rounded-xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default PortfolioFlyers;
