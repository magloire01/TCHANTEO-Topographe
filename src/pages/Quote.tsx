import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    address: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Créer le contenu de l'email
      const emailSubject = `Nouvelle demande de devis - ${formData.name}`;
      const emailBody = `
Bonjour,

Nouvelle demande de devis reçue :

Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Type de projet : ${formData.projectType}
Adresse : ${formData.address}

Description du projet :
${formData.description}

Cordialement,
Expert Topographe
      `.trim();

      // Créer le lien mailto
      const mailtoLink = `mailto:magloire.tchanteo@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Ouvrir le client email par défaut
      window.open(mailtoLink, '_blank');

      toast({
        title: "Email préparé !",
        description: "Votre client email s'est ouvert. Veuillez vérifier et envoyer l'email.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        description: "",
        address: ""
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Demande de Devis Gratuit
            </h1>
            <p className="text-xl text-muted-foreground">
              Décrivez votre projet et recevez une estimation personnalisée
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Informations sur votre projet</CardTitle>
              <CardDescription>
                Tous les champs sont obligatoires pour établir un devis précis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Type de projet *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="levé-topographique">Levé Topographique</SelectItem>
                        <SelectItem value="bornage">Bornage & Délimitation</SelectItem>
                        <SelectItem value="cartographie">Cartographie & Plans</SelectItem>
                        <SelectItem value="suivi-chantier">Suivi de Chantier</SelectItem>
                        <SelectItem value="etude-amenagement">Étude d'Aménagement</SelectItem>
                        <SelectItem value="expertise-fonciere">Expertise Foncière</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresse du projet *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="Adresse complète du terrain/projet"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description du projet *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Décrivez votre projet en détail (surface, objectifs, contraintes...)"
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero" 
                  size="lg" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer la demande
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quote;