import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Truck, Shield, Clock, Heart, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";
import consultationImage from "@/assets/consultation.jpg";
import deliveryImage from "@/assets/delivery.jpg";
import productsImage1 from "@/assets/products-1.jpg";
import productsImage2 from "@/assets/products-2.jpg";

const Index = () => {
  const features = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Receba seus medicamentos no conforto da sua casa em até 2 horas",
    },
    {
      icon: Shield,
      title: "Produtos Certificados",
      description: "Todos os medicamentos são aprovados pela ANVISA",
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Estamos disponíveis para você a qualquer hora",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Nossa equipe está pronta para cuidar de você",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Dipirona Sódica 500mg",
      price: 12.90,
      image: productsImage1,
      discount: "15% OFF",
    },
    {
      id: 2,
      name: "Vitamina C 1000mg",
      price: 45.90,
      image: productsImage2,
      discount: "20% OFF",
    },
    {
      id: 3,
      name: "Ibuprofeno 600mg",
      price: 18.50,
      image: productsImage1,
      discount: "10% OFF",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">
                Sua saúde é nossa prioridade
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Medicamentos com{" "}
                <span className="text-primary">os melhores preços</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Entrega rápida, atendimento humanizado e produtos de qualidade. 
                Tudo o que você precisa para cuidar da sua saúde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 shadow-green" asChild>
                  <a href="/catalogo">
                    Ver Medicamentos
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contato">Fale Conosco</a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heroImage}
                  alt="Farmácia São Camillo - Atendimento profissional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg border border-border hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Star className="h-6 w-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-bold">4.9/5.0</p>
                    <p className="text-sm text-muted-foreground">Avaliação dos clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar medicamentos, vitaminas, suplementos..."
                className="pl-12 h-14 text-base shadow-md"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a São Camillo?</h2>
            <p className="text-muted-foreground text-lg">
              Compromisso com sua saúde e bem-estar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover-lift transition-smooth border-border"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto group-hover:bg-primary transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Produtos em Destaque</h2>
              <p className="text-muted-foreground">Ofertas especiais para você</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <a href="/catalogo">Ver Todos</a>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover-lift border-border">
                <div className="relative">
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground z-10">
                    {product.discount}
                  </Badge>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Button size="sm">Adicionar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild>
              <a href="/catalogo">Ver Todos os Produtos</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover-lift transition-smooth">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={consultationImage}
                    alt="Consultoria farmacêutica"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">Consultoria Farmacêutica</h3>
                  <p className="text-muted-foreground mb-4">
                    Nossa equipe está pronta para tirar suas dúvidas sobre medicamentos
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/contato">Falar com Especialista</a>
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden hover-lift transition-smooth">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={deliveryImage}
                    alt="Entrega rápida"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">Entrega Express</h3>
                  <p className="text-muted-foreground mb-4">
                    Receba seus medicamentos em até 2 horas na sua região
                  </p>
                  <Button asChild>
                    <a href="/catalogo">Fazer Pedido</a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
