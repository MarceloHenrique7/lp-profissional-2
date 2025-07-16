"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <>
      <a
        href="https://wa.me/5587988028002?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo pelo WhatsApp"
        className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl p-4 flex items-center gap-2 animate-pulse-cta transition"
        style={{ boxShadow: '0 4px 24px 0 rgba(40, 199, 111, 0.20)' }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold hidden md:inline">Fale comigo</span>
      </a>
    </>
  );
}
