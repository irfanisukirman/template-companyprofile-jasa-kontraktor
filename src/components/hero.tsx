
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Building2, Users } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const STATS = [
  {
    label: "Tahun Pengalaman",
    value: "10+",
    icon: Award,
  },
  {
    label: "Proyek Selesai",
    value: "200+",
    icon: Building2,
  },
  {
    label: "Klien Puas",
    value: "99%",
    icon: Users,
  },
];

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Konstruksi Profesional"
          fill
          className="object-cover"
          priority
          data-ai-hint="construction architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
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
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button asChild size="lg" className="h-14 px-8 text-base rounded-full shadow-2xl hover:translate-y-[-2px] transition-transform">
              <Link href="#kontak" className="flex items-center gap-2">
                Konsultasi Gratis <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base rounded-full bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10">
              <Link href="#portofolio">Lihat Portofolio</Link>
            </Button>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors"></div>
                
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <stat.icon size={22} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-sm text-white/50 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-primary animate-pulse"></div>
    </section>
  );
}
