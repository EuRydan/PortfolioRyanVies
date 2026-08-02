"use client";

import { useState } from "react";

export function HotsiteContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*Contato Hotsite Promocional*%0A%0A*Nome:* ${encodeURIComponent(
      formData.name
    )}%0A*E-mail:* ${encodeURIComponent(
      formData.email
    )}%0A*Telefone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Empresa:* ${encodeURIComponent(
      formData.company
    )}%0A*Mensagem:* ${encodeURIComponent(formData.message || "Não informada")}`;

    window.open(
      `https://api.whatsapp.com/send?phone=5521978949944&text=${text}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-4 sm:space-y-5"
      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
    >
      {/* Nome */}
      <div className="space-y-1.5">
        <label
          htmlFor="hotsite-name"
          className="block text-xs font-bold uppercase tracking-wider text-zinc-700"
        >
          Nome *
        </label>
        <input
          id="hotsite-name"
          type="text"
          required
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#d75310] focus:ring-1 focus:ring-[#d75310] rounded-xl px-4 py-3 text-zinc-900 text-sm placeholder:text-zinc-400 outline-none transition-all"
        />
      </div>

      {/* Grid: E-mail e Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="hotsite-email"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-700"
          >
            E-mail *
          </label>
          <input
            id="hotsite-email"
            type="email"
            required
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#d75310] focus:ring-1 focus:ring-[#d75310] rounded-xl px-4 py-3 text-zinc-900 text-sm placeholder:text-zinc-400 outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="hotsite-phone"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-700"
          >
            Telefone / WhatsApp *
          </label>
          <input
            id="hotsite-phone"
            type="tel"
            required
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#d75310] focus:ring-1 focus:ring-[#d75310] rounded-xl px-4 py-3 text-zinc-900 text-sm placeholder:text-zinc-400 outline-none transition-all"
          />
        </div>
      </div>

      {/* Empresa */}
      <div className="space-y-1.5">
        <label
          htmlFor="hotsite-company"
          className="block text-xs font-bold uppercase tracking-wider text-zinc-700"
        >
          Empresa / Restaurante *
        </label>
        <input
          id="hotsite-company"
          type="text"
          required
          placeholder="Nome da sua empresa ou restaurante"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#d75310] focus:ring-1 focus:ring-[#d75310] rounded-xl px-4 py-3 text-zinc-900 text-sm placeholder:text-zinc-400 outline-none transition-all"
        />
      </div>

      {/* Mensagem */}
      <div className="space-y-1.5">
        <label
          htmlFor="hotsite-message"
          className="block text-xs font-bold uppercase tracking-wider text-zinc-700"
        >
          Mensagem
        </label>
        <textarea
          id="hotsite-message"
          rows={3}
          placeholder="Conte-nos sobre a promoção ou ideia que você tem em mente..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#d75310] focus:ring-1 focus:ring-[#d75310] rounded-xl px-4 py-3 text-zinc-900 text-sm placeholder:text-zinc-400 outline-none transition-all resize-none"
        />
      </div>

      {/* Botão Fale Conosco */}
      <div className="flex flex-col items-start pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 bg-[#d75310] hover:bg-[#b8430a] text-white font-bold py-2.5 sm:py-3 px-6 sm:px-7 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[#d75310]/20 group cursor-pointer text-sm sm:text-base"
        >
          <span>Fale conosco</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover:translate-x-1.5 transition-transform"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        {submitted && (
          <p className="text-left text-xs text-emerald-600 font-semibold pt-2">
            ✓ Abrindo WhatsApp para envio da mensagem...
          </p>
        )}
      </div>
    </form>
  );
}
