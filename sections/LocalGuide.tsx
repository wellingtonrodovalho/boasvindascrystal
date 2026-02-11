
import React, { useState } from 'react';
import { LOCAL_PLACES } from '../constants';
import { MapPin, Navigation, Search, Utensils, ShoppingBag, Landmark, Coffee, Dumbbell } from 'lucide-react';

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
    <div className="animate-fadeIn">
      {/* Category Filter */}
      <div className="sticky top-[72px] bg-[#f7f3f0] z-30 py-4 px-6 shadow-sm border-b overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-[#8c7355] text-white' 
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-4">
        {filteredPlaces.map((place, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 flex items-center justify-between group hover:border-[#8c7355]/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#f7f3f0] text-[#8c7355] p-3 rounded-xl">
                {getCategoryIcon(place.category)}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{place.name}</h4>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{place.category}</p>
                {place.address && <p className="text-xs text-gray-500 mt-0.5 max-w-[180px] truncate">{place.address}</p>}
              </div>
            </div>
            
            <button 
              onClick={() => handleNavigate(place.address || place.name)}
              className="bg-[#8c7355] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold shadow-sm active:scale-95 transition-all"
            >
              <Navigation size={16} />
              Ir
            </button>
          </div>
        ))}

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            Nenhum local encontrado para esta categoria.
          </div>
        )}

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic text-center">
            Gostamos muito do Bistrô Chica Doida para uma boa picanha!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalGuideSection;
