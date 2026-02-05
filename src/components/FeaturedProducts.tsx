 import { Heart, ShoppingBag } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const products = [
   {
     id: 1,
     name: "Jogo de Lençol Premium",
     category: "Cama",
     price: 299.90,
     originalPrice: 399.90,
     image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=600&fit=crop",
     isNew: true,
     isSale: false,
   },
   {
     id: 2,
     name: "Toalha de Banho Egípcia",
     category: "Banho",
     price: 159.90,
     originalPrice: null,
     image: "https://images.unsplash.com/photo-1616627988170-4e3eb2d7e7c2?w=500&h=600&fit=crop",
     isNew: false,
     isSale: false,
   },
   {
     id: 3,
     name: "Toalha de Mesa Bordada",
     category: "Mesa",
     price: 189.90,
     originalPrice: 249.90,
     image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&h=600&fit=crop",
     isNew: false,
     isSale: true,
   },
   {
     id: 4,
     name: "Kit Almofadas Decorativas",
     category: "Cama",
     price: 219.90,
     originalPrice: null,
     image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=600&fit=crop",
     isNew: true,
     isSale: false,
   },
 ];
 
 const FeaturedProducts = () => {
   return (
     <section className="py-20 md:py-28">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
           <div>
             <span className="text-sm font-medium tracking-widest uppercase text-primary mb-2 block">
               Destaques
             </span>
             <h2 className="font-serif text-3xl md:text-5xl font-medium">
               Produtos em Destaque
             </h2>
           </div>
           <Button variant="link" className="text-primary mt-4 md:mt-0 self-start md:self-auto">
             Ver todos os produtos →
           </Button>
         </div>
 
         {/* Products Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {products.map((product) => (
             <div key={product.id} className="group">
               {/* Image Container */}
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-secondary">
                 <img
                   src={product.image}
                   alt={product.name}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 
                 {/* Badges */}
                 <div className="absolute top-4 left-4 flex flex-col gap-2">
                   {product.isNew && (
                     <span className="bg-sage text-sage-dark text-xs font-medium px-3 py-1 rounded-full">
                       Novo
                     </span>
                   )}
                   {product.isSale && (
                     <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                       Oferta
                     </span>
                   )}
                 </div>
 
                 {/* Quick Actions */}
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <button className="bg-background/90 backdrop-blur-sm p-2.5 rounded-full shadow-soft hover:bg-background transition-colors">
                     <Heart size={18} className="text-foreground" />
                   </button>
                 </div>
 
                 {/* Add to Cart */}
                 <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                   <Button className="w-full shadow-elegant">
                     <ShoppingBag size={16} className="mr-2" />
                     Adicionar
                   </Button>
                 </div>
               </div>
 
               {/* Product Info */}
               <div>
                 <span className="text-xs text-muted-foreground uppercase tracking-wider">
                   {product.category}
                 </span>
                 <h3 className="font-medium text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                   {product.name}
                 </h3>
                 <div className="flex items-center gap-2">
                   <span className="font-semibold text-lg">
                     R$ {product.price.toFixed(2).replace(".", ",")}
                   </span>
                   {product.originalPrice && (
                     <span className="text-sm text-muted-foreground line-through">
                       R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                     </span>
                   )}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default FeaturedProducts;