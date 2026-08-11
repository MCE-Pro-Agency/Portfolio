import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { logos } from "@/data/portfolio";

const PortfolioLogos = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container px-4">
          <Link to="/realisations" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={18} /> Retour
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Nos <span className="text-gradient-gold">Logos</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Toutes nos créations d'identités visuelles et logos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {logos.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setLightbox(l.img)}
                className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img src={l.img} alt={l.name} loading="lazy" width={600} height={600} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" />
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
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-navy-deep/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} src={lightbox} alt="Logo agrandi" className="max-w-lg w-full rounded-xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PortfolioLogos;
