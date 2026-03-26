
import { Clock, DollarSign, Users, ShieldCheck } from "lucide-react";

const ADVANTAGES = [
  {
    title: "Tepat Waktu",
    desc: "Kami menjamin penyelesaian proyek sesuai dengan jadwal yang telah disepakati bersama.",
    icon: Clock,
  },
  {
    title: "Transparan Biaya",
    desc: "Sistem RAB yang jelas dan mendetail, tidak ada biaya tersembunyi selama proses pembangunan.",
    icon: DollarSign,
  },
  {
    title: "Tim Profesional",
    desc: "Dikerjakan oleh tukang berpengalaman dan diawasi langsung oleh site manager profesional.",
    icon: Users,
  },
  {
    title: "Bergaransi",
    desc: "Memberikan jaminan pemeliharaan dan garansi struktur untuk setiap hasil pekerjaan kami.",
    icon: ShieldCheck,
  },
];

export function Advantages() {
  return (
    <section id="keunggulan" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Mengapa Memilih Kami?</h4>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold leading-tight">Keunggulan Layanan Kami Dibanding yang Lain</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Reputasi kami dibangun di atas dasar kejujuran dan hasil kerja berkualitas. Berikut adalah alasan mengapa klien mempercayakan proyek mereka kepada kami.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {ADVANTAGES.map((item, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:h-[600px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-2">
            <div className="bg-secondary h-full rounded-2xl flex flex-col items-center justify-center p-12 text-center space-y-6">
              <div className="p-6 bg-primary/20 rounded-full">
                <ShieldCheck size={64} className="text-primary" />
              </div>
              <h3 className="text-3xl font-headline font-bold">100% Kepuasan Klien</h3>
              <p className="text-white/60 max-w-sm">Kami tidak hanya membangun gedung, kami membangun kepercayaan jangka panjang dengan kualitas yang dapat dipertanggungjawabkan.</p>
              <div className="pt-8 grid grid-cols-2 gap-8 w-full">
                <div>
                  <p className="text-primary text-4xl font-bold mb-1">10+</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Kota Terlayani</p>
                </div>
                <div>
                  <p className="text-primary text-4xl font-bold mb-1">50+</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Pekerja Ahli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
