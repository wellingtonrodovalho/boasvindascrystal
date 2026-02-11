
import React from 'react';
import { Clock, Smartphone, MapPin, ChevronRight, Info } from 'lucide-react';

const CheckInSection: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn space-y-6">
      {/* Times Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col gap-4">
        <div className="flex justify-between items-center border-b pb-4 border-gray-50">
          <div className="flex items-center gap-2 text-[#8c7355]">
            <Clock size={20} />
            <span className="font-bold">Horários</span>
          </div>
          <span className="text-xs text-gray-400">Recepção 24h</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-green-50 rounded-xl">
            <p className="text-xs text-green-600 font-bold uppercase">Entrada</p>
            <p className="text-lg font-bold text-gray-800">A partir das 14h</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl">
            <p className="text-xs text-amber-600 font-bold uppercase">Saída</p>
            <p className="text-lg font-bold text-gray-800">Até às 11h</p>
          </div>
        </div>
      </div>

      {/* Smart Lock Guide */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold font-serif text-[#8c7355] flex items-center gap-2">
          <Smartphone size={24} />
          Fechadura Inteligente
        </h3>
        
        <div className="bg-[#8c7355] text-white p-6 rounded-2xl shadow-lg space-y-4">
          <p className="text-sm opacity-90">O acesso ao apartamento é feito por senha de 7 dígitos:</p>
          
          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <p className="text-xs uppercase font-bold tracking-widest mb-1 opacity-80">Estrutura da Senha</p>
            <p className="text-2xl font-mono text-center tracking-[0.2em] font-bold">
              * <span className="text-accent">000</span> + <span className="text-white">DIA</span><span className="text-white">MES</span> #
            </p>
            <p className="text-[10px] mt-2 text-center opacity-70">Exemplo para 29/Março: <span className="font-mono">*0002903#</span></p>
          </div>

          <div className="flex items-start gap-3 bg-white/20 p-3 rounded-lg text-sm">
            <Info size={24} className="shrink-0" />
            <p>Ao fechar a porta, <strong>sempre trave a fechadura movendo a maçaneta para cima</strong>, tanto ao entrar quanto ao sair.</p>
          </div>
        </div>
      </section>

      {/* Instructions Card */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-bold text-gray-800 mb-2">Na recepção</h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          Identifique-se e receba o cartão para ativar a energia do apartamento. Todos os hóspedes devem apresentar documentos de identificação.
        </p>
      </div>

      {/* External Links */}
      <div className="space-y-3">
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=-16.711812,-49.256877" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><MapPin size={20} /></div>
            <span className="font-bold text-gray-700">Como chegar</span>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default CheckInSection;
