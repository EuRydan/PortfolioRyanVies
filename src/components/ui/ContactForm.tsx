"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const needsOptions = [
  "Criação de site / Landing Page",
  "E-Commerce",
  "UX / UI Design",
  "Criação de Marca",
  "Design System",
  "Marketing Digital",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    needs: [] as string[],
    privacyPolicy: false,
  });

  const handleNeedChange = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyPolicy) {
      alert("Você precisa concordar com a Política de Privacidade.");
      return;
    }

    const text = `*Nova Solicitação de Orçamento*%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone/WhatsApp:* ${formData.phone}%0A*Empresa:* ${formData.company}%0A%0A*Serviços de interesse:*%0A${formData.needs.map((n) => `- ${n}`).join("%0A")}`;
    window.open(`https://api.whatsapp.com/send?phone=5521978949944&text=${text}`, "_blank");
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit} 
      className="w-full space-y-8"
      style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
    >
      <div className="space-y-6">
        {/* Nome */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">Qual é o seu nome?</label>
          <input
            id="name"
            type="text"
            required
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:outline-none focus:border-[#d75310] transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Como podemos te chamar?"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* E-mail */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-300">E-mail</label>
            <input
              id="email"
              type="email"
              required
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:outline-none focus:border-[#d75310] transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
            />
          </div>

          {/* Telefone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Qual é o seu telefone/WhatsApp?</label>
            <input
              id="phone"
              type="tel"
              required
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:outline-none focus:border-[#d75310] transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>

        {/* Empresa */}
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-zinc-300">Qual é o nome da sua empresa?</label>
          <input
            id="company"
            type="text"
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:outline-none focus:border-[#d75310] transition-colors"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      {/* O que a empresa precisa */}
      <div className="space-y-4 pt-2">
        <div>
          <label className="text-sm font-medium text-zinc-300 block mb-1">O que a sua empresa precisa?</label>
          <p className="text-xs text-zinc-500 mb-4">Você pode selecionar mais de uma opção.</p>
        </div>
        <div className="flex flex-col gap-0">
          {needsOptions.map((need) => (
            <label 
              key={need} 
              className="flex items-center gap-3 py-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="hidden"
                checked={formData.needs.includes(need)}
                onChange={() => handleNeedChange(need)}
              />
              <div className={`w-5 h-5 flex items-center justify-center border transition-colors ${formData.needs.includes(need) ? 'border-[#d75310] bg-[#d75310]' : 'border-zinc-700 group-hover:border-zinc-400'}`}>
                {formData.needs.includes(need) && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="text-zinc-300 text-sm">{need}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Checkbox Política */}
      <div className="pt-2">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className={`min-w-[20px] w-5 h-5 flex items-center justify-center border transition-colors ${formData.privacyPolicy ? 'border-[#d75310] bg-[#d75310]' : 'border-zinc-800 bg-zinc-950/30 group-hover:border-zinc-600'}`}>
            {formData.privacyPolicy && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <input 
            type="checkbox" 
            className="hidden"
            checked={formData.privacyPolicy}
            onChange={(e) => setFormData({ ...formData, privacyPolicy: e.target.checked })}
          />
          <span className="text-zinc-300 text-sm">
            OK. Estou de acordo com a <span className="text-[#d75310]">Política de Privacidade deste site</span>.
          </span>
        </label>
      </div>

      {/* Botão Submeter */}
      <div className="pt-4 flex justify-center md:justify-start">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#d75310] hover:bg-[#b5460e] transition-colors text-white font-bold tracking-[0.1em] text-[10px] md:text-xs uppercase rounded-none w-full md:w-auto"
        >
          SOLICITAR ORÇAMENTO
        </button>
      </div>
    </motion.form>
  );
}
