import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Globe2, MessageCircle } from "lucide-react";

const services = [
  "Site vitrine",
  "E-commerce",
  "Landing page",
  "Logo",
  "Carte de visite",
  "Réseaux sociaux",
  "Vidéo / Motion design",
  "Flyer / Affiche",
];

const CtaSection = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || selectedServices.length === 0) {
      toast.error("Veuillez remplir tous les champs et sélectionner au moins un service.");
      return;
    }

    const subject = encodeURIComponent("Demande de devis – MCE Agency");
    const body = encodeURIComponent(
      `Prénom : ${firstName}\nNom : ${lastName}\nEmail : ${email}\n\nServices souhaités :\n${selectedServices.map((s) => `- ${s}`).join("\n")}`
    );
    window.location.href = "mailto:mceproagency@gmail.com?subject=" + subject + "&body=" + body;

    toast.success("Votre demande a été préparée !");
    setOpen(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSelectedServices([]);
  };

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-navy via-primary to-navy-deep py-14 md:py-20">
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container relative z-10 px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Un projet en tête ?</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">Passons de votre idée à une solution <span className="text-gradient-gold">qui vous ressemble.</span></h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">Expliquez-nous simplement votre besoin. Nous vous aidons à choisir la bonne direction, sans engagement et sans jargon.</p>
              <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <a href="https://mce-senegal.com/." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"><Globe2 size={17} /> Site officiel MCE</a>
                <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-105">Demander un devis <ArrowRight size={17} /></button>
                <a href="https://wa.me/221781839973" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"><MessageCircle size={17} /> Écrire sur WhatsApp</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-7 backdrop-blur-md md:p-9">
              <p className="text-lg font-bold text-primary-foreground">Ce qui se passe ensuite</p>
              <ul className="mt-6 space-y-5">
                {["Un premier échange pour comprendre votre besoin", "Une recommandation claire et adaptée", "Un devis détaillé avant de commencer"].map((item) => (
                  <li key={item} className="flex gap-3 text-primary-foreground/80"><CheckCircle2 size={21} className="mt-0.5 shrink-0 text-accent" /> {item}</li>
                ))}
              </ul>
              <p className="mt-7 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/55">Réponse rapide • Accompagnement personnalisé • Dakar & international</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-border sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">Demander un devis</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Remplissez le formulaire et nous vous recontacterons rapidement.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" placeholder="Votre prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" placeholder="Votre nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Adresse mail</Label>
              <Input id="email" type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Services souhaités</Label>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 p-2 rounded-md border border-border hover:bg-accent/10 cursor-pointer transition-colors"
                  >
                    <Checkbox
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => toggleService(service)}
                    />
                    <span className="text-sm text-foreground">{service}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/80 font-bold">
              Envoyer la demande
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CtaSection;
