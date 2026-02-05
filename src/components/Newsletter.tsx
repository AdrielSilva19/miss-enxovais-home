 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { useState } from "react";
 import { toast } from "sonner";
 
 const Newsletter = () => {
   const [email, setEmail] = useState("");
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (email) {
       toast.success("Obrigado por se inscrever!");
       setEmail("");
     }
   };
 
   return (
     <section className="py-20 md:py-28 bg-gradient-hero">
       <div className="container mx-auto px-4">
         <div className="max-w-2xl mx-auto text-center">
           <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
             Newsletter
           </span>
           <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
             Fique por dentro das novidades
           </h2>
           <p className="text-muted-foreground mb-8">
             Cadastre-se para receber ofertas exclusivas, lançamentos e dicas de decoração diretamente no seu e-mail.
           </p>
           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
             <Input
               type="email"
               placeholder="Seu melhor e-mail"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="flex-1 h-12 bg-background"
               required
             />
             <Button type="submit" size="lg" className="h-12">
               Inscrever-se
             </Button>
           </form>
           <p className="text-xs text-muted-foreground mt-4">
             Ao se inscrever, você concorda com nossa política de privacidade.
           </p>
         </div>
       </div>
     </section>
   );
 };
 
 export default Newsletter;