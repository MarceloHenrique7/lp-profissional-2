"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:px-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Texto principal */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
        <motion.h1
          className="mb-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-3xl md:text-5xl font-black text-gray-900 mb-1">
            Transformo ideias em <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              soluções digitais de alto impacto
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-700 mb-8 max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          Sou Henrique, desenvolvedor de software apaixonado por criar sistemas, plataformas e sites sob medida, focados em resultado real para empresas.
        </motion.p>

        <motion.a
          href="https://wa.me/seunumerowhatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 shadow-xl font-bold text-base transition-all duration-200 outline-none ring-blue-300 focus:ring-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
        >
          Solicite um orçamento
        </motion.a>

        <span className="block mt-5 text-gray-500 text-sm md:text-base">
          +60 clientes satisfeitos · 2 anos entregando resultados
        </span>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[430px] md:min-h-[520px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[340px] rounded-3xl bg-blue-100 blur-3xl opacity-50 pointer-events-none" />

        {/* Imagem 1 - flutuação lenta */}
        <motion.div
          className="absolute left-10 top-10 md:left-14 md:top-12 z-10 shadow-2xl rounded-2xl border border-white"
          style={{ transform: "rotate(-10deg)" }}
          animate={{
            y: [0, -16, 0, 12, 0], // up and down
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero-1.jpg"
            alt="Projeto 1"
            width={220}
            height={140}
            className="rounded-2xl object-cover"
            priority
          />
        </motion.div>

        {/* Imagem 2 - flutuação alternada */}
        <motion.div
          className="absolute left-40 top-28 md:left-60 md:top-28 z-20 shadow-2xl rounded-2xl border-4 border-blue-300"
          style={{ transform: "rotate(4deg)" }}
          animate={{
            y: [0, 24, 0, -16, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero-2.jpg"
            alt="Projeto 2"
            width={320}
            height={210}
            className="rounded-2xl object-cover"
            priority
          />
        </motion.div>

        {/* Imagem 3 - flutuação em fase diferente */}
        <motion.div
          className="absolute left-20 top-16 md:left-[30px] sm:left-[-90px] md:top-60 z-10 shadow-lg rounded-2xl border border-white"
          style={{ transform: "rotate(10deg)" }}
          animate={{
            y: [0, -20, 0, 18, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero-3.jpg"
            alt="Projeto 3"
            width={170}
            height={110}
            className="rounded-2xl object-cover"
            priority
          />
        </motion.div>
      </div>

      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradientMove 2.5s linear infinite alternate;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
