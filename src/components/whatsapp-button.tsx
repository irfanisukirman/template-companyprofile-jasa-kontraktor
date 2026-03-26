
import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
    >
      <div className="relative flex items-center justify-center">
        <MessageSquare size={28} />
        {/* Tooltip hint on hover */}
        <span className="absolute right-full mr-4 bg-white text-secondary font-bold text-sm py-2 px-4 rounded-xl shadow-xl opacity-0 translate-x-10 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap">
          Konsultasi via WhatsApp
        </span>
      </div>
      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
    </a>
  );
}
