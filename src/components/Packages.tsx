"use client";

import { Tag } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Landing Page Profissional",
    price: "A partir de R$ 700",
    promo: true,
    desc: "Ideal para divulgar seu negócio, serviço ou evento. Design único, responsivo e já otimizado para resultados.",
    features: [
      "Até 5 seções personalizadas",
      "Formulário ou WhatsApp integrado",
      "Entrega em até 7 dias úteis",
      "Ajustes e suporte por 15 dias",
    ],
  },
  {
    title: "Página de Vendas (Funil/Automação)",
    price: "A partir de R$ 900",
    promo: false,
    desc: "Página completa para captar leads ou vender, com automações básicas, integração de pagamentos e layout persuasivo.",
    features: [
      "Checkout ou captura de lead",
      "Integração com e-mail/WhatsApp",
      "Design exclusivo",
      "Ajustes e suporte por 20 dias",
    ],
  },
  {
    title: "Bot WhatsApp Básico",
    price: "A partir de R$ 450",
    promo: false,
    desc: "Automatize o atendimento, agendamento ou respostas automáticas via WhatsApp. Instalação e treinamento básico incluídos.",
    features: [
      "Respostas automáticas 24h",
      "Integração simples com site",
      "Instalação + 7 dias de suporte",
    ],
  },
  {
    title: "E-commerce Simples",
    price: "A partir de R$ 1.500",
    promo: true,
    desc: "Loja online profissional, pronta para vender, já integrada com pagamento e estoque. Perfeito para começar rápido.",
    features: [
      "Catálogo até 20 produtos",
      "Checkout, frete e pagamentos",
      "Personalização visual",
      "15 dias de suporte inicial",
    ],
  },
  {
    title: "Sistema Sob Medida",
    price: "A partir de R$ 1.500",
    promo: false,
    desc: "Solução personalizada para sua empresa, totalmente adaptada ao seu processo. Orçamento sob consulta.",
    features: [
      "Escopo flexível",
      "Dashboard/Admin incluso",
      "Treinamento inicial",
      "30 dias de suporte pós-entrega",
    ],
  },
];

export default function Packages() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50" id="packages">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Pacotes prontos <span className="text-blue-600">para seu negócio</span>
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{packages.map((item, i) => (
  <motion.div
    key={item.title}
    className={`relative rounded-3xl p-8 flex flex-col border border-gray-100 shadow-xl hover:shadow-2xl transition-all ${
      item.promo
        ? "ring-2 ring-blue-100 shadow-blue-200"
        : "bg-white"
    }`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.12 }}
  >
    {/* Badge PROMOÇÃO - discreto e tech */}
    {item.promo && (
      <span className="absolute left-6 -top-5 z-10">
        <span className="inline-flex items-center bg-white border border-blue-200 text-blue-600 font-bold rounded-full px-3 py-1 text-xs shadow-md">
          <Tag className="w-4 h-4 mr-1" />
          PROMO
        </span>
      </span>
    )}
    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
    <span className="text-blue-700 text-2xl font-extrabold my-2 block">{item.price}</span>
    <p className="text-gray-600 text-sm mb-5 flex-1">{item.desc}</p>
    <ul className="mb-6 space-y-2">
      {item.features.map((f, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
          {f}
        </li>
      ))}
    </ul>
    <button
      className="mt-auto bg-blue-600 text-white text-base font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all focus:outline-none"
      tabIndex={-1}
    >
      Solicitar orçamento
    </button>
  </motion.div>
))}

        </div>
        <p className="text-xs text-gray-500 text-center mt-10 max-w-xl mx-auto">
          * Valores de referência, podem variar conforme demanda e necessidade do cliente. Consulte para personalizações e condições especiais.
        </p>
      </div>
    </section>
  );
}
