"use client";

import { FaCode, FaLaptop, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode size={36} />,
    title: "Desenvolvimento Web",
    description: "Sistemas web rápidos, seguros e personalizados, sob medida para sua empresa.",
  },
  {
    icon: <FaMobileAlt size={36} />,
    title: "Apps Mobile",
    description: "Aplicativos modernos e intuitivos para Android e iOS, focados na experiência do usuário.",
  },
  {
    icon: <FaLaptop size={36} />,
    title: "Automação Inteligente",
    description: "Soluções de automação para acelerar seus processos, reduzir erros e aumentar sua eficiência.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-gray-50 py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 text-center
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-5 text-blue-600 group-hover:text-blue-800 transition">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl text-gray-900 font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
