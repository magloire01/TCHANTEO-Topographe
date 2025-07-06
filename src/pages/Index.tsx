import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Ruler, Compass, Building, Landmark, Map, Phone, Mail, MapIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-surveyor.jpg";
import equipmentImage from "@/assets/surveying-equipment.jpg";
import mapsImage from "@/assets/maps-plans.jpg";

const Index = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Ruler,
      title: "Levés Topographiques",
      description: "Mesures précises du terrain avec les technologies les plus modernes (GPS, station totale, scanner 3D).",
    },
    {
      icon: MapPin,
      title: "Bornage & Délimitation",
      description: "Délimitation officielle des propriétés, implantation de bornes et résolution de litiges fonciers.",
    },
    {
      icon: Map,
      title: "Cartographie & Plans",
      description: "Création de plans topographiques, cadastraux et d'aménagement pour tous vos projets.",
    },
    {
      icon: Building,
      title: "Suivi de Chantiers",
      description: "Accompagnement technique des projets de construction et contrôle d'implantation.",
    },
    {
      icon: Compass,
      title: "Études d'Aménagement",
      description: "Analyses techniques préalables aux projets d'urbanisme et d'aménagement du territoire.",
    },
    {
      icon: Landmark,
      title: "Expertise Foncière",
      description: "Conseil et expertise pour l'évaluation et la gestion de votre patrimoine immobilier.",
    },
  ];

  const expertise = [
    "Plus de 23 ans d'expérience en topographie",
    "Équipements de mesure haute précision - E-survey,...",
    "Certifications professionnelles reconnues",
    "Intervention sur tout type de terrain",
    "Respect des délais et budgets",
    "Service client personnalisé",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">{t("site.title")}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{t("nav.services")}</a>
            <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">{t("nav.expertise")}</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t("nav.contact")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <Link to="/devis">
              <Button variant="hero" size="sm">
                {t("button.quote")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t("hero.title")}
                  <span className="block text-primary">{t("hero.subtitle")}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t("hero.description")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" onClick={() => window.location.href = '#services'}>
                  {t("hero.cta1")}
                </Button>
                <Button variant="outline" size="lg"  onClick={() => window.location.href = '#contact'}>
                  <Phone className="h-4 w-4" />
                  {t("hero.cta2")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3" />
              <div className="relative">
                <img 
                  src={heroImage}
                  alt="Géomètre professionnel au travail"
                  className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg border">
                  <p className="text-lg font-bold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t("surveyor.name")}
                  </p>
                  <p className="text-sm text-muted-foreground">Géomètre-Topographe Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={equipmentImage}
                alt="Équipements de topographie modernes"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Technologies de Pointe
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous utilisons les équipements les plus modernes pour garantir une précision 
                millimétrique dans toutes nos interventions : stations totales, GPS RTK, 
                scanners 3D et drones professionnels.
              </p>
              <Button variant="accent">
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Notre Expertise
                </h2>
                <p className="text-xl text-muted-foreground">
                  Une expérience reconnue au service de la qualité et de la précision
                </p>
              </div>
              
              <div className="grid gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/devis">
                <Button variant="hero" size="lg">
                  Demander un Devis
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={mapsImage}
                alt="Plans et cartes topographiques"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Contactez-Nous
              </h2>
              <p className="text-xl text-muted-foreground">
                Prêt à démarrer votre projet ? Discutons de vos besoins
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Par Téléphone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Appelez-nous pour un premier échange sur votre projet
                  </p>
                    <a href="tel:+237696299406">
                      <p className="text-lg font-semibold text-foreground">
                        +237 6 96 29 94 06
                      </p>
                    </a>
                  <p className="text-sm text-muted-foreground">
                    Lun - Dim : 7h00 - 21h00
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Par Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Envoyez-nous un message détaillé de votre demande
                  </p>
                  <a href="mailto:kamoherve@yahoo.fr" className="block">
                    <p className="text-lg font-semibold text-foreground">
                      kamoherve@yahoo.fr
                    </p>
                  </a>
                  <a href="mailto:kamoherve@yahoo.fr" className="block">
                    <Button variant="accent" className="w-full">
                      Envoyer un Message
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapIcon className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">{t("site.title")}</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2025 {t("site.title")}. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;