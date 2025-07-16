"use client";

import { Handshake, Wrench, Headset, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Handshake className="w-10 h-10 text-blue-600" aria-label="Atendimento Ágil" />,
    title: "Atendimento ágil e personalizado",
    desc: "Fale direto com quem desenvolve. Sem intermediários, respostas rápidas e soluções sob medida para o seu negócio.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-green-600" aria-label="Soluções sob medida" />,
    title: "Soluções 100% sob medida",
    desc: "Nada de modelos prontos. Cada sistema ou site é desenvolvido exclusivamente para suas necessidades.",
  },
  {
    icon: <Headset className="w-10 h-10 text-pink-600" aria-label="Suporte especializado" />,
    title: "Suporte próximo e eficiente",
    desc: "Acompanhamento após entrega, ajustes e suporte rápido sempre que precisar. Você nunca fica na mão.",
  },
  {
    icon: <Award className="w-10 h-10 text-yellow-500" aria-label="Experiência comprovada" />,
    title: "Experiência comprovada",
    desc: "Mais de 5 anos entregando projetos que transformam negócios. Resultados reais em diversos setores.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-black text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Por que escolher meu trabalho?
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow flex flex-col items-center p-8 text-center hover:shadow-xl group transition relative"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 + i * 0.09 }}
            >
              <span className="inline-flex items-center justify-center mb-4 rounded-full bg-blue-50 group-hover:scale-110 transition-transform p-4 shadow-md">
                {benefit.icon}
              </span>
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
              <p className="text-gray-600 text-base">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
