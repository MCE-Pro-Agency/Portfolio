import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-mce.png";

const Footer = () => (
  <footer className="bg-navy-deep py-12">
    <div className="container px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="MCE" className="h-12 mb-4" />
          <p className="text-sm text-primary-foreground/50 max-w-xs">
            Management Communication Event — Votre partenaire en communication digitale.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" /> contact@mce-agency.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" /> +33 6 00 00 00 00
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" /> Paris, France
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
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300"
              >
                <Icon size={18} className="text-primary-foreground/70 hover:text-gold" />
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
