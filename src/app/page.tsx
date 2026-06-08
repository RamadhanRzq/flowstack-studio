import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CalendarCheck,
  Check,
  ChevronRight,
  Code2,
  DatabaseZap,
  ExternalLink,
  Globe2,
  Layers3,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import heroImage from "../assets/fullstack-hero.png";
import Image from 'next/image';
import Navbar from "./navbar";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const profile = {
  name: "Ramadhan",
  role: "Fullstack Developer",
  email: "hello@ramadhan.dev",
  whatsapp: "https://wa.me/6281234567890",
};

const services = [
  {
    icon: Globe2,
    title: "Website Bisnis",
    description:
      "Landing page, company profile, katalog produk, dan web pemasaran yang cepat dibuka dan mudah dikelola.",
    tags: ["SEO-ready", "Responsive", "Analytics"],
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    description:
      "Aplikasi Android dan iOS untuk booking, membership, transaksi, internal tools, atau produk digital baru.",
    tags: ["React Native", "API", "Push-ready"],
  },
  {
    icon: DatabaseZap,
    title: "Backend & API",
    description:
      "Arsitektur server, autentikasi, database, integrasi payment, notifikasi, dan dashboard admin.",
    tags: ["REST", "Database", "Security"],
  },
  {
    icon: Workflow,
    title: "Automasi Operasional",
    description:
      "Sistem internal untuk merapikan workflow tim, laporan, approval, inventory, dan proses berulang.",
    tags: ["Dashboard", "Workflow", "Reports"],
  },
];

const metrics = [
  ["4+", "tahun pengalaman"],
  ["30+", "fitur dikirim"],
  ["100%", "mobile-first"],
];

const process = [
  {
    icon: CalendarCheck,
    title: "Mapping kebutuhan",
    description:
      "Menentukan tujuan bisnis, target user, flow utama, dan prioritas fitur sebelum masuk produksi.",
  },
  {
    icon: Layers3,
    title: "Desain sistem",
    description:
      "Menyusun struktur halaman, database, API, komponen UI, dan estimasi fase pengerjaan.",
  },
  {
    icon: Code2,
    title: "Build iteratif",
    description:
      "Pengembangan frontend, backend, integrasi, testing, dan review berkala dengan demo yang jelas.",
  },
  {
    icon: Rocket,
    title: "Launch & support",
    description:
      "Deployment, domain, optimasi performa, dokumentasi ringan, dan support pasca rilis.",
  },
];

const projects = [
  {
    title: "Marketplace UMKM",
    category: "Web commerce",
    description:
      "Katalog produk, checkout WhatsApp, dashboard stok, dan halaman promo untuk kampanye lokal.",
    accent: "bg-mint",
  },
  {
    title: "Aplikasi Booking",
    category: "Mobile app",
    description:
      "Reservasi jadwal, notifikasi, riwayat transaksi, dan panel admin untuk mengelola layanan.",
    accent: "bg-coral",
  },
  {
    title: "Dashboard Operasional",
    category: "Internal system",
    description:
      "Monitoring data harian, approval workflow, export laporan, dan role akses untuk beberapa tim.",
    accent: "bg-sun",
  },
];

const packages = [
  {
    name: "Starter Web",
    price: "Mulai 3 jutaan",
    description: "Untuk landing page, company profile, atau validasi ide cepat.",
    features: ["1-5 halaman", "Desain responsive", "Form kontak", "Deploy siap pakai"],
  },
  {
    name: "Business App",
    price: "Mulai 8 jutaan",
    description: "Untuk aplikasi dengan dashboard, login, database, dan integrasi.",
    features: ["Frontend + backend", "Role akses", "Admin dashboard", "Basic analytics"],
    highlighted: true,
  },
  {
    name: "Custom Scale",
    price: "By scope",
    description: "Untuk produk digital, mobile app, atau sistem internal yang lebih kompleks.",
    features: ["Arsitektur custom", "Mobile app", "Integrasi payment", "Support prioritas"],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />

      <section id="top" className="overflow-hidden border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:py-18 lg:grid-cols-[0.93fr_1.07fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-white px-3 py-1 text-sm font-semibold text-leaf">
              <Sparkles size={16} />
              Web and Mobile Apps
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] text-ink sm:text-5xl lg:text-6xl">
              Flowstack Studio
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              Siap membantu bisnis membangun website dan aplikasi mobile yang
              rapi, cepat, aman, dan siap dipakai untuk menjual, melayani
              pelanggan, atau merapikan operasional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white! transition hover:bg-mint"
              >
                Mulai Diskusi
                <ArrowRight size={18} />
              </a>
              <a
                href="#karya"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink/14 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-mint hover:text-leaf"
              >
                Lihat Karya
                <ExternalLink size={17} />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-ink/10 rounded-lg border border-ink/10 bg-white">
              {metrics.map(([value, label]) => (
                <div key={label} className="px-4 py-4">
                  <span className="block text-2xl font-black">{value}</span>
                  <span className="mt-1 block text-xs leading-5 text-ink/58">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 hidden h-24 w-24 rounded-lg bg-sun/30 lg:block" />
            <Image
              src={heroImage}
              alt="Mockup website dashboard dan aplikasi mobile"
              className="relative z-10 aspect-video w-full rounded-lg border border-ink/10 object-cover shadow-[0_24px_80px_rgba(23,23,23,0.18)]"
            />
            <div className="relative z-20 -mt-8 ml-auto grid w-[92%] grid-cols-2 gap-3 rounded-lg border border-ink/10 bg-white p-3 shadow-[0_18px_50px_rgba(23,23,23,0.12)] sm:w-[78%]">
              <div className="rounded-md bg-cloud p-4">
                <BadgeCheck className="text-mint" size={22} />
                <p className="mt-3 text-sm font-bold">Production-ready</p>
                <p className="mt-1 text-xs leading-5 text-ink/60">
                  Struktur clean untuk maintenance jangka panjang.
                </p>
              </div>
              <div className="rounded-md bg-ink p-4 text-white!">
                <ShieldCheck className="text-sun" size={22} />
                <p className="mt-3 text-sm font-bold text-white!">Secure by default</p>
                <p className="mt-1 text-xs leading-5 text-white/75!">
                  Auth, validasi data, dan akses role sejak awal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="border-b border-ink/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Layanan"
            title="Solusi digital yang dibuat sesuai kebutuhan bisnis."
            description="Mulai dari halaman promosi sederhana sampai aplikasi mobile dan sistem internal yang tersambung ke database."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-mint/40 hover:shadow-[0_16px_42px_rgba(23,23,23,0.08)]"
              >
                <service.icon className="text-mint" size={28} />
                <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-ink/65">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-cloud px-2.5 py-1 text-xs font-bold text-ink/68"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proses" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Proses"
            title="Dari ide kasar menjadi produk yang bisa dipakai."
            description="Setiap fase dibuat transparan agar scope, timeline, dan hasil akhirnya terasa jelas sejak awal."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title} className="relative rounded-lg bg-cloud p-6">
                <div className="flex items-center justify-between">
                  <step.icon className="text-leaf" size={26} />
                  <span className="text-sm font-black text-ink/34">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/64">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="karya" className="border-y border-ink/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Karya"
              title="Contoh tipe project yang bisa saya bantu bangun."
              description="Format dan fitur bisa disesuaikan dengan target pasar, workflow tim, serta budget pengembangan."
            />

            <div className="grid gap-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="grid gap-5 rounded-lg border border-ink/10 bg-white p-5 sm:grid-cols-[12px_1fr_auto] sm:items-center"
                >
                  <span className={`h-full min-h-2 rounded-full ${project.accent}`} />
                  <div>
                    <p className="text-sm font-bold text-ink/48">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-xl font-black">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/64">
                      {project.description}
                    </p>
                  </div>
                  <ChevronRight className="hidden text-ink/30 sm:block" size={24} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="paket" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Paket"
            title="Mulai dari scope kecil, lalu berkembang saat produk terbukti."
            description="Estimasi awal membantu menentukan prioritas. Setelah diskusi, scope final disesuaikan dengan kebutuhan project."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`rounded-lg border p-6 ${
                  item.highlighted
                    ? "border-mint bg-ink text-paper shadow-[0_24px_70px_rgba(23,23,23,0.2)]"
                    : "border-ink/10 bg-paper text-ink"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-xl font-black ${
                      item.highlighted ? "text-paper" : "text-ink"
                    }`}
                  >
                    {item.name}
                  </h3>
                  {item.highlighted && (
                    <span className="rounded-md bg-mint px-2.5 py-1 text-xs font-bold text-white">
                      Favorit
                    </span>
                  )}
                </div>
                {/* <p
                  className={`mt-4 text-2xl font-black ${
                    item.highlighted ? "text-sun" : "text-leaf"
                  }`}
                >
                  {item.price}
                </p> */}
                <p
                  className={`mt-3 text-sm leading-7 ${
                    item.highlighted ? "text-paper/70" : "text-ink/64"
                  }`}
                >
                  {item.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        item.highlighted ? "text-paper" : "text-ink"
                      }`}
                    >
                      <Check
                        size={18}
                        className={item.highlighted ? "text-mint" : "text-leaf"}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="border-t border-ink/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-coral">
              Kontak
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Punya ide website atau aplikasi yang ingin dibuat?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-ink/66">
              Kirim gambaran project, masalah yang ingin diselesaikan, dan
              target launching. Saya bantu pecah menjadi scope teknis yang
              realistis.
            </p>
          </div>

          <div className="rounded-lg bg-ink p-6 text-paper sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={profile.whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-mint px-5 py-3 text-sm font-bold text-white transition hover:bg-leaf"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/18 px-5 py-3 text-sm font-bold text-white transition hover:border-sun hover:text-sun"
              >
                <Mail size={18} />
                Email
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Clean code", "Fast delivery", "Long-term support"].map((item) => (
                <div key={item} className="rounded-md border border-white/12 p-4">
                  <Boxes className="text-sun" size={20} />
                  <p className="mt-3 text-sm font-bold text-paper">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-ink/58 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 Flowstack Studio. .
          </p>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-mint" />
            <span>Available for selected projects</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description } : SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase text-coral">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-ink/66">{description}</p>
    </div>
  );
}

export default App;
