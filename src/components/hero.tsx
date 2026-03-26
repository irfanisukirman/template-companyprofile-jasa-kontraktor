
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || "https://picsum.photos/seed/karya1/1920/1080"}
          alt="Konstruksi Profesional"
          fill
          className="object-cover"
          priority
          data-ai-hint="construction architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-4 py-1.5 rounded-full mb-6">
            <CheckCircle2 size={16} />
            <span className="text-xs font-semibold tracking-wider uppercase">Kontraktor Berpengalaman</span>
          </div>
          
          <h1 className="font-headline text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Solusi Konstruksi <span className="text-primary tracking-tight">Profesional</span> & Terpercaya
          </h1>
          
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            Kami hadir untuk mewujudkan bangunan impian Anda dengan standar kualitas tinggi, tepat waktu, dan transparansi anggaran yang terjamin.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-base rounded-full shadow-2xl hover:translate-y-[-2px] transition-transform">
              <Link href="#kontak" className="flex items-center gap-2">
                Konsultasi Gratis <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base rounded-full bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10">
              <Link href="#portofolio">Lihat Portofolio</Link>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8 max-w-lg">
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-white/60">Tahun Pengalaman</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-sm text-white/60">Proyek Selesai</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-3xl font-bold text-white">99%</p>
              <p className="text-sm text-white/60">Klien Puas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-primary animate-pulse"></div>
    </section>
  );
}
