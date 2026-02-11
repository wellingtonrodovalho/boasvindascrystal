
import React, { useState } from 'react';
import { LOCAL_PLACES } from '../constants';
import { MapPin, Navigation, Search, Utensils, ShoppingBag, Landmark } from 'lucide-react';

const categories = ['Tudo', 'Restaurantes', 'Supermercados', 'Shoppings', 'Lazer'];

const LocalGuideSection: React.FC = () => {
  const [filter, setFilter] = useState('Tudo');

  const filteredPlaces = filter === 'Tudo' 
    ? LOCAL_PLACES 
    : LOCAL_PLACES.filter(p => p.category === filter);

  const handleNavigate = (address: string) => {
    const encoded = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Restaurantes': return <Utensils size={18} />;
      case 'Supermercados': return <Search size={18} />;
      case 'Shoppings': return <ShoppingBag size={18} />;
      case 'Lazer': return <Landmark size={18} />;
      default: return <MapPin size={18} />;
    }
  };

  return (
    <div className="animate-fadeIn min-h-screen">
      {/* Filtros: Removido 'sticky' para garantir que as opções abaixo nunca sejam cobertas */}
      <div className="bg-white py-6 px-4 border-b border-gray-100 shadow-sm">
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-md mx-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-200 border ${
                filter === cat 
                  ? 'bg-[#5d4017] text-[#f8bc15] border-[#5d4017] shadow-md scale-105' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200 active:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Locais: Começa agora naturalmente após os filtros */}
      <div className="p-6 space-y-4">
        {filteredPlaces.map((place, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 flex items-center justify-between group hover:border-[#f8bc15]/30 transition-all animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="bg-[#fcfaf7] text-[#5d4017] p-3 rounded-xl shrink-0">
                {getCategoryIcon(place.category)}
              </div>
              <div className="min-w-0 pr-2">
                <h4 className="font-bold text-[#5d4017] text-sm leading-tight truncate">{place.name}</h4>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{place.category}</p>
                {place.address && (
                  <p className="text-[11px] text-gray-500 mt-1 truncate">
                    {place.address}
                  </p>
                )}
              </div>
            </div>
            
            <button 
              onClick={() => handleNavigate(place.address || place.name)}
              className="bg-[#5d4017] text-[#f8bc15] p-3 rounded-xl flex items-center justify-center shadow-md active:scale-90 transition-all hover:bg-[#3d2b10] shrink-0"
              aria-label="Abrir no Google Maps"
            >
              <Navigation size={20} />
            </button>
          </div>
        ))}

        {filteredPlaces.length === 0 && (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-200 mb-4" size={48} />
            <p className="text-gray-400 font-medium italic">Nenhum local encontrado.</p>
          </div>
        )}

        {/* Dica do Anfitrião */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="bg-[#fcfaf7] p-5 rounded-2xl border border-dashed border-[#5d4017]/20">
            <p className="text-xs text-gray-500 font-medium italic text-center leading-relaxed">
              Dica do Anfitrião: <br/>
              <span className="text-[#5d4017] font-bold not-italic text-sm">"O Bistrô Chica Doida tem a melhor picanha da região!"</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalGuideSection;
