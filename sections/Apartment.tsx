
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { WIFI_INFO } from '../constants';
import { Wifi, Tv, Coffee, Wind, Shirt, Building, ExternalLink, Bed, ChevronDown, ChevronUp, Monitor, Info, Power, Radio, Film, Dumbbell, ShoppingBag, Waves, ThermometerSun, Clock, Zap, QrCode, Copy, Check } from 'lucide-react';

const ApartmentSection: React.FC = () => {
  const manualCafeteiraUrl = "https://docs.google.com/presentation/d/1npz-wlSkhDQNbPA5bACCCIG6XIrYGRtw1yEb621EBEg/edit?usp=sharing";
  const manualSofaCamaUrl = "https://drive.google.com/file/d/13fSrgLQYZjP83lBCS4v9lEJs4OQB2jKV/view?usp=drive_link";
  
  const [copied, setCopied] = useState(false);
  const wifiQrValue = `WIFI:S:${WIFI_INFO.network};T:WPA;P:${WIFI_INFO.password};;`;

  const copyPassword = () => {
    navigator.clipboard.writeText(WIFI_INFO.password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 animate-fadeIn space-y-8">
      {/* Welcome Text */}
      <section>
        <p className="text-lg leading-relaxed italic text-gray-600 border-l-4 border-[#5d4017] pl-4">
          "Estamos felizes em recebê-lo! Aproveite cada momento, sinta-se em casa."
        </p>
      </section>

      {/* Wi-Fi Info */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden group">
        <div className="absolute -right-8 -top-8 text-green-50/50 group-hover:text-green-50 transition-colors pointer-events-none">
          <Wifi size={120} strokeWidth={1} />
        </div>
        
        <div className="flex items-center gap-3 mb-6 text-green-700 relative z-10">
          <div className="p-2 bg-green-50 rounded-lg">
            <Wifi size={24} />
          </div>
          <h3 className="text-xl font-bold font-serif">Conexão Wi-Fi</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-black tracking-[0.2em] mb-1">Nome da Rede</p>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                <p className="text-lg font-mono font-bold text-[#5d4017]">{WIFI_INFO.network}</p>
              </div>
            </div>
            
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-black tracking-[0.2em] mb-1">Senha</p>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100 group/pwd relative">
                <p className="text-lg font-mono font-bold text-[#5d4017]">{WIFI_INFO.password}</p>
                <button 
                  onClick={copyPassword}
                  className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                  title="Copiar senha"
                >
                  {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                </button>
                {copied && (
                  <span className="absolute -top-8 right-0 bg-green-600 text-white text-[10px] px-2 py-1 rounded-md animate-bounce">
                    Copiado!
                  </span>
                )}
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={wifiQrValue}
                className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98] transition-all"
              >
                <Wifi size={20} />
                Conectar agora
              </a>
              <p className="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
                *O botão "Conectar" funciona em dispositivos compatíveis com o protocolo WIFI:. 
                Caso não conecte, utilize o QR Code ao lado ou use a senha acima.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-50/50 p-6 rounded-3xl border-2 border-dashed border-gray-200">
            <div className="bg-white p-4 rounded-2xl shadow-md mb-4 border border-gray-100">
              <QRCodeSVG 
                value={wifiQrValue} 
                size={140}
                level="H"
                includeMargin={false}
                imageSettings={{
                  src: "/favicon.ico", // Attempt to use favicon if it exists, or just a placeholder
                  x: undefined,
                  y: undefined,
                  height: 24,
                  width: 24,
                  excavate: true,
                }}
              />
            </div>
            <div className="text-center">
              <p className="flex items-center justify-center gap-2 font-bold text-[#5d4017] text-sm mb-1">
                <QrCode size={18} className="text-[#f1b418]" />
                Conexão Rápida
              </p>
              <p className="text-[11px] text-gray-500">Aponte a câmera do celular para conectar automaticamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guia da Casa Items */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <h3 className="text-xl font-bold font-serif text-[#5d4017]">Facilidades</h3>
          <span className="text-[10px] bg-[#5d4017]/5 text-[#5d4017] px-2 py-1 rounded-full uppercase font-bold">Toque nos cards para detalhes</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            icon={<Zap className="text-amber-500" />}
            title="TENSÃO DE ENERGIA"
            description="Todas as tomadas do apartamento são 220V."
          />
          <FeatureCard 
            icon={<Shirt className="text-indigo-500" />}
            title="LAVANDERIA (SUB-SOLO)"
            description="Self-service. R$ 16,00 lavar / R$ 16,00 secar."
          />
          <ExpandableFeatureCard 
            icon={<Building className="text-amber-600" />}
            title="LAZER (MEZANINO)"
            description="Informações sobre Piscina, Academia, SmartStore e Sauna. Aperte M no Elevador."
          >
            <div className="mt-4 space-y-4 text-sm border-t pt-4 border-gray-100">
              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl">
                <div className="p-1.5 bg-white text-[#5d4017] rounded-lg shadow-sm">
                  <Dumbbell size={18} />
                </div>
                <div>
                  <p className="font-bold text-[#5d4017]">Academia & SmartStore</p>
                  <p className="text-gray-600">Funcionamento <span className="font-bold">24 horas</span>.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                <div className="p-1.5 bg-white text-blue-600 rounded-lg shadow-sm">
                  <Waves size={18} />
                </div>
                <div>
                  <p className="font-bold text-blue-800">Piscina</p>
                  <p className="text-blue-700/80">Das <span className="font-bold">06:00 às 23:00</span> (Segunda a Domingo).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-orange-50/50 p-3 rounded-xl border border-orange-100/50">
                <div className="p-1.5 bg-white text-orange-600 rounded-lg shadow-sm">
                  <ThermometerSun size={18} />
                </div>
                <div>
                  <p className="font-bold text-orange-800">Sauna</p>
                  <p className="text-orange-700/80">Das <span className="font-bold">09:00 às 21:00</span>.</p>
                  <p className="text-[10px] uppercase font-black text-orange-600 mt-1 flex items-center gap-1">
                    <Info size={12} /> Necessário solicitar a chave na recepção
                  </p>
                </div>
              </div>
            </div>
          </ExpandableFeatureCard>
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
        ? 'border-[#f1b418] ring-1 ring-[#f1b418]/10 shadow-md active:scale-[0.98]' 
        : 'border-gray-100'
    }`}>
      <div className={`p-2 h-fit rounded-lg ${isButton ? 'bg-[#f1b418]/10' : 'bg-gray-50'}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className={`font-bold text-sm ${isButton ? 'text-[#5d4017]' : 'text-gray-800'}`}>{title}</h4>
          {isButton && <ExternalLink size={16} className="text-[#f1b418]" />}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        {isButton && (
          <p className="text-[10px] text-[#f1b418] font-black mt-2 uppercase tracking-widest">
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
