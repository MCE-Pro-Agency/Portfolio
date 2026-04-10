import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
