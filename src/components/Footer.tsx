import {
  Clock3,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoMce from "@/assets/logo-mce.png";
import { portfolioNavLinks } from "@/data/navigation";

const portfolioLinks = [
  { label: "Accueil", to: "/" },
  { label: "Nos réalisations", to: "/#portfolio" },
  { label: "Contact", to: "/#contact" },
];

const agencyLinks = [
  { label: "Accueil", href: "https://mce-senegal.com/" },
  { label: "Solutions digitales", href: "https://mce-senegal.com/solutions-digitales" },
  { label: "Talents & RH", href: "https://mce-senegal.com/talents-rh" },
  { label: "Événements & Impact", href: "https://mce-senegal.com/evenements-impact" },
  { label: "MCE & Partenaires", href: "https://mce-senegal.com/mce-partenaires" },
  { label: "Contact", href: "https://mce-senegal.com/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mce-management-communication-event", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/mce.monde/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/mce_group1", icon: Instagram },
  { label: "Site officiel MCE", href: "https://mce-senegal.com/", icon: Globe2 },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-accent/25 bg-navy-deep text-primary-foreground">
    <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

    <div className="relative mx-auto max-w-6xl px-3 pb-4 pt-6 sm:px-8 lg:pt-7">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.75fr_1.15fr_1.15fr] lg:gap-8">
        <div>
          <a href="https://mce-senegal.com/" target="_blank" rel="noopener noreferrer" aria-label="Visiter le site officiel MCE" className="inline-block">
            <span className="relative block h-40 w-40 overflow-hidden sm:h-44 sm:w-44">
              <img src={logoMce} alt="MCE" className="absolute left-1/2 top-1/2 h-[200%] w-[200%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain" />
            </span>
          </a>
          <p className="mt-[7px] max-w-[22rem] text-[14.5px] leading-5 text-primary-foreground/70">
            Transformons vos idées en une communication digitale claire et durable.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-primary-foreground">Portfolio</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-5 text-primary-foreground/70">
            {portfolioNavLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-accent">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-primary-foreground">MCE Agency</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-5 text-primary-foreground/70">
            {agencyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-primary-foreground">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] leading-5 text-primary-foreground/75">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" /><span>Ouest Foire, Dakar · Sénégal</span></li>
            <li><a href="tel:+221781839973" className="flex gap-3 transition-colors hover:text-accent"><Phone size={18} className="mt-0.5 shrink-0 text-accent" /><span>+221 78 183 99 73</span></a></li>
            <li><a href="mailto:mceproagency@gmail.com" className="flex gap-3 transition-colors hover:text-accent"><Mail size={18} className="mt-0.5 shrink-0 text-accent" /><span className="break-all">mceproagency@gmail.com</span></a></li>
            <li className="flex gap-3"><Clock3 size={18} className="mt-0.5 shrink-0 text-accent" /><span>Lun – Ven : 9h00 – 18h00</span></li>
            <li className="flex gap-3"><Globe2 size={18} className="mt-0.5 shrink-0 text-accent" /><span>Sénégal · France · Maroc</span></li>
          </ul>
          <div className="mt-4 flex gap-3" aria-label="Réseaux sociaux MCE">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.07] text-primary-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent hover:text-navy-deep"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-3 text-sm text-primary-foreground/50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} MCE Agency — Tous droits réservés.</p>
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          <a href="https://mce-senegal.com/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">Politique de confidentialité</a>
          <a href="https://mce-senegal.com/conditions-generales-de-vente" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">Conditions Générales de Vente</a>
        </div>
      </div>
    </div>

    <motion.a
      href="https://wa.me/221781839973"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter MCE sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#20c763] text-white shadow-2xl sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      animate={{ y: [0, -5, 0], boxShadow: ["0 12px 30px rgba(32,199,99,.25)", "0 16px 38px rgba(32,199,99,.5)", "0 12px 30px rgba(32,199,99,.25)"] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <MessageCircle size={29} />
    </motion.a>
  </footer>
);

export default Footer;
