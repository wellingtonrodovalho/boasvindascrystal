
import React, { useState } from 'react';
import { WIFI_INFO, COLORS } from '../constants';
import { Wifi, Tv, Coffee, Utensils, Wind, Shirt, Building, ExternalLink, Bed, ChevronDown, ChevronUp, Monitor } from 'lucide-react';

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
        <h3 className="text-xl font-bold font-serif text-[#5d4017] border-b pb-2">Facilidades</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {/* TV DO QUARTO - NOVO ITEM COM PASSO A PASSO */}
          <ExpandableFeatureCard 
            icon={<Monitor className="text-blue-600" />}
            title="TV DO QUARTO (CANAIS & NETFLIX)"
            description="Aprenda a usar os 3 controles para ver TV ou Netflix."
          >
            <div className="mt-4 space-y-4 text-sm border-t pt-4 border-gray-100">
              <div className="bg-blue-50 p-3 rounded-xl">
                <p className="font-bold text-blue-800 mb-1">1. LIGAR A TV</p>
                <p className="text-blue-700">Use o <strong>Controle da TV</strong> (botão Power vermelho).</p>
              </div>

              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="font-bold text-gray-800 mb-1">2. CANAIS ABERTOS</p>
                <ul className="list-disc ml-4 space-y-1 text-gray-600">
                  <li>No controle da TV, aperte <strong>INPUT</strong> ou <strong>SOURCE</strong> e selecione a entrada dos canais.</li>
                  <li>Use o <strong>Controle Branco (Intelbras)</strong> para mudar os canais.</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-3 rounded-xl">
                <p className="font-bold text-amber-800 mb-1">3. NETFLIX (MI STICK)</p>
                <ul className="list-disc ml-4 space-y-1 text-amber-700">
                  <li>No controle da TV, mude a entrada (HDMI) para onde o Mi Stick está ligado.</li>
                  <li>Use o <strong>Controle do Mi Stick</strong> para navegar no Netflix e Youtube.</li>
                </ul>
              </div>
            </div>
          </ExpandableFeatureCard>

          <FeatureCard 
            icon={<Coffee className="text-[#5d4017]" />}
            title="CAFETEIRA TRÊS CORAÇÕES"
            description="Escolha a cápsula, insira no suporte e pressione o botão desejado."
            href={manualCafeteiraUrl}
            isButton={true}
          />
          
          <FeatureCard 
            icon={<Bed className="text-[#5d4017]" />}
            title="SOFÁ-CAMA DE CASAL"
            description="Aprenda a transformar o sofá em uma confortável cama de casal."
            href={manualSofaCamaUrl}
            isButton={true}
          />

          <FeatureCard 
            icon={<Tv className="text-blue-500" />}
            title="SMART TV SALA (43')"
            description="Netflix, Pluto TV e Youtube integrados. Controle único."
          />
          
          <FeatureCard 
            icon={<Wind className="text-cyan-500" />}
            title="AR CONDICIONADO"
            description="Os controles estão na mesa de cabeceira ao lado da cama."
          />
          <FeatureCard 
            icon={<Utensils className="text-orange-500" />}
            title="COZINHA"
            description="Talheres e panelas disponíveis nos armários."
          />
          <FeatureCard 
            icon={<Shirt className="text-indigo-500" />}
            title="LAVANDERIA"
            description="Self-service no sub-solo. Custo aproximado R$ 16,00 para lavar e R$ 16,00 para secar."
          />
          <FeatureCard 
            icon={<Building className="text-amber-600" />}
            title="LAZER (MEZANINO)"
            description="Academia, Sauna, Piscina e SmartStore. Aperte 'M' no elevador."
          />
        </div>
      </section>
    </div>
  );
};

// Componente para cards simples
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
        ? 'border-[#f8bc15] ring-1 ring-[#f8bc15]/20 shadow-md active:scale-[0.98]' 
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
          <p className="text-[10px] text-[#f8bc15] font-black mt-2 uppercase tracking-widest flex items-center gap-1">
            Clique para ver o tutorial
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

// Componente para cards que expandem (como o da TV do quarto)
const ExpandableFeatureCard: React.FC<{
  icon: React.ReactNode,
  title: string,
  description: string,
  children: React.ReactNode
}> = ({ icon, title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl shadow-md border transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-[#5d4017] ring-1 ring-[#5d4017]/10' : 'border-gray-100'
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
            <p className="text-[10px] text-[#5d4017] font-black mt-2 uppercase tracking-widest">
              Toque para ver o passo a passo
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
