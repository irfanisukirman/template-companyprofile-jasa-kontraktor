
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  service: z.string().min(1, "Pilih layanan"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Pesan Terkirim!",
        description: "Kami akan segera menghubungi Anda kembali.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="kontak" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Info Side */}
            <div className="bg-secondary p-12 lg:p-16 text-white space-y-12">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl font-bold">Siap Membangun Rumah Impian?</h2>
                <p className="text-white/60 text-lg">Hubungi kami hari ini untuk konsultasi gratis mengenai proyek pembangunan atau renovasi Anda.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-1">Telepon / WA</p>
                    <p className="text-xl font-bold">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-xl font-bold">halo@karyaabadi.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-1">Kantor Pusat</p>
                    <p className="text-xl font-bold">Jl. Raya Konstruksi No. 88, Jakarta Selatan</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10">
                <p className="text-white/40 mb-4">Temukan kami di media sosial:</p>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'LinkedIn', 'TikTok'].map(soc => (
                    <div key={soc} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer">
                      <span className="sr-only">{soc}</span>
                      <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 lg:p-16">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Lengkap</FormLabel>
                          <FormControl>
                            <Input placeholder="Contoh: John Doe" {...field} className="bg-muted/50 border-none h-12 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alamat Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-muted/50 border-none h-12 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="0812xxxx" {...field} className="bg-muted/50 border-none h-12 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pilih Layanan</FormLabel>
                          <FormControl>
                            <select 
                              {...field} 
                              className="flex h-12 w-full rounded-xl bg-muted/50 px-3 py-2 text-sm ring-offset-background border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">-- Pilih Layanan --</option>
                              <option value="bangun">Bangun Rumah</option>
                              <option value="renovasi">Renovasi</option>
                              <option value="interior">Interior</option>
                              <option value="lainnya">Lainnya</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detail Proyek / Pesan</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Ceritakan rencana proyek Anda..." 
                            className="bg-muted/50 border-none rounded-xl min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/20">
                    {isSubmitting ? "Mengirim..." : (
                      <span className="flex items-center gap-2">
                        Kirim Pesan Sekarang <Send size={20} />
                      </span>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-4 py-4">
                    <div className="h-px bg-muted flex-grow"></div>
                    <span className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Atau</span>
                    <div className="h-px bg-muted flex-grow"></div>
                  </div>

                  <Button variant="secondary" className="w-full h-14 rounded-xl text-lg font-bold flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb355] text-white border-none shadow-xl shadow-[#25D366]/20">
                    <MessageSquare size={20} /> Konsultasi via WhatsApp
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
