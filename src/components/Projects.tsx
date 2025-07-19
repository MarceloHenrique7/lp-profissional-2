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
    tag: "Odonto",
    details: {
      title: "Website Odonto Online",
      desc: "Desenvolvimento de plataforma web para clínicas odontológicas, com sistema de agendamento, área para pacientes e página institucional responsiva.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      features: [
        "Sistema de agendamento integrado",
        "Área restrita para pacientes",
        "SEO avançado",
        "Design moderno e clean",
      ],
      images: [
        "/projeto-1.jpg",
      ],
    },
  },
  {
    src: "/projeto-2.jpg",
    title: "Delivery Online",
    desc: "Plataforma delivery com pedidos online e gestão.",
    tag: "Delivery",
    details: {
      title: "Plataforma Delivery Online",
      desc: "Sistema completo para restaurantes, com painel administrativo, integração com WhatsApp, relatórios de vendas e notificações automáticas.",
      tech: ["React", "Node.js", "MongoDB"],
      features: [
        "Pedidos em tempo real",
        "Gestão de produtos e entregas",
        "Notificações automáticas"
      ],
      images: [
        "/projeto-2.jpg",
      ],
    },
  },
  {
    src: "/projeto-3.jpg",
    title: "Academia Online",
    desc: "Gestão de alunos e pagamentos para academias.",
    tag: "Academia",
    details: {
      title: "Academia Online",
      desc: "Sistema administrativo para academias, controle de planos, matrículas, pagamentos e notificações aos alunos.",
      tech: ["Next.js", "Prisma", "Stripe"],
      features: [
        "Painel do aluno",
        "Controle de matrículas e pagamentos",
        "Dashboard financeiro"
      ],
      images: [
        "/projeto-3.jpg",
      ],
    },
  },
  {
    src: "/projeto-4.jpg",
    title: "Bots WhatsApp",
    desc: "Automação de atendimento e vendas 24h.",
    tag: "Automação",
    details: {
      title: "Bots para WhatsApp",
      desc: "Desenvolvimento de bots inteligentes para automação de atendimento, vendas e suporte via WhatsApp. Responde clientes automaticamente, integra com sistemas internos.",
      tech: ["Node.js", "Dialogflow", "WhatsApp API"],
      features: [
        "Respostas automáticas",
        "Integração com CRMs",
        "Escalável e seguro"
      ],
      images: [
        "/projeto-4.jpg"
      ],
    },
  },
  {
    src: "/projeto-5.jpg",
    title: "Conferência de Notas",
    desc: "Gestão eficiente de produtos e notas fiscais.",
    tag: "ERP",
    details: {
      title: "Sistema de Conferência de Notas",
      desc: "ERP completo para controle de entrada e saída de produtos com importação automática de notas fiscais. Dashboards, relatórios e auditoria automatizada.",
      tech: ["React", "Python", "Firebase"],
      features: [
        "Importação automática de XML",
        "Relatórios gerenciais",
        "Alertas de inconsistência"
      ],
      images: [
        "/projeto-5.jpg"
      ],
    },
  },
  {
    src: "/projeto-vivafit.jpg",
    title: "Landing Page Academia Viva Fit",
    desc: "Landing page institucional minimalista para academia",
    tag: "Academia",
    details: {
      title: "Landing Page Viva Fit – Academia Moderna",
      desc: "Landing page minimalista desenvolvida para a Viva Fit, com foco total em conversão de novos alunos. Inclui apresentação dos serviços, planos, integração com WhatsApp e formulário.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      features: [
        "Formulário integrado",
        "Apresentação dos planos e serviços",
        "Visual atrativo e clean",
        "Design 100% responsivo",
      ],
      images: [
        "/projeto-vivafit.jpg",
        "/projeto-vivafit-sec1.jpg",
        "/projeto-vivafit-sec2.jpg",
        "/projeto-vivafit-sec3.jpg",
        "/projeto-vivafit-sec4.jpg"
      ],
    },
  },
];


export default function ProjectsGrid() {
  const [modal, setModal] = useState<null | number>(null); // Index do projeto
  const [imgIdx, setImgIdx] = useState(0); // Index da imagem interna do projeto

  // Abre modal e sempre começa da primeira imagem do projeto
  function handleOpenModal(i: number) {
    setModal(i);
    setImgIdx(0);
  }

  // Carrossel interno de imagens do projeto atual
  function handleImageNext() {
    if (modal === null) return;
    const images = projects[modal].details?.images ?? [projects[modal].src];
    setImgIdx((curr) => (curr + 1) % images.length);
  }
  function handleImagePrev() {
    if (modal === null) return;
    const images = projects[modal].details?.images ?? [projects[modal].src];
    setImgIdx((curr) => (curr - 1 + images.length) % images.length);
  }

  // Troca de projeto (volta o imgIdx pra 0)
  function prevProject() {
    setModal((m) => {
      const idx = m === 0 ? projects.length - 1 : (m ?? 1) - 1;
      setImgIdx(0);
      return idx;
    });
  }
  function nextProject() {
    setModal((m) => {
      const idx = m === projects.length - 1 ? 0 : (m ?? -1) + 1;
      setImgIdx(0);
      return idx;
    });
  }

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
          <span className="text-blue-600">Projetos</span> em Destaque
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {projects.map((project, i) => (
            <motion.button
              key={project.src}
              onClick={() => handleOpenModal(i)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative bg-neutral-900 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 focus:-translate-y-2 transition-all duration-200 outline-none p-0 overflow-hidden flex flex-col cursor-pointer"
              aria-label={`Ampliar projeto: ${project.title}`}
              tabIndex={0}
              style={{ minHeight: 340 }}
            >
              {/* Tag categoria */}
              <span className="absolute left-5 top-5 z-10 bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
                {project.tag}
              </span>
              {/* Imagem preview */}
              <div className="relative w-full h-60 md:h-52 overflow-hidden rounded-t-3xl">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 group-hover:brightness-90 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i === 0}
                />
                <span className="absolute bottom-2 right-3 bg-white/80 text-xs text-gray-700 px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
                  Clique para ver mais
                </span>
              </div>
              <div className="flex-1 flex flex-col items-start px-7 py-7">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2 flex-1">{project.desc}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-blue-400 bg-blue-50/10 rounded px-2 py-1">
                  Ver detalhes
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal Detalhado + carrossel de imagens internas */}
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
              className="relative w-[96vw] max-w-3xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-y-auto"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ background: "#181C23" }}
            >
              {/* Carrossel de imagens internas */}
              <div className="relative w-full h-[240px] md:h-[350px] flex items-center justify-center bg-black/70">
                {(() => {
                  const images = projects[modal].details?.images ?? [projects[modal].src];
                  return (
                    <>
                      <Image
                        src={images[imgIdx]}
                        alt={`${projects[modal].title} - Imagem ${imgIdx + 1}`}
                        width={800}
                        height={440}
                        className="w-full h-full object-contain rounded-t-2xl bg-black"
                        style={{ background: "#181C23" }}
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-gray-800 rounded-full p-2 z-20"
                            onClick={e => { e.stopPropagation(); handleImagePrev(); }}
                          >
                            <ArrowLeft size={22} />
                          </button>
                          <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-gray-800 rounded-full p-2 z-20"
                            onClick={e => { e.stopPropagation(); handleImageNext(); }}
                          >
                            <ArrowRight size={22} />
                          </button>
                          <span className="absolute bottom-4 right-5 text-xs text-white/80 bg-black/40 rounded px-2 py-1">
                            {imgIdx + 1}/{images.length}
                          </span>
                        </>
                      )}
                    </>
                  );
                })()}
              </div>
              {/* Detalhes do projeto */}
              <div className="p-7 text-left">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {projects[modal].details?.title ?? projects[modal].title}
                </h3>
                <p className="text-gray-100 mb-4">
                  {projects[modal].details?.desc ?? projects[modal].desc}
                </p>
                {projects[modal].details?.tech && (
                  <div className="mb-4">
                    <span className="block text-xs text-gray-400 mb-1">Tecnologias:</span>
                    <div className="flex flex-wrap gap-2">
                      {projects[modal].details.tech.map((t, i) => (
                        <span
                          key={i}
                          className="bg-blue-700/60 text-white text-xs px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {projects[modal].details?.features && (
                  <ul className="list-disc list-inside text-gray-200 mb-3">
                    {projects[modal].details.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Navegação entre projetos */}
              <div className="flex justify-between items-center px-7 pb-7 gap-4">
                <button
                  className="bg-white/80 hover:bg-blue-50 text-gray-900 font-semibold rounded-full px-4 py-2 shadow transition flex items-center gap-2"
                  onClick={prevProject}
                >
                  <ArrowLeft size={18} /> Projeto anterior
                </button>
                <button
                  className="bg-white/80 hover:bg-blue-50 text-gray-900 font-semibold rounded-full px-4 py-2 shadow transition flex items-center gap-2"
                  onClick={nextProject}
                >
                  Próximo projeto <ArrowRight size={18} />
                </button>
              </div>
              {/* Botão fechar */}
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
    </section>
  );
}
