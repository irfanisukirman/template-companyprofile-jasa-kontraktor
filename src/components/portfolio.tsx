
"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

const CATEGORIES = ["Semua", "Residensial", "Komersial", "Interior"];

const PROJECTS = [
  { id: 1, title: "Modern Luxury Home", category: "Residensial", imgId: "project-1" },
  { id: 2, title: "Grand Office Building", category: "Komersial", imgId: "project-2" },
  { id: 3, title: "Contemporary Living", category: "Interior", imgId: "project-3" },
  { id: 4, title: "Azure Pool Estate", category: "Residensial", imgId: "project-4" },
  { id: 5, title: "Industrial Hub", category: "Komersial", imgId: "project-5" },
  { id: 6, title: "Gourmet Kitchen", category: "Interior", imgId: "project-6" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = PROJECTS.filter(p => 
    activeCategory === "Semua" || p.category === activeCategory
  );

  return (
    <section id="portofolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Portofolio Proyek</h4>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-secondary">Hasil Karya Terbaik Kami</h2>
              <p className="text-muted-foreground text-lg">
                Setiap proyek yang kami kerjakan adalah wujud nyata dari komitmen kami terhadap kualitas dan kepuasan pelanggan.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-semibold transition-all border",
                    activeCategory === cat 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/30" 
                      : "bg-transparent text-secondary border-muted-foreground/20 hover:border-primary hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const img = PlaceHolderImages.find(i => i.id === project.imgId);
            return (
              <ScrollReveal key={project.id} delay={idx * 100} direction="up">
                <div 
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                >
                  <Image
                    src={img?.imageUrl || `https://picsum.photos/seed/${project.id}/600/400`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={img?.imageHint || "construction project"}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.category}
                    </span>
                    <h3 className="text-white font-headline text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <Search size={20} />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
