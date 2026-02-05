 import { Button } from "@/components/ui/button";
 import { ArrowRight } from "lucide-react";
 import heroImage from "@/assets/hero-bedroom.jpg";
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
         <img
           src={heroImage}
           alt="Quarto elegante com roupas de cama luxuosas"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
       </div>
 
       {/* Content */}
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-2xl">
           <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4 animate-fade-up">
             Nova Coleção 2026
           </span>
           <h1 
             className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 animate-fade-up"
             style={{ animationDelay: "0.1s" }}
           >
             Transforme sua casa em um{" "}
             <span className="text-primary italic">refúgio</span> de conforto
           </h1>
           <p 
             className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-up"
             style={{ animationDelay: "0.2s" }}
           >
             Descubra nossa coleção exclusiva de cama, mesa e banho. Qualidade premium para momentos especiais.
           </p>
           <div 
             className="flex flex-col sm:flex-row gap-4 animate-fade-up"
             style={{ animationDelay: "0.3s" }}
           >
             <Button size="lg" className="group">
               Ver Coleção
               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Button>
             <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm">
               Ofertas Especiais
             </Button>
           </div>
         </div>
       </div>
 
       {/* Scroll indicator */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
         <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
           <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
         </div>
       </div>
     </section>
   );
 };
 
 export default Hero;