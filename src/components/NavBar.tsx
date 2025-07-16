"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-50 shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo SVG moderna HT */}
        <a href="#" className="flex items-center gap-2 select-none">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo HT"
            className="h-10 w-10"
            style={{ minWidth: 40, minHeight: 40 }}
          >
            <rect width="48" height="48" rx="12" fill="#181C23" />
            <text
              x="11"
              y="33"
              fontFamily="'Inter', 'Montserrat', 'Segoe UI', Arial, sans-serif"
              fontWeight="800"
              fontSize="28"
              letterSpacing="-2"
              fill="#fff"
            >
              H
            </text>
            <text
              x="25"
              y="33"
              fontFamily="'Inter', 'Montserrat', 'Segoe UI', Arial, sans-serif"
              fontWeight="800"
              fontSize="28"
              letterSpacing="-3"
              fill="#3B82F6"
            >
              T
            </text>
          </svg>
          <span className="text-gray-900 font-bold text-lg tracking-tight hidden sm:inline-block">
            Henrique Tech Studio
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <a href="#services" className="hover:text-blue-600 transition">Serviços</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">Projetos</a>
          </li>
          <li>
            <a href="#prices" className="hover:text-blue-600 transition">Preços</a>
          </li>
          <li>
            <a href="#clients" className="hover:text-blue-600 transition">Pessoas</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">Contatos</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="cursor-pointer md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 rounded" />
          <span className="block w-6 h-0.5 bg-gray-800 rounded" />
          <span className="block w-6 h-0.5 bg-gray-800 rounded" />
        </button>
      </div>

      {/* Mobile Side Menu (Slide-in) */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-8 px-8 py-10 text-gray-800 font-medium text-lg h-full">
          <button
            className="self-end text-2xl text-gray-500 hover:text-gray-800 mb-2"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >×</button>
          <a
            href="#services"
            className="hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Projetos
          </a>
          <a
            href="#prices"
            className="hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Preços
          </a>
          <a
            href="#clients"
            className="hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Pessoas
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Contatos
          </a>
        </div>
      </aside>

      {/* Fade-in keyframes */}
      <style jsx>{`
        @media (max-width: 767px) {
          .animate-fade-in-down {
            animation: fadeInDown .25s;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-12px);}
            to { opacity: 1; transform: translateY(0);}
          }
        }
      `}</style>
    </nav>
  );
}
