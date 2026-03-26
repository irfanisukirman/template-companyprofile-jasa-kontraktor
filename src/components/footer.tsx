
import Link from "next/link";
import { Hammer, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1.5 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <Hammer size={24} />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight">Karya Abadi</span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Solusi terpercaya untuk jasa bangun dan renovasi berkualitas di Indonesia. Kami mengutamakan kepuasan klien dan kualitas konstruksi yang tahan lama.
            </p>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio', 'Hubungi Kami'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-primary hover:pl-2 transition-all flex items-center gap-2 group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-6">Layanan</h4>
            <ul className="space-y-4">
              {['Bangun Rumah', 'Renovasi', 'Desain Interior', 'Arsitektur', 'Struktur Beton'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span className="text-white/60">Jl. Raya Konstruksi No. 88, Jakarta Selatan 12345</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span className="text-white/60">+62 812 3456 7890</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span className="text-white/60">halo@karyaabadi.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Karya Abadi Kontraktor. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-8 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
