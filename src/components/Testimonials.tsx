"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <section id="clients" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-semibold text-xs rounded-full px-4 py-1 mb-2 tracking-wide shadow-sm">
            <Star size={16} className="text-amber-400" />
            Clientes reais, resultados reais
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-2">
            O que dizem meus clientes
          </h2>
          <p className="text-gray-500 text-center max-w-2xl">
            Todos os feedbacks abaixo são <b>verificados</b> e vieram de clientes reais, empresas que confiam e recomendam meu trabalho.
          </p>
        </motion.div>

        {/* Grid desktop */}
        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-3xl shadow-lg p-8 flex flex-col items-center relative group hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Aspas decorativas */}
              <span className="absolute -top-6 left-6 text-blue-100 text-6xl font-serif select-none">“</span>
              {/* Foto do cliente */}
              <div className="mb-5 relative">
                <Image
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-blue-200 shadow-lg object-cover w-16 h-16 group-hover:scale-105 group-hover:shadow-blue-100 transition"
                />
                <span className="absolute bottom-0 right-0 bg-green-400 border-2 border-white rounded-full w-4 h-4 shadow" title="Cliente verificado" />
              </div>
              <p className="text-gray-800 italic mb-5 flex-1 leading-relaxed text-center">
                {item.text}
              </p>
              {/* Avaliação 5 estrelas */}
              <div className="flex justify-center mb-2">
                {Array(5).fill(0).map((_, idx) => (
                  <Star key={idx} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-center">
                <span className="block font-semibold text-gray-900">{item.name}</span>
                <span className="block text-gray-600 text-sm">{item.title}</span>
              </div>
            </motion.div>
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
                  className="min-w-full bg-gray-50 rounded-3xl shadow-lg p-8 flex flex-col items-center relative mr-4"
                >
                  <span className="absolute -top-6 left-6 text-blue-100 text-6xl font-serif select-none">“</span>
                  <div className="mb-5 relative">
                    <Image
                      src={item.photo}
                      alt={`Foto de ${item.name}`}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-blue-200 shadow-lg object-cover w-16 h-16"
                    />
                    <span className="absolute bottom-0 right-0 bg-green-400 border-2 border-white rounded-full w-4 h-4 shadow" title="Cliente verificado" />
                  </div>
                  <p className="text-gray-800 italic mb-5 flex-1 leading-relaxed text-center">
                    {item.text}
                  </p>
                  <div className="flex justify-center mb-2">
                    {Array(5).fill(0).map((_, idx) => (
                      <Star key={idx} size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="block font-semibold text-gray-900">{item.name}</span>
                    <span className="block text-gray-600 text-sm">{item.title}</span>
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
              className="bg-gray-900 hover:bg-blue-200 rounded-full p-2 transition"
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
              className="bg-gray-900 hover:bg-blue-200 rounded-full p-2 transition"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 7l5 5-5 5"/></svg>
            </button>
          </div>
        </div>

        {/* Microcopy de confiança */}
        <p className="text-xs text-gray-400 text-center mt-8">
          +50 empresas já confiaram no meu trabalho. <span className="text-blue-500 font-medium">Seu feedback pode ser o próximo!</span>
        </p>
      </div>
    </section>
  );
}
