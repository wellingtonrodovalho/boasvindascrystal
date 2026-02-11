
import React from 'react';
import { WIFI_INFO } from '../constants';
// Add Building to the list of imports from lucide-react
import { Wifi, Tv, Coffee, Utensils, Wind, Shirt, Building } from 'lucide-react';

const ApartmentSection: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn space-y-8">
      {/* Welcome Text */}
      <section>
        <p className="text-lg leading-relaxed italic text-gray-600 border-l-4 border-[#8c7355] pl-4">
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
        <h3 className="text-xl font-bold font-serif text-[#8c7355] border-b pb-2">Facilidades</h3>
        
        <div className="grid grid-cols-1 gap-4">
          <FeatureCard 
            icon={<Tv className="text-blue-500" />}
            title="SALA"
            description="Smart TV 43' com Netflix, Pluto TV, Youtube. Sofá-cama de casal (roupas de cama no armário do quarto)."
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
            icon={<Coffee className="text-brown-600" />}
            title="CAFETEIRA TRÊS CORAÇÕES"
            description="Escolha a cápsula, insira no suporte e pressione o botão desejado."
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

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 border border-gray-100">
    <div className="p-2 h-fit bg-gray-50 rounded-lg">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-800 text-sm mb-1">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ApartmentSection;
