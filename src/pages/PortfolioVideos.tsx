import { motion } from "framer-motion";
import { Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { videos } from "@/data/portfolio";

const PortfolioVideos = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-20 bg-background">
      <div className="container px-4">
        <Link to="/realisations" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={18} /> Retour
        </Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Nos <span className="text-gradient-gold">Vidéos</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Toutes nos réalisations vidéo et couvertures événementielles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img src={v.img} alt={v.name} loading="lazy" width={800} height={512} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-deep/50 flex items-center justify-center">
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center hover:bg-accent transition-colors hover:scale-110 duration-300">
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
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PortfolioVideos;
