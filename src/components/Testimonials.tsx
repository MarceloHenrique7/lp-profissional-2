"use client";

import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    text: `"O Henrique entendeu exatamente o que nossa clínica precisava. O site ficou lindo, rápido e já aumentou nossos agendamentos online em menos de um mês!"`,
    name: "Dra. Camila Rodrigues",
    title: "Dentista, Odonto Vida",
    photo: "/person-1.jpg",
  },
  {
    text: `"Sempre tive dificuldade para gerenciar pedidos no delivery. Depois do sistema desenvolvido pelo Henrique, tudo ficou mais prático e profissional. Recomendo muito!"`,
    name: "Lucas Souza",
    title: "Proprietário, Hamburgueria Gourmet",
    photo: "/person-2.jpg",
  },
  {
    text: `"Atendimento rápido, direto e transparente. Desde o orçamento até a entrega, fui acompanhando cada etapa. Meu sistema de gestão está impecável e seguro!"`,
    name: "Mariana Lopes",
    title: "Gestora, Fit Company",
    photo: "/person-3.jpg",
  },
];

// Carousel logic (mobile)
function useCarousel(total: number) {
  const [active, setActive] = useState(0);
  const next = () => setActive(a => (a + 1) % total);
  const prev = () => setActive(a => (a - 1 + total) % total);
  return { active, setActive, next, prev };
}

export default function Testimonials() {
  const { active, next, prev } = useCarousel(testimonials.length);

  return (
    <section id="clients" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
          O que dizem meus clientes
        </h2>

        {/* Grid desktop */}
        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow p-7 flex flex-col items-start transition-all"
            >
              <div className="mb-6">
                <Image
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-gray-200 shadow-sm w-12 h-12"
                />
              </div>
              <p className="text-gray-800 italic mb-6 flex-1 leading-relaxed">
                {item.text}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <User className="w-9 h-9 text-gray-400" aria-label="Cliente" />
                <div>
                  <span className="block font-semibold text-gray-900">{item.name}</span>
                  <span className="block text-gray-600 text-sm">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="min-w-full bg-gray-50 rounded-2xl shadow p-7 flex flex-col items-start mr-4"
                >
                  <div className="mb-6">
                    <Image
                      src={item.photo}
                      alt={`Foto de ${item.name}`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border border-gray-200 shadow-sm w-12 h-12"
                    />
                  </div>
                  <p className="text-gray-800 italic mb-6 flex-1 leading-relaxed">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <User className="w-9 h-9 text-gray-400" aria-label="Cliente" />
                    <div>
                      <span className="block font-semibold text-gray-900">{item.name}</span>
                      <span className="block text-gray-600 text-sm">{item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 gap-4 items-center">
            <button
              aria-label="Anterior"
              onClick={prev}
              className="bg-blue-100 hover:bg-blue-200 rounded-full p-2 transition"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}><path d="M13 17l-5-5 5-5"/></svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-2.5 h-2.5 rounded-full ${i === active ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button
              aria-label="Próximo"
              onClick={next}
              className="bg-blue-100 hover:bg-blue-200 rounded-full p-2 transition"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 7l5 5-5 5"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
