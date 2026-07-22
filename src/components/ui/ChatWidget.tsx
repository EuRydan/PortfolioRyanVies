"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

const employeeOptions = ["1 a 9", "10 a 19", "20 a 99", "100 a 499"];
const serviceOptions = [
  "Criação de Marca",
  "Assessoria de Marketing 360",
  "Gestão de Tráfego",
  "Publicidade nas Redes Sociais",
  "Criação de Site Institucional",
  "Criação de Landing Page",
  "Implementação de E-commerce"
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Olá! Tudo bem?" },
    { id: "2", sender: "bot", text: "Pronto para receber um orçamento personalizado para o seu negócio?" }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, step, selectedServices]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
  };

  const handleSimQueroReceber = () => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: "user", text: "Sim, quero receber" }]);
    setStep(1); // Loading next messages
    
    setTimeout(() => {
      setMessages(prev => [...prev, { id: (Date.now()+1).toString(), sender: "bot", text: "Antes, preciso de algumas informações rápidas 😉" }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { id: (Date.now()+2).toString(), sender: "bot", text: "Qual é o seu nome?" }]);
        setStep(2); // Waiting for name
      }, 800);
    }, 600);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: "user", text: userText }]);

    if (step === 2) {
      setStep(3); // Loading next (Muito prazer + Email)
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: "Muito prazer 🤝" }]);
        setTimeout(() => {
          setMessages(prev => [...prev, { id: (Date.now()+1).toString(), sender: "bot", text: "Em qual e-mail gostaria de receber a proposta?" }]);
          setStep(4); // Waiting for email
        }, 800);
      }, 600);
    } else if (step === 4) {
      setStep(5); // Loading next (WhatsApp)
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: "Poderia me informar seu <b>telefone ou whatsapp</b>?<br/>(Prometo não incomodar 🙏)" }]);
        setStep(6); // Waiting for whatsapp
      }, 800);
    } else if (step === 6) {
      setStep(7); // Loading next (Company name)
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: "Legal! Estamos quase lá..." }]);
        setTimeout(() => {
          setMessages(prev => [...prev, { id: (Date.now()+1).toString(), sender: "bot", text: "Me diga, qual é o <b>nome da sua empresa</b> ?" }]);
          setStep(8); // Waiting for company name
        }, 800);
      }, 600);
    } else if (step === 8) {
      setStep(9); // Loading next (Employees)
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: "Qual é o <b>numero de colaboradores</b> de sua empresa?" }]);
        setStep(10); // Waiting for employees choice
      }, 800);
    }
  };

  const handleEmployeeChoice = (choice: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: "user", text: choice }]);
    setStep(11); // Loading next (Services)
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: "Quais serviços você tem interesse?" }]);
      setStep(12); // Waiting for services
    }, 800);
  };

  const handleServicesSubmit = () => {
    if (selectedServices.length === 0) return;
    const servicesText = selectedServices.join(", ");
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: "user", text: servicesText }]);
    setStep(13); // Final loading
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        sender: "bot", 
        text: "Pronto! Nosso consultor vai ajudá-lo <b>a definir o plano de atendimento ideal</b> 🤝" 
      }]);
      
      setTimeout(() => {
        // Need to find name before we construct the link
        const name = messages.find(m => m.sender === 'user' && m.text !== 'Sim, quero receber')?.text || '';
        const waText = encodeURIComponent(`Olá, me chamo ${name}. Preenchi o formulário no site e gostaria de conversar sobre: ${servicesText}.`);
        const waLink = `https://wa.me/5521978949944?text=${waText}`;

        setMessages(prev => [...prev, { 
          id: (Date.now()+1).toString(), 
          sender: "bot", 
          text: `Vamos atender você em alguns instantes.<br/><br/><a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background-color: #47666b; color: white; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; margin-top: 4px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> Falar por WhatsApp</a>` 
        }]);
        
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            id: (Date.now()+2).toString(), 
            sender: "bot", 
            text: "Abrindo o seu WhatsApp..." 
          }]);
          
          setTimeout(() => {
            window.open(waLink, "_blank");
          }, 1500);
        }, 1500);

      }, 1000);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={`bg-white w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right mb-4 flex flex-col ${
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#0f0f0f] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center p-2">
              <img src="/logo%20vies.svg" alt="Vieslab" className="w-full h-auto brightness-0 invert" />
            </div>
            <div>
              <h4 className="font-bold text-sm" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>vieslab.md</h4>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online agora
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 text-zinc-400 hover:text-white transition-colors rounded-full border border-zinc-700 hover:border-zinc-500"
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6L18 18"/>
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div className="bg-white p-5 flex flex-col gap-4 h-[400px] overflow-y-auto">
          
          {messages.map((msg, index) => {
            const isBot = msg.sender === "bot";
            const showAvatar = isBot && (index === 0 || messages[index - 1].sender !== "bot");
            
            return (
              <div key={msg.id} className={`flex items-end gap-2 ${isBot ? "justify-start" : "justify-end"}`}>
                {isBot && (
                  <div className={`w-8 h-8 bg-[#0f0f0f] rounded-full flex items-center justify-center p-1.5 shrink-0 ${!showAvatar ? "opacity-0" : ""}`}>
                    <img src="/logo%20vies.svg" alt="Vieslab" className="w-full h-auto brightness-0 invert" />
                  </div>
                )}
                
                <div 
                  className={`px-5 py-3.5 text-[15px] max-w-[85%] ${
                    isBot 
                      ? "bg-[#f1f1f1] text-zinc-800 rounded-2xl rounded-bl-sm" 
                      : "bg-[#0f0f0f] text-white rounded-2xl rounded-br-sm"
                  }`}
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            );
          })}

          {/* Action Button for Step 0 */}
          {step === 0 && (
            <div className="flex justify-end mt-2">
              <button 
                onClick={handleSimQueroReceber}
                className="bg-[#0f0f0f] text-white px-6 py-3.5 rounded-full font-medium text-[15px] hover:bg-[#d75310] transition-colors shadow-md"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                Sim, quero receber
              </button>
            </div>
          )}

          {/* Employee Choices */}
          {step === 10 && (
            <div className="flex flex-wrap justify-end gap-2 mt-2 pl-12">
              {employeeOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => handleEmployeeChoice(opt)}
                  className="bg-[#0f0f0f] text-white px-5 py-3 rounded-full font-medium text-[14px] hover:bg-[#d75310] transition-colors shadow-md"
                  style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Service Choices */}
          {step === 12 && (
            <div className="flex flex-col items-end gap-2 mt-2">
              {serviceOptions.map(opt => {
                const isSelected = selectedServices.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => {
                      if (isSelected) setSelectedServices(prev => prev.filter(s => s !== opt));
                      else setSelectedServices(prev => [...prev, opt]);
                    }}
                    className={`px-5 py-2.5 rounded-full font-medium text-[14px] transition-colors shadow-sm border ${
                      isSelected ? "bg-[#0f0f0f] text-white border-[#0f0f0f]" : "bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500"
                    }`}
                    style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
                  >
                    {opt}
                  </button>
                );
              })}
              
              <button
                onClick={handleServicesSubmit}
                disabled={selectedServices.length === 0}
                className="mt-4 bg-white text-zinc-800 border border-zinc-300 px-8 py-2.5 rounded-full font-medium text-[14px] hover:bg-[#0f0f0f] hover:text-white hover:border-[#0f0f0f] transition-colors shadow-sm disabled:opacity-50"
                style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                ENVIAR
              </button>
            </div>
          )}

          {/* Typing Indicator */}
          {(step === 1 || step === 3 || step === 5 || step === 7 || step === 9 || step === 11 || step === 13) && (
            <div className="flex items-end gap-2">
              <div className="w-8 h-8 shrink-0"></div>
              <div className="bg-[#f1f1f1] px-5 py-4 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-zinc-100 bg-white">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className={`flex items-center gap-2 border border-zinc-300 rounded-full px-4 py-2 bg-white transition-opacity ${(step === 2 || step === 4 || step === 6 || step === 8) ? "opacity-100" : "opacity-50 pointer-events-none"}`}
          >
            <input 
              type="text" 
              placeholder="Sua resposta..." 
              className="flex-1 bg-transparent outline-none text-[15px] text-zinc-800 placeholder:text-zinc-400 py-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={!(step === 2 || step === 4 || step === 6 || step === 8)}
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="w-8 h-8 bg-[#0f0f0f] rounded-full flex items-center justify-center text-white hover:bg-[#d75310] transition-colors disabled:opacity-50 shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7"/>
              </svg>
            </button>
          </form>
        </div>

      </div>

      {/* Floating Button & Tooltip */}
      <div className={`flex items-center gap-4 transition-all duration-300 absolute bottom-0 right-0 ${isOpen ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"}`}>
        
        {/* Tooltip */}
        {showTooltip && (
          <div className="hidden md:block bg-white text-zinc-800 px-5 py-4 rounded-2xl shadow-xl text-sm font-medium relative cursor-pointer" onClick={handleOpen}>
            Oi! Gostaria de receber <br/>
            uma <strong className="font-bold">proposta personalizada para <br/> seu negócio?</strong> 🤗
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
          </div>
        )}

        {/* Circular Button */}
        <button 
          onClick={handleOpen}
          className="w-16 h-16 bg-[#0f0f0f] rounded-full shadow-2xl flex items-center justify-center relative hover:scale-105 transition-transform shrink-0"
          aria-label="Abrir chat"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/logo%20vies.svg" alt="Vieslab" className="w-full h-auto brightness-0 invert" />
          </div>
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full animate-pulse"></span>
        </button>
        
      </div>
    </div>
  );
}
