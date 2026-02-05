 import categoryBed from "@/assets/category-bed.jpg";
 import categoryTable from "@/assets/category-table.jpg";
 import categoryBath from "@/assets/category-bath.jpg";
 
 const categories = [
   {
     id: "cama",
     name: "Cama",
     description: "Lençóis, edredons, travesseiros e muito mais",
     image: categoryBed,
     count: "120+ produtos",
   },
   {
     id: "mesa",
     name: "Mesa",
     description: "Toalhas, jogos americanos e guardanapos",
     image: categoryTable,
     count: "85+ produtos",
   },
   {
     id: "banho",
     name: "Banho",
     description: "Toalhas, roupões e acessórios de spa",
     image: categoryBath,
     count: "95+ produtos",
   },
 ];
 
 const Categories = () => {
   return (
     <section className="py-20 md:py-28 bg-gradient-soft">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center mb-12 md:mb-16">
           <span className="text-sm font-medium tracking-widest uppercase text-primary mb-2 block">
             Categorias
           </span>
           <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
             Explore Nossa Coleção
           </h2>
           <p className="text-muted-foreground max-w-xl mx-auto">
             Produtos selecionados com carinho para transformar cada ambiente da sua casa
           </p>
         </div>
 
         {/* Categories Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {categories.map((category, index) => (
             <a
               key={category.id}
               href={`#${category.id}`}
               className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-elegant cursor-pointer"
               style={{ animationDelay: `${index * 0.1}s` }}
             >
               {/* Image */}
               <img
                 src={category.image}
                 alt={category.name}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               
               {/* Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
               
               {/* Content */}
               <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                 <span className="text-xs font-medium tracking-wider uppercase text-rose-light mb-2">
                   {category.count}
                 </span>
                 <h3 className="font-serif text-2xl md:text-3xl font-medium text-warm-white mb-2">
                   {category.name}
                 </h3>
                 <p className="text-sm text-warm-white/80 mb-4">
                   {category.description}
                 </p>
                 <div className="flex items-center text-rose-light font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                   Explorar
                   <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M5 12h14M12 5l7 7-7 7" />
                   </svg>
                 </div>
               </div>
             </a>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Categories;