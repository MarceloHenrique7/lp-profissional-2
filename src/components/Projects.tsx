"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    src: "/projeto-1.jpg",
    title: "Website Odonto Online",
    desc: "Site para dentistas, com agendamento online.",
  },
  {
    src: "/projeto-2.jpg",
    title: "Delivery Online",
    desc: "Plataforma delivery com pedidos online e gestão.",
  },
  {
    src: "/projeto-3.jpg",
    title: "Academia Online",
    desc: "Plataforma para academias, gestão de alunos e pagamentos.",
  },
  {
    src: "/projeto-4.jpg",
    title: "Bots WhatsApp",
    desc: "Automação de atendimento e vendas 24h.",
  },
  {
    src: "/projeto-5.jpg",
    title: "Conferência de Notas",
    desc: "Gestão eficiente de produtos e notas fiscais.",
  },
];

export default function ProjectsSlider() {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState<null | number>(null);

  // Slider principal
  const prev = () => setActive((a) => (a - 1 + projects.length) % projects.length);
  const next = () => setActive((a) => (a + 1) % projects.length);

  // Modal slider
  const modalPrev = () => setModal(modal === 0 ? projects.length - 1 : (modal! - 1));
  const modalNext = () => setModal(modal === projects.length - 1 ? 0 : (modal! + 1));

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Projetos em <span className="text-blue-600">Destaques</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Slide principal animado */}
          <motion.div
            className="relative rounded-3xl shadow-lg w-full md:w-[60%] bg-neutral-900 group outline-none cursor-pointer min-h-[280px] md:min-h-[400px] transition"
            role="button"
            aria-label="Abrir imagem ampliada"
            tabIndex={0}
            onClick={() => setModal(active)}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setModal(active); }}
            style={{ background: "#161616" }}
            initial={false}
            animate={{ boxShadow: "0 10px 24px 0 rgba(44,62,80,.07)" }}
            whileHover={{ scale: 1.01 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full"
              >
                <Image
                  src={projects[active].src}
                  alt={projects[active].title}
                  width={800}
                  height={520}
                  className="w-full h-[280px] md:h-[400px] object-cover rounded-3xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 to-transparent rounded-b-3xl pointer-events-none">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow">{projects[active].title}</h3>
                  <p className="text-white/80 text-base">{projects[active].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Navegação */}
            <button
              type="button"
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/90 hover:bg-blue-100 text-gray-700 rounded-full p-2 shadow transition z-10"
              aria-label="Anterior"
              tabIndex={-1}
            >
              <ArrowLeft size={22} />
            </button>
            <button
              type="button"
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/90 hover:bg-blue-100 text-gray-700 rounded-full p-2 shadow transition z-10"
              aria-label="Próximo"
              tabIndex={-1}
            >
              <ArrowRight size={22} />
            </button>
            <span className="absolute top-2 right-4 bg-white/80 text-xs text-gray-700 px-3 py-1 rounded-full shadow group-hover:opacity-100 opacity-0 transition pointer-events-none">
              Clique para ampliar
            </span>
          </motion.div>
          {/* Thumbnails */}
          <motion.div
            className="flex md:flex-col gap-4 md:w-48 w-full justify-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={project.title}
                className={`relative rounded-2xl shadow border-2 transition-all duration-200 overflow-hidden
                  ${i === active ? "border-blue-600 scale-105" : "border-transparent opacity-60 hover:opacity-100"}
                `}
                style={{ width: 84, height: 62 }}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={84}
                  height={62}
                  className="object-cover"
                  sizes="100px"
                  priority={i === 0}
                />
                {i === active && (
                  <span className="absolute inset-0 border-2 border-blue-600 rounded-2xl animate-pulse pointer-events-none"></span>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal de imagem ampliada */}
      <AnimatePresence>
        {modal !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setModal(null)}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[94vw] max-w-3xl h-[75vh] flex flex-col items-center bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ background: "#111" }}
            >
              <Image
                src={projects[modal].src}
                alt={projects[modal].title}
                fill
                className="object-contain"
                sizes="94vw"
                priority
              />
              <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold mb-1">{projects[modal].title}</h3>
                <p className="text-base">{projects[modal].desc}</p>
              </div>
              {/* Navegação dentro do modal */}
              <button
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/90 hover:bg-blue-100 text-gray-700 rounded-full p-2 shadow transition z-20"
                aria-label="Anterior"
                onClick={modalPrev}
              >
                <ArrowLeft size={22} />
              </button>
              <button
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/90 hover:bg-blue-100 text-gray-700 rounded-full p-2 shadow transition z-20"
                aria-label="Próximo"
                onClick={modalNext}
              >
                <ArrowRight size={22} />
              </button>
              <button
                className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white rounded-full p-2 shadow transition z-20"
                aria-label="Fechar"
                onClick={() => setModal(null)}
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn .3s;
        }
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
      `}</style>
    </section>
  );
}
