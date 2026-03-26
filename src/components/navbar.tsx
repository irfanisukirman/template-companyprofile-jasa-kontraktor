
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Beranda", href: "#" },
  { name: "Tentang", href: "#tentang" },
  { name: "Layanan", href: "#layanan" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Mengapa Kami", href: "#keunggulan" },
  { name: "Testimoni", href: "#testimoni"}
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an internal link (starts with #)
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      
      const targetId = href === "#" ? "body" : href.substring(1);
      const element = document.getElementById(targetId) || (href === "#" ? document.body : null);
      
      if (element) {
        window.scrollTo({
          top: href === "#" ? 0 : element.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
          onClick={(e) => handleLinkClick(e, "#")}
        >
          <div className="bg-primary p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform">
            <Hammer size={24} />
          </div>
          <span
            className={cn(
              "font-headline font-bold text-xl tracking-tight transition-colors",
              isScrolled ? "text-secondary" : "text-secondary lg:text-white"
            )}
          >
            Karya Abadi
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-secondary" : "text-secondary lg:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full shadow-lg">
            <Link href="#kontak" onClick={(e) => handleLinkClick(e, "#kontak")}>
              Konsultasi Gratis
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            isScrolled ? "text-secondary" : "text-secondary lg:text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] border-t" : "max-h-0"
        )}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary font-medium hover:text-primary transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full rounded-full" onClick={(e) => handleLinkClick(e, "#kontak")}>
            <Link href="#kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
