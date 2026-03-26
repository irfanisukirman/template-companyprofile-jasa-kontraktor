
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const REVIEWS = [
  {
    name: "Bapak Ahmad",
    role: "Pemilik Rumah di Serpong",
    text: "Puas sekali dengan hasil bangun rumah oleh Karya Abadi. Timnya sangat responsif dan hasil pengerjaannya sangat rapi sesuai desain awal.",
    stars: 5,
    initial: "BA",
  },
  {
    name: "Ibu Maya",
    role: "Interior Kantor Sudirman",
    text: "Renovasi kantor selesai lebih cepat dari jadwal. Transparansi biayanya luar biasa, tidak ada biaya tambahan mendadak.",
    stars: 5,
    initial: "IM",
  },
  {
    name: "Bapak Hendra",
    role: "Kontraktor Rekanan",
    text: "Salah satu kontraktor paling profesional yang pernah saya temui. Detail strukturnya sangat diperhatikan dengan baik.",
    stars: 5,
    initial: "BH",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Testimoni Klien</h4>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-secondary">Apa Kata Mereka?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-muted/30 p-10 rounded-3xl relative border border-transparent hover:border-primary/20 transition-all hover:bg-white hover:shadow-xl group"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-secondary/80 text-lg italic leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary text-white font-bold">{review.initial}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-secondary text-lg leading-tight">{review.name}</h4>
                  <p className="text-muted-foreground text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
