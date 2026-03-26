
import { Home, Wrench, PenTool, LayoutPanelLeft, Ruler, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const SERVICES = [
  {
    title: "Bangun Rumah",
    description: "Layanan pembangunan rumah dari nol dengan desain custom sesuai keinginan Anda.",
    icon: Home,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Renovasi Total",
    description: "Transformasi bangunan lama menjadi lebih modern, fungsional, dan bernilai tinggi.",
    icon: Wrench,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Design & Build",
    description: "Solusi lengkap dari perencanaan arsitektur hingga serah terima kunci bangunan.",
    icon: PenTool,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Desain Interior",
    description: "Penataan ruang interior yang estetis, fungsional, dan nyaman untuk ditinggali.",
    icon: LayoutPanelLeft,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Konsultasi Teknis",
    description: "Jasa konsultasi RAB, struktur, dan legalitas IMB/PBG untuk kelancaran proyek.",
    icon: Ruler,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Pemeliharaan",
    description: "Layanan perawatan rutin bangunan untuk menjaga kualitas dan keamanan struktur.",
    icon: ShieldCheck,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export function Services() {
  return (
    <section id="layanan" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Layanan Kami</h4>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-secondary">Layanan Konstruksi Terpadu</h2>
            <p className="text-muted-foreground text-lg">
              Kami menyediakan berbagai solusi kebutuhan konstruksi yang dirancang khusus untuk memenuhi standar hunian modern yang berkualitas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div 
                className="group h-full bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/10"
              >
                <div className={`${service.bg} ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                <h3 className="font-headline text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Pelajari Selengkapnya
                  <div className="w-8 h-px bg-primary"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
