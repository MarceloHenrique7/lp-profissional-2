"use client";

import { CheckCircle, Tag } from "lucide-react";
import { motion } from "framer-motion";

const featuresLanding = [
  "Design e desenvolvimento personalizados",
  "Protótipo responsivo navegável antes da entrega",
  "Alto desempenho para Google PageSpeed",
  "Layout adaptado para todos os dispositivos",
  "SEO interno incluso",
  "WordPress ou solução própria (à sua escolha)",
  "Suporte focado em conversão",
];

const featuresSystem = [
  "Sistema completo sob medida (delivery, agenda, PDV, odonto, etc.)",
  "Dashboard administrativo intuitivo",
  "Controle de usuários, permissões e relatórios",
  "Integração com WhatsApp, e-mail ou SMS",
  "Suporte e atualizações por 3 meses",
  "Treinamento inicial incluso",
];

const featuresAutomacao = [
  "Automação de tarefas e processos repetitivos",
  "Integração entre sistemas (API, planilhas, bancos de dados, ERPs)",
  "Bots para WhatsApp, e-mail ou redes sociais",
  "Geração automática de relatórios e alertas",
  "Scripts para importação/exportação de dados",
  "Implantação e treinamento rápido",
];

export default function PriceSection() {
  return (
    <section id="prices" className="flex justify-center items-center bg-neutral-900 py-20 px-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-7xl w-full mx-auto p-10 flex flex-col md:flex-row gap-10 relative">
        {/* Card Landing Page */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="flex-1 border border-gray-100 rounded-2xl p-6 flex flex-col relative overflow-visible"
        >
          {/* Badge Promoção */}
          <span className="absolute -top-5 left-5 bg-rose-500 text-white px-4 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow-md animate-bounce z-10">
            <Tag className="w-4 h-4" /> PROMOÇÃO
          </span>
          <span className="uppercase tracking-widest text-xs text-gray-500 font-semibold mb-2 block mt-4">
            Landing Page Profissional
          </span>
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Landing page com design que agrega valor
          </h2>
          <div className="flex items-end gap-3 mb-5">
            <span className="text-lg font-bold text-gray-400 line-through mr-2">R$ 2.200</span>
            <span className="text-3xl font-bold text-emerald-700 animate-pulse">R$ 1.000</span>
            <span className="text-gray-500 font-medium text-base pb-1">10 dias úteis</span>
          </div>
          <ul className="mb-6 space-y-2 flex-1">
            {featuresLanding.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="text-emerald-500 w-4 h-4" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="cursor-pointer mt-2 bg-black relative overflow-hidden text-white text-base font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 hover:bg-neutral-800 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 mx-auto block"
          >
            <span className="relative z-10">Agendar reunião</span>
            <span className="absolute left-[-60%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none shine" />
          </button>
          <p className="text-gray-400 text-xs mt-4">
            Página com até 5 seções.<br />
            Seção extra: R$ 120 + 1 dia útil.<br />
            Valores para sites novos, sem manter páginas antigas.
          </p>
        </motion.div>

        {/* Card Sistemas Completos */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="flex-1 border border-gray-100 rounded-2xl p-6 flex flex-col bg-neutral-50 relative overflow-visible"
        >
          <span className="absolute -top-5 left-5 bg-rose-500 text-white px-4 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow-md animate-bounce z-10">
            <Tag className="w-4 h-4" /> PROMOÇÃO
          </span>
          <span className="uppercase tracking-widest text-xs text-gray-500 font-semibold mb-2 block mt-4">
            Sistemas Sob Medida
          </span>
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Sistemas completos: delivery, agendas, PDV, odontologia
          </h2>
          <div className="flex items-end gap-3 mb-5">
            <span className="text-lg font-bold text-gray-400 line-through mr-2">R$ 3.200</span>
            <span className="text-3xl font-bold text-blue-700 animate-pulse">R$ 2.000</span>
            <span className="text-gray-500 font-medium text-base pb-1">30 dias úteis</span>
          </div>
          <ul className="mb-6 space-y-2 flex-1">
            {featuresSystem.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="text-blue-500 w-4 h-4" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="cursor-pointer mt-2 bg-blue-700 relative overflow-hidden text-white text-base font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 hover:bg-blue-900 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 mx-auto block"
          >
            <span className="relative z-10">Solicitar proposta</span>
            <span className="absolute left-[-60%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none shine" />
          </button>
          <p className="text-gray-400 text-xs mt-4">
            Sistemas personalizados. Valor pode variar conforme escopo.<br />
            Inclui documentação e treinamento inicial.<br />
            Suporte premium por 90 dias após entrega.
          </p>
        </motion.div>

        {/* Card Automação */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex-1 border border-gray-100 rounded-2xl p-6 flex flex-col bg-white relative overflow-visible"
        >
          <span className="absolute -top-5 left-5 bg-rose-500 text-white px-4 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow-md animate-bounce z-10">
            <Tag className="w-4 h-4" /> PROMOÇÃO
          </span>
          <span className="uppercase tracking-widest text-xs text-gray-500 font-semibold mb-2 block mt-4">
            Automação de Processos
          </span>
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            Soluções de automação para acelerar seus processos
          </h2>
          <div className="flex items-end gap-3 mb-5">
            <span className="text-lg font-bold text-gray-400 line-through mr-2">R$ 1.000</span>
            <span className="text-3xl font-bold text-orange-600 animate-pulse">R$ 500</span>
            <span className="text-gray-500 font-medium text-base pb-1">3 dias úteis</span>
          </div>
          <ul className="mb-6 space-y-2 flex-1">
            {featuresAutomacao.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="text-orange-400 w-4 h-4" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="cursor-pointer mt-2 bg-orange-600 relative overflow-hidden text-white text-base font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 hover:bg-orange-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-300 mx-auto block"
          >
            <span className="relative z-10">Solicitar automação</span>
            <span className="absolute left-[-60%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none shine" />
          </button>
          <p className="text-gray-400 text-xs mt-4">
            Valor por hora técnica.<br />
            Para demandas maiores, faça um orçamento personalizado.<br />
            Solução rápida, segura e documentada.
          </p>
        </motion.div>
      </div>
      <style jsx>{`
        .shine {
          animation: shine-move 1.2s cubic-bezier(0.4,0,0.2,1) 1;
        }
        button:hover .shine, button:focus .shine {
          opacity: 1;
          animation: shine-move 0.8s;
        }
        @keyframes shine-move {
          0% { left: -60%; opacity: 0; }
          30% { opacity: 0.2; }
          60% { left: 120%; opacity: 0.5; }
          100% { left: 120%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
