import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoMce from "@/assets/logo-mce.png";
import { portfolioNavLinks } from "@/data/navigation";

const quoteUrl = "https://mce-senegal.com/contact?service=saas#formulaire-devis";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "border-b border-white/15 bg-primary shadow-lg shadow-navy-deep/15" : "bg-gradient-to-b from-navy-deep/70 to-transparent"}`}>
      <div className={`container flex items-center justify-between px-4 transition-all duration-300 ${solid ? "h-14 md:h-16" : "h-16 md:h-20"}`}>
        <Link to="/" aria-label="Accueil du portfolio MCE" className="relative z-10 flex shrink-0 items-center">
          <span className={`relative block transition-all duration-300 ${solid ? "h-20 w-20 md:h-24 md:w-24" : "h-24 w-24 md:h-28 md:w-28"}`}>
            <img src={logoMce} alt="MCE" className="h-full w-full object-contain" />
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-md">
            {portfolioNavLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="block rounded-full px-5 py-2 text-sm font-bold !text-white transition-colors hover:bg-white/10">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-navy-deep shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90">
            Demander un devis <ArrowUpRight size={16} />
          </a>
        </div>

        <button onClick={() => setOpen((value) => !value)} className="relative z-10 rounded-full border border-white/15 bg-white/10 p-2 text-white md:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep px-4 pb-6 pt-4 md:hidden">
          <ul className="space-y-1">
            {portfolioNavLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-bold !text-white transition-colors hover:bg-white/10">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 font-bold text-navy-deep">
            Demander un devis <ArrowUpRight size={17} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
