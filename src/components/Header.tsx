 import { useState } from "react";
 import { Menu, X, ShoppingBag, Heart, Search, User } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
   const navLinks = [
     { name: "Início", href: "#" },
     { name: "Cama", href: "#cama" },
     { name: "Mesa", href: "#mesa" },
     { name: "Banho", href: "#banho" },
     { name: "Promoções", href: "#promocoes" },
   ];
 
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Mobile menu button */}
           <button
             className="md:hidden p-2 -ml-2"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
 
           {/* Logo */}
           <div className="flex-1 md:flex-none text-center md:text-left">
             <a href="#" className="inline-block">
               <h1 className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
                 Miss <span className="text-primary">Enxovais</span>
               </h1>
             </a>
           </div>
 
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8 mx-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
               >
                 {link.name}
               </a>
             ))}
           </nav>
 
           {/* Icons */}
           <div className="flex items-center gap-2 md:gap-4">
             <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden md:block">
               <Search size={20} />
             </button>
             <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden md:block">
               <User size={20} />
             </button>
             <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden md:block">
               <Heart size={20} />
             </button>
             <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
               <ShoppingBag size={20} />
               <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                 0
               </span>
             </button>
           </div>
         </div>
 
         {/* Mobile Navigation */}
         {isMenuOpen && (
           <nav className="md:hidden py-4 border-t border-border animate-fade-in">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                 onClick={() => setIsMenuOpen(false)}
               >
                 {link.name}
               </a>
             ))}
           </nav>
         )}
       </div>
     </header>
   );
 };
 
 export default Header;