"use client";

import { Mail, Linkedin, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Branding + Copy */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-lg tracking-tight flex items-center gap-2">
            {/* SVG Logo HT */}
            <svg
              width="34"
              height="34"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Logo HT"
              className="h-9 w-9"
              style={{ minWidth: 34, minHeight: 34 }}
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
            Henrique Tech Studio
          </span>
          <span className="text-gray-400 text-xs mt-1">Soluções digitais sob medida</span>
        </div>
        {/* Social/contact links */}
        <div className="flex items-center gap-5 mt-4 md:mt-0">
          <a
            href="mailto:marcelohenriquex77@gmail.com"
            aria-label="E-mail"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/henrique-oliveira-71a2bb275/"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/5587988028002"
            aria-label="WhatsApp"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Smartphone className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-4">
        <p className="text-xs text-gray-400 text-center">
          © 2025 Henrique Desenvolvedor — Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-500 mt-1 text-center">
          contato:{" "}
          <a
            href="mailto:marcelohenriquex77@gmail.com"
            className="underline hover:text-blue-400 transition"
          >
            marcelohenriquex77@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
