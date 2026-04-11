import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const TikTokIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-navy-deep py-12">
    <div className="container px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <span className="text-2xl font-display font-bold text-primary-foreground tracking-tight">MCE</span>
          <p className="mt-4 text-sm text-primary-foreground/50 max-w-xs">
            Management Communication Event — Votre partenaire en communication digitale.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-accent" /> contact@mce-agency.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-accent" /> +33 6 00 00 00 00
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" /> Paris, France
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4">Suivez-nous</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
              >
                <Icon size={18} className="text-primary-foreground/70 hover:text-accent" />
              </a>
            ))}
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
            >
              <TikTokIcon size={18} className="text-primary-foreground/70 hover:text-accent" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} MCE – Management Communication Event. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
