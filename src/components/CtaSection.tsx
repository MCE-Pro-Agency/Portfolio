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
    window.location.href = `mailto:contact@mce-agency.com?subject=${subject}&body=${body}`;

    toast.success("Votre demande a été préparée !");
    setOpen(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSelectedServices([]);
  };

  return (
    <>
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-navy via-primary to-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(195_100%_50%/0.1),transparent_60%)]" />
        <div className="container px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight"
          >
            Et si votre projet était{" "}
            <span className="text-gradient-gold">le prochain</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-primary-foreground/60 max-w-xl mx-auto text-lg"
          >
            Parlons de votre vision. Notre équipe est prête à donner vie à vos ambitions digitales.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <button
              onClick={() => setOpen(true)}
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground font-bold text-base rounded-lg hover:bg-accent/80 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
            >
              Demander un devis
            </button>
          </motion.div>
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
