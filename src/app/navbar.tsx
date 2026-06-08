"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';
import iconImage from "../assets/flowstack-icon.jpg";

const navItems = ["Layanan", "Proses", "Karya", "Paket", "Kontak"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image 
          src={iconImage} 
          alt="icon"
          width={45}/>
          <span>
            <span className="block text-sm font-bold">Flowstack Studio</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-ink/68 transition hover:text-ink"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#kontak"
          className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white! transition hover:bg-mint lg:flex"
        >
          <MessageCircle size={17} />
          Konsultasi
        </a>

        <button
          type="button"
          aria-label="Buka navigasi"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex size-10 items-center justify-center rounded-lg border border-ink/12 bg-white lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-ink/10 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-ink/72 transition hover:bg-cloud hover:text-ink"
              >
                {item}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-bold text-white! transition hover:bg-mint"
            >
              <MessageCircle size={17} />
              Konsultasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
