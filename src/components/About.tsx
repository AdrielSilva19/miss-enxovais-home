 import { Button } from "@/components/ui/button";
 
 const About = () => {
   return (
     <section className="py-20 md:py-28 bg-cream">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           {/* Image Grid */}
           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
               <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
                 <img
                   src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=500&fit=crop"
                   alt="Interior elegante"
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                 <img
                   src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop"
                   alt="Detalhes de tecido"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
             <div className="pt-8">
               <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
                 <img
                   src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=500&fit=crop"
                   alt="Quarto aconchegante"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           </div>
 
           {/* Content */}
           <div>
             <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
               Nossa História
             </span>
             <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 leading-tight">
               Qualidade e elegância para o seu lar
             </h2>
             <p className="text-muted-foreground mb-6 leading-relaxed">
               A Miss Enxovais nasceu do sonho de oferecer produtos de cama, mesa e banho 
               que unem qualidade excepcional, design sofisticado e preços acessíveis. 
               Selecionamos cuidadosamente cada peça para transformar 
               sua casa em um refúgio de conforto e bem-estar.
             </p>
             <p className="text-muted-foreground mb-8 leading-relaxed">
               Trabalhamos com os melhores fornecedores nacionais e internacionais, 
               garantindo tecidos de alta qualidade, acabamentos impecáveis e durabilidade 
               para você aproveitar por muitos anos.
             </p>
             <div className="flex flex-wrap gap-8 mb-8">
               <div>
                 <span className="font-serif text-4xl md:text-5xl font-medium text-primary">10+</span>
                 <p className="text-sm text-muted-foreground mt-1">Anos de experiência</p>
               </div>
               <div>
                 <span className="font-serif text-4xl md:text-5xl font-medium text-primary">50k+</span>
                 <p className="text-sm text-muted-foreground mt-1">Clientes satisfeitos</p>
               </div>
               <div>
                 <span className="font-serif text-4xl md:text-5xl font-medium text-primary">300+</span>
                 <p className="text-sm text-muted-foreground mt-1">Produtos exclusivos</p>
               </div>
             </div>
             <Button size="lg">
               Conheça mais sobre nós
             </Button>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;