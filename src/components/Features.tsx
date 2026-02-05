 import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";
 
 const features = [
   {
     icon: Truck,
     title: "Frete Grátis",
     description: "Em compras acima de R$ 299",
   },
   {
     icon: Shield,
     title: "Pagamento Seguro",
     description: "Suas informações protegidas",
   },
   {
     icon: RefreshCw,
     title: "Troca Fácil",
     description: "30 dias para trocar ou devolver",
   },
   {
     icon: Headphones,
     title: "Suporte 24/7",
     description: "Atendimento personalizado",
   },
 ];
 
 const Features = () => {
   return (
     <section className="py-12 md:py-16 border-y border-border bg-secondary/50">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
           {features.map((feature, index) => (
             <div key={index} className="text-center">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                 <feature.icon size={24} />
               </div>
               <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
               <p className="text-sm text-muted-foreground">{feature.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Features;