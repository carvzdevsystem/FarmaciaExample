import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import productsImage1 from "@/assets/products-1.jpg";
import productsImage2 from "@/assets/products-2.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Dipirona Sódica 500mg",
    description: "Analgésico e antitérmico - Caixa com 20 comprimidos",
    price: 12.90,
    image: productsImage1,
    category: "Analgésicos",
    inStock: true,
  },
  {
    id: 2,
    name: "Vitamina C 1000mg",
    description: "Suplemento vitamínico - Frasco com 60 cápsulas",
    price: 45.90,
    image: productsImage2,
    category: "Vitaminas",
    inStock: true,
  },
  {
    id: 3,
    name: "Ibuprofeno 600mg",
    description: "Anti-inflamatório - Caixa com 10 comprimidos",
    price: 18.50,
    image: productsImage1,
    category: "Anti-inflamatórios",
    inStock: true,
  },
  {
    id: 4,
    name: "Complexo B",
    description: "Suplemento vitamínico - Frasco com 90 cápsulas",
    price: 38.90,
    image: productsImage2,
    category: "Vitaminas",
    inStock: true,
  },
  {
    id: 5,
    name: "Paracetamol 750mg",
    description: "Analgésico e antitérmico - Caixa com 16 comprimidos",
    price: 8.90,
    image: productsImage1,
    category: "Analgésicos",
    inStock: true,
  },
  {
    id: 6,
    name: "Ômega 3",
    description: "Suplemento - Frasco com 120 cápsulas",
    price: 65.90,
    image: productsImage2,
    category: "Suplementos",
    inStock: true,
  },
];

const categories = ["Todos", "Analgésicos", "Anti-inflamatórios", "Vitaminas", "Suplementos"];

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Nossos Medicamentos</h1>
          <p className="text-muted-foreground">Encontre os melhores produtos para sua saúde</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar medicamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover-lift border-border">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum produto encontrado.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Catalogo;
