 import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="bg-charcoal text-warm-white">
       <div className="container mx-auto px-4 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {/* Brand */}
           <div>
             <h2 className="font-serif text-2xl font-semibold mb-4">
               Miss <span className="text-rose">Enxovais</span>
             </h2>
             <p className="text-warm-white/70 text-sm leading-relaxed mb-6">
               Transformando lares em refúgios de conforto desde 2015. Qualidade, elegância e carinho em cada produto.
             </p>
             <div className="flex gap-4">
               <a
                 href="#"
                 className="w-10 h-10 rounded-full bg-warm-white/10 flex items-center justify-center hover:bg-rose transition-colors"
               >
                 <Instagram size={18} />
               </a>
               <a
                 href="#"
                 className="w-10 h-10 rounded-full bg-warm-white/10 flex items-center justify-center hover:bg-rose transition-colors"
               >
                 <Facebook size={18} />
               </a>
             </div>
           </div>
 
           {/* Links */}
           <div>
             <h3 className="font-medium mb-4">Navegação</h3>
             <ul className="space-y-3">
               {["Início", "Cama", "Mesa", "Banho", "Promoções", "Novidades"].map((link) => (
                 <li key={link}>
                   <a href="#" className="text-sm text-warm-white/70 hover:text-rose transition-colors">
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Support */}
           <div>
             <h3 className="font-medium mb-4">Suporte</h3>
             <ul className="space-y-3">
               {["Central de Ajuda", "Política de Trocas", "Formas de Pagamento", "Frete e Entrega", "Rastrear Pedido"].map((link) => (
                 <li key={link}>
                   <a href="#" className="text-sm text-warm-white/70 hover:text-rose transition-colors">
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h3 className="font-medium mb-4">Contato</h3>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <MapPin size={18} className="text-rose mt-0.5 shrink-0" />
                 <span className="text-sm text-warm-white/70">
                   Rua das Flores, 123<br />Centro, São Paulo - SP
                 </span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone size={18} className="text-rose shrink-0" />
                 <a href="tel:+5511999999999" className="text-sm text-warm-white/70 hover:text-rose transition-colors">
                   (11) 99999-9999
                 </a>
               </li>
               <li className="flex items-center gap-3">
                 <Mail size={18} className="text-rose shrink-0" />
                 <a href="mailto:contato@missenxovais.com.br" className="text-sm text-warm-white/70 hover:text-rose transition-colors">
                   contato@missenxovais.com.br
                 </a>
               </li>
             </ul>
           </div>
         </div>
 
         {/* Bottom */}
         <div className="border-t border-warm-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-sm text-warm-white/50">
             © 2025 Miss Enxovais. Todos os direitos reservados.
           </p>
           <div className="flex gap-6">
             <a href="#" className="text-xs text-warm-white/50 hover:text-warm-white transition-colors">
               Termos de Uso
             </a>
             <a href="#" className="text-xs text-warm-white/50 hover:text-warm-white transition-colors">
               Política de Privacidade
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;