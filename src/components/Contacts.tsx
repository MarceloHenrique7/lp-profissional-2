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
    setTimeout(() => setSent(false), 3000);
    formRef.current?.reset();
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-gray-900 mb-3 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Entre em contato
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Dúvidas, orçamentos ou só quer bater um papo? Preencha o formulário ou fale direto pelos canais abaixo.
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
            className="flex-1 group bg-white/80 border border-blue-100 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-200"
          >
            <Smartphone className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs text-gray-500 font-medium">WhatsApp</span>
              <span className="block text-base font-bold text-blue-700">+55 87 98802-8002</span>
            </div>
          </a>
          <a
            href="mailto:marcelohenriquex77@gmail.com"
            className="flex-1 group bg-white/80 border border-blue-100 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-200"
          >
            <Mail className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs text-gray-500 font-medium">E-mail</span>
              <span className="block text-base font-bold text-blue-700 break-all">marcelohenriquex77@gmail.com</span>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/henrique-oliveira-71a2bb275/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group bg-white/80 border border-blue-100 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-200"
          >
            <Linkedin className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
            <div>
              <span className="block text-xs text-gray-500 font-medium">LinkedIn</span>
              <span className="block text-base font-bold text-blue-700">/henrique-oliveira-71a2bb275</span>
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
              className="text-gray-900 flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
              autoComplete="name"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="text-gray-900 flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
              autoComplete="email"
            />
          </div>
          <textarea
            placeholder="Sua mensagem"
            className="text-gray-900 border border-gray-200 rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            required
            autoComplete="off"
          />
          <motion.button
            type="submit"
            className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 shadow-lg hover:scale-105 transition-all"
            whileTap={{ scale: 0.97 }}
            disabled={sent}
          >
            {sent ? "Mensagem enviada!" : "Enviar mensagem"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
