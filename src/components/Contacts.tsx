"use client";

import { Mail, Smartphone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Contacts() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  // Fake submit (substitua por integração real depois)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    formRef.current?.reset();
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-blue-900 mb-3 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Vamos conversar sobre seu projeto?
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-10 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Orçamento rápido, sem compromisso e com soluções sob medida.<br className="hidden sm:block" />
          Preencha o formulário ou escolha o canal de sua preferência.
        </motion.p>

        {/* Cards de contato */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <a
            href="https://wa.me/+5587988028002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group bg-white border border-blue-100 rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-200 relative"
          >
            <span className="absolute top-2 right-4 bg-emerald-500 text-xs text-white px-2 py-0.5 rounded-full shadow-sm animate-pulse font-semibold">+ Rápido</span>
            <Smartphone className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs text-gray-500 font-medium">WhatsApp</span>
              <span className="block text-base font-bold text-blue-700">+55 87 98802-8002</span>
              <span className="block text-xs text-gray-400 mt-1">Respondo em minutos</span>
            </div>
          </a>
          <a
            href="mailto:marcelohenriquex77@gmail.com"
            className="flex-1 group bg-white border border-blue-100 rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-200 relative"
          >
            <Mail className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs text-gray-500 font-medium">E-mail</span>
              <span className="block text-base font-bold text-blue-700 break-all">marcelohenriquex77@gmail.com</span>
              <span className="block text-xs text-gray-400 mt-1">Respondo em até 1 dia útil</span>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/henrique-oliveira-71a2bb275/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group bg-white border border-blue-100 rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-200 relative"
          >
            <Linkedin className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs text-gray-500 font-medium">LinkedIn</span>
              <span className="block text-base font-bold text-blue-700">/henrique-oliveira-71a2bb275</span>
              <span className="block text-xs text-gray-400 mt-1">Perfil profissional</span>
            </div>
          </a>
        </motion.div>

        {/* Formulário */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 max-w-lg mx-auto border border-blue-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Seu nome"
              className="text-gray-900 flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition placeholder:font-semibold"
              required
              autoComplete="name"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="text-gray-900 flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition placeholder:font-semibold"
              required
              autoComplete="email"
            />
          </div>
          <textarea
            placeholder="Descreva sua ideia, necessidade ou problema…"
            className="text-gray-900 border border-gray-200 rounded-lg px-4 py-3 min-h-[110px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition placeholder:font-semibold"
            required
            autoComplete="off"
          />
          <motion.button
            type="submit"
            className="cursor-pointer bg-blue-600 text-white font-black text-lg px-8 py-3 rounded-full hover:bg-blue-700 shadow-lg hover:scale-105 transition-all mt-2"
            whileTap={{ scale: 0.97 }}
            disabled={sent}
          >
            {sent ? "Mensagem enviada! 🚀" : "Quero meu orçamento grátis"}
          </motion.button>
          <div className="text-xs text-gray-400 mt-2 text-center">
            100% sem spam. Resposta personalizada para você.
          </div>
        </motion.form>
      </div>
    </section>
  );
}
