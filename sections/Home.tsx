
import React from 'react';
import { AppSection } from '../types';
import { MENU_ITEMS, COLORS } from '../constants';
import { CloudSun, Calendar, MapPin, MessageCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: AppSection) => void;
}

// Logo geométrica fiel à imagem enviada pelo usuário
const LogoIpe = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Tronco marrom geométrico com pontas arredondadas */}
    <g fill="none" stroke="#5d4017" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round">
      <path d="M256 450 V200" /> {/* Tronco Central */}
      <path d="M256 380 L130 270" /> {/* Galho Esquerdo */}
      <path d="M256 380 L382 270" /> {/* Galho Direito */}
    </g>
    
    {/* Três círculos amarelos perfeitamente simétricos */}
    <circle cx="256" cy="160" r="95" fill="#f8bc15" /> {/* Topo */}
    <circle cx="110" cy="280" r="95" fill="#f8bc15" /> {/* Esquerda */}
    <circle cx="402" cy="280" r="95" fill="#f8bc15" /> {/* Direita */}
  </svg>
);

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const whatsappUrl = "https://wa.me/5562985451980";
  
  const today = new Intl.DateTimeFormat('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  }).format(new Date());

  return (
    <div className="animate-fadeIn">
      {/* Header / Hero Section */}
      <div className="bg-[#5d4017] text-white px-6 pt-6 pb-12 rounded-b-[50px] shadow-2xl relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f8bc15]/10 rounded-full blur-3xl"></div>
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="pt-2">
            <h2 className="text-xl opacity-80 font-medium tracking-tight">Seja bem-vindo!</h2>
            <p className="text-4xl font-serif font-bold mt-1 text-[#f8bc15]">Flat Ipê</p>
          </div>
          <div className="bg-white p-2 rounded-full shadow-lg border-2 border-[#f8bc15] flex items-center justify-center aspect-square w-24 h-24 overflow-hidden">
            <LogoIpe className="w-[85%] h-[85%]" />
          </div>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide relative z-10">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl min-w-[150px] border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Calendar size={14} className="text-[#f8bc15]" />
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">Data de hoje</span>
            </div>
            <p className="text-xs font-semibold capitalize">{today}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl min-w-[150px] border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">Goiânia</span>
            </div>
            <p className="text-xs font-semibold">28°C • Ensolarado</p>
          </div>
        </div>
      </div>

      {/* Quick Action WhatsApp Support */}
      <div className="px-6 -mt-8 relative z-20">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white p-6 rounded-3xl shadow-xl flex items-center justify-between border border-[#5d4017]/10 active:scale-[0.98] transition-all no-underline"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#25D366] text-white p-4 rounded-2xl shadow-lg">
              <MessageCircle size={28} />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg text-[#5d4017]">Dúvidas? Fale Conosco</p>
              <p className="text-sm text-gray-500">Estamos prontos para ajudar</p>
            </div>
          </div>
          <div className="bg-[#5d4017]/5 p-2 rounded-full text-[#5d4017]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </a>
      </div>

      {/* Main Menu Grid */}
      <div className="px-6 py-10 grid grid-cols-2 gap-5">
        {MENU_ITEMS.filter(item => item.id !== AppSection.CHAT).map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex flex-col gap-4 p-5 bg-white rounded-3xl shadow-sm hover:shadow-md border border-gray-100 transition-all active:scale-[0.98] text-left group"
          >
            <div className="bg-[#fcfaf7] text-[#5d4017] w-fit p-4 rounded-2xl group-hover:bg-[#f8bc15] group-hover:text-white transition-colors duration-300">
              {React.cloneElement(item.icon as React.ReactElement<any>, { size: 30 })}
            </div>
            <div>
              <h3 className="font-bold text-base text-[#5d4017] leading-tight">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Location Bar */}
      <div className="px-6 pb-14">
        <div className="bg-white p-5 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm">
          <div className="bg-[#5d4017]/5 p-3 rounded-xl text-[#5d4017]">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-widest">Localização</p>
            <p className="text-xs text-gray-700 font-semibold">Setor Pedro Ludovico, Goiânia - GO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
