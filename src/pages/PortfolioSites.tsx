import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sites } from "@/data/portfolio";

const PortfolioSites = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-20 bg-background">
      <div className="container px-4">
        <Link to="/#portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={18} /> Retour
        </Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Nos <span className="text-gradient-gold">Sites Web</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tous nos projets de création de sites internet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" width={800} height={600} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg flex items-center gap-2 hover:bg-accent/80 transition-colors">
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
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PortfolioSites;
