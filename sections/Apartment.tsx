
import React, { useState } from 'react';
import { WIFI_INFO } from '../constants';
import { Wifi, Tv, Coffee, Wind, Shirt, Building, ExternalLink, Bed, ChevronDown, ChevronUp, Monitor, Info, Power, Radio, Film } from 'lucide-react';

const ApartmentSection: React.FC = () => {
  const manualCafeteiraUrl = "https://docs.google.com/presentation/d/1npz-wlSkhDQNbPA5bACCCIG6XIrYGRtw1yEb621EBEg/edit?usp=sharing";
  const manualSofaCamaUrl = "https://drive.google.com/file/d/13fSrgLQYZjP83lBCS4v9lEJs4OQB2jKV/view?usp=drive_link";

  return (
    <div className="p-6 animate-fadeIn space-y-8">
      {/* Welcome Text */}
      <section>
        <p className="text-lg leading-relaxed italic text-gray-600 border-l-4 border-[#5d4017] pl-4">
          "Estamos felizes em recebê-lo! Aproveite cada momento, sinta-se em casa."
        </p>
      </section>

      {/* Wi-Fi Info */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
        <div className="flex items-center gap-3 mb-4 text-green-700">
          <Wifi size={24} />
          <h3 className="text-xl font-bold font-serif">Conexão Wi-Fi</h3>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase text-gray-400 font-bold tracking-wider">Rede</p>
            <p className="text-lg font-mono bg-gray-50 p-2 rounded border border-gray-100">{WIFI_INFO.network}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-400 font-bold tracking-wider">Senha</p>
            <p className="text-lg font-mono bg-gray-50 p-2 rounded border border-gray-100">{WIFI_INFO.password}</p>
          </div>
        </div>
      </section>

      {/* Guia da Casa Items */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <h3 className="text-xl font-bold font-serif text-[#5d4017]">Facilidades</h3>
          <span className="text-[10px] bg-[#5d4017]/5 text-[#5d4017] px-2 py-1 rounded-full uppercase font-bold">Toque nos cards para detalhes</span>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {/* TV DO QUARTO - REFINADA PARA MÁXIMA SIMPLICIDADE */}
          <ExpandableFeatureCard 
            icon={<Monitor className="text-blue-600" />}
            title="TV DO QUARTO (CANAIS & NETFLIX)"
            description="Como alternar entre Canais Abertos e Netflix usando os 3 controles."
            priority={true}
          >
            <div className="mt-4 space-y-4 text-sm border-t pt-4 border-gray-100">
              <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-2 text-red-700 font-bold">
                  <Power size={18} />
                  <span>PASSO 1: LIGAR TUDO</span>
                </div>
                <p className="text-gray-700">Pegue o <strong>Controle da TV</strong> e aperte o botão vermelho de ligar.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-2 text-gray-700 font-bold">
                  <Radio size={18} />
                  <span>PASSO 2: VER CANAIS ABERTOS</span>
                </div>
                <ul className="space-y-2 text-gray-600 ml-1">
                  <li>• No controle da TV, aperte <strong>INPUT</strong> (ou Source) e selecione a entrada de antena.</li>
                  <li>• Agora use o <strong>Controle Branco (Intelbras)</strong> para mudar os canais e volume.</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold">
                  <Film size={18} />
                  <span>PASSO 3: VER NETFLIX</span>
                </div>
                <ul className="space-y-2 text-gray-600 ml-1">
                  <li>• No controle da TV, mude a entrada (Input) para <strong>HDMI</strong>.</li>
                  <li>• Agora use o <strong>Controle do Mi Stick</strong> para escolher filmes na Netflix ou YouTube.</li>
                </ul>
              </div>

              <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg text-[12px] text-blue-800">
                <Info size={16} className="shrink-0 mt-0.5" />
                <p>Se a tela ficar preta, verifique se mudou a entrada (Input/Source) corretamente no controle da TV.</p>
              </div>
            </div>
          </ExpandableFeatureCard>

          <FeatureCard 
            icon={<Coffee className="text-[#5d4017]" />}
            title="CAFETEIRA TRÊS CORAÇÕES"
            description="Cápsulas e manual de uso rápido."
            href={manualCafeteiraUrl}
            isButton={true}
          />
          
          <FeatureCard 
            icon={<Bed className="text-[#5d4017]" />}
            title="SOFÁ-CAMA"
            description="Como transformar o sofá em cama de casal."
            href={manualSofaCamaUrl}
            isButton={true}
          />

          <FeatureCard 
            icon={<Tv className="text-blue-500" />}
            title="SMART TV SALA (43')"
            description="Netflix e Youtube integrados em um único controle."
          />
          
          <FeatureCard 
            icon={<Wind className="text-cyan-500" />}
            title="AR CONDICIONADO"
            description="Controle disponível na mesa de cabeceira."
          />
          <FeatureCard 
            icon={<Shirt className="text-indigo-500" />}
            title="LAVANDERIA (SUB-SOLO)"
            description="Self-service. R$ 16,00 lavar / R$ 16,00 secar."
          />
          <FeatureCard 
            icon={<Building className="text-amber-600" />}
            title="LAZER (MEZANINO)"
            description="Piscina, Academia e SmartStore (Aperte M)."
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  href?: string,
  isButton?: boolean
}> = ({ icon, title, description, href, isButton }) => {
  const content = (
    <div className={`bg-white p-4 rounded-xl shadow-sm flex gap-4 border transition-all duration-300 ${
      isButton 
        ? 'border-[#f8bc15] ring-1 ring-[#f8bc15]/10 shadow-md active:scale-[0.98]' 
        : 'border-gray-100'
    }`}>
      <div className={`p-2 h-fit rounded-lg ${isButton ? 'bg-[#f8bc15]/10' : 'bg-gray-50'}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className={`font-bold text-sm ${isButton ? 'text-[#5d4017]' : 'text-gray-800'}`}>{title}</h4>
          {isButton && <ExternalLink size={16} className="text-[#f8bc15]" />}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        {isButton && (
          <p className="text-[10px] text-[#f8bc15] font-black mt-2 uppercase tracking-widest">
            Toque para ver tutorial
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block no-underline">
        {content}
      </a>
    );
  }

  return content;
};

const ExpandableFeatureCard: React.FC<{
  icon: React.ReactNode,
  title: string,
  description: string,
  children: React.ReactNode,
  priority?: boolean
}> = ({ icon, title, description, children, priority }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl shadow-md border transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-[#5d4017] ring-1 ring-[#5d4017]/10' : priority ? 'border-blue-100 ring-1 ring-blue-50' : 'border-gray-100'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex gap-4 text-left items-start"
      >
        <div className={`p-2 h-fit rounded-lg ${isOpen ? 'bg-[#5d4017]/10' : 'bg-gray-50'}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-sm text-gray-800">{title}</h4>
            {isOpen ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          {!isOpen && (
            <p className="text-[10px] text-[#5d4017] font-black mt-2 uppercase tracking-widest flex items-center gap-1">
              {priority ? '💡 Importante: Toque para instruções' : 'Toque para detalhes'}
            </p>
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export default ApartmentSection;
