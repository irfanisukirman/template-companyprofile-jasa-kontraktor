
import Image from "next/image";
import { Check } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "./scroll-reveal";

export function About() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-img');

  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src={aboutImg?.imageUrl || "https://picsum.photos/seed/karya2/800/600"}
                  alt="Tentang Karya Abadi"
                  width={800}
                  height={600}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  data-ai-hint="engineers blueprint"
                />
              </div>
              {/* Background Decorations */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-2xl -z-10 hidden lg:block"></div>
              
              <div className="absolute bottom-10 left-[-40px] bg-white p-6 rounded-xl shadow-xl z-20 hidden sm:block border-l-4 border-primary">
                <p className="text-secondary font-bold text-lg italic">"Kualitas adalah prioritas utama kami dalam setiap jengkal konstruksi."</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Tentang Kami</h4>
                <h2 className="font-headline text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                  Membangun dengan Hati dan Keahlian <span className="text-primary">Profesional</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Karya Abadi Kontraktor adalah perusahaan jasa konstruksi yang berdedikasi tinggi dalam memberikan hasil pembangunan terbaik. Berbekal pengalaman bertahun-tahun, kami memahami bahwa setiap bangunan adalah investasi berharga bagi Anda.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Tim Ahli & Tersertifikasi",
                  "Manajemen Proyek Modern",
                  "Kualitas Material Premium",
                  "Pekerjaan Sesuai Jadwal",
                  "Transparansi Anggaran",
                  "Garansi Konstruksi"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-1 rounded-full">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-muted rounded-2xl flex items-center gap-6">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  KA
                </div>
                <div>
                  <p className="text-secondary font-bold text-xl leading-none mb-1">Direktur Utama</p>
                  <p className="text-muted-foreground">Karya Abadi Kontraktor</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
