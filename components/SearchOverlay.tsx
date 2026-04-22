
import React, { useState, useMemo, useEffect } from 'react';
import { Search as SearchIcon, X, MapPin, Info, Home, Key, ClipboardList, LogOut, PhoneCall, ChevronRight, Utensils, ShoppingBag, Landmark, Coffee, ShieldAlert, Building, Store } from 'lucide-react';
import { AppSection } from '../types';
import { MENU_ITEMS, LOCAL_PLACES, EMERGENCY_CONTACTS } from '../constants';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: AppSection) => void;
}

interface SearchResult {
  title: string;
  description?: string;
  section: AppSection;
  icon: React.ReactNode;
  category?: string;
  type: 'menu' | 'place' | 'emergency' | 'static';
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const allItems: SearchResult[] = [
      // Menu Items
      ...MENU_ITEMS.map(item => ({
        title: item.title,
        description: item.description,
        section: item.id,
        icon: item.icon,
        type: 'menu' as const
      })),
      // Local Places
      ...LOCAL_PLACES.map(place => ({
        title: place.name,
        description: place.address,
        section: AppSection.LOCAL_GUIDE,
        category: place.category,
        icon: <MapPin size={20} />,
        type: 'place' as const
      })),
      // Emergency Contacts
      ...EMERGENCY_CONTACTS.map(contact => ({
        title: contact.name,
        description: contact.number,
        section: AppSection.EMERGENCY,
        icon: <PhoneCall size={20} />,
        type: 'emergency' as const
      })),
      // Static Keywords / Topics
      { title: 'Wi-Fi / Internet', description: 'Dados de acesso à rede do condomínio', section: AppSection.APARTMENT, icon: <Home size={20} />, type: 'static' as const },
      { title: 'Ar Condicionado', description: 'Como usar o controle do AC', section: AppSection.APARTMENT, icon: <Home size={20} />, type: 'static' as const },
      { title: 'Netflix / TV', description: 'Instruções para canais e streaming', section: AppSection.APARTMENT, icon: <Home size={20} />, type: 'static' as const },
      { title: 'Cafeteira', description: 'Manual da máquina Três Corações', section: AppSection.APARTMENT, icon: <Home size={20} />, type: 'static' as const },
      { title: 'Sofá-Cama', description: 'Como abrir e fechar o sofá', section: AppSection.APARTMENT, icon: <Home size={20} />, type: 'static' as const },
      { title: 'Lixo / Descarte', description: 'Onde descartar os resíduos', section: AppSection.RULES, icon: <ClipboardList size={20} />, type: 'static' as const },
      { title: 'Fumo / Cigarro', description: 'Regras sobre fumo no apartamento', section: AppSection.RULES, icon: <ClipboardList size={20} />, type: 'static' as const },
      { title: 'Pets / Animais', description: 'Regras para trazer seu animal de estimação', section: AppSection.RULES, icon: <ClipboardList size={20} />, type: 'static' as const },
    ];

    return allItems.filter(item => {
      const searchStr = `${item.title} ${item.description || ''} ${item.category || ''}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return searchStr.includes(normalizedQuery);
    }).slice(0, 10);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-white animate-fadeIn">
      {/* Search Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            autoFocus
            type="text"
            placeholder="O que você está procurando?"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#f1b418] outline-none text-[#3d2b10]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 p-1"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button 
          onClick={onClose}
          className="text-[#5d4017] font-bold text-sm px-2"
        >
          Fechar
        </button>
      </div>

      {/* Results Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!query.trim() ? (
          <div className="text-center pt-10">
            <SearchIcon className="mx-auto text-gray-100 mb-4" size={64} />
            <p className="text-gray-400 text-sm">Digite algo para pesquisar no guia do Flat Ipê</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {['Wi-Fi', 'Netflix', 'Restaurante', 'Festa', 'Lixo', 'Checkout'].map(suggestion => (
                <button 
                  key={suggestion}
                  onClick={() => setQuery(suggestion)}
                  className="px-4 py-2 bg-gray-50 text-gray-500 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-2">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pl-2 mb-2">Resultados</p>
            {results.map((result, idx) => (
              <button
                key={`${result.type}-${idx}`}
                onClick={() => {
                  onNavigate(result.section);
                  onClose();
                }}
                className="w-full flex items-center gap-4 p-4 bg-white border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all active:scale-[0.98] text-left shadow-sm mb-2 group"
              >
                <div className="bg-[#fcfaf7] text-[#5d4017] p-3 rounded-xl group-hover:bg-[#f1b418] group-hover:text-white transition-colors">
                  {result.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[#5d4017] text-sm leading-tight">{result.title}</h4>
                  {result.description && (
                    <p className="text-[11px] text-gray-500 mt-0.5 truncate">{result.description}</p>
                  )}
                  {result.category && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-400 text-[9px] font-black uppercase tracking-wider rounded">
                      {result.category}
                    </span>
                  )}
                </div>
                <ChevronRight size={18} className="text-gray-200 group-hover:text-[#f1b418] transition-colors" />
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center pt-10">
            <X className="mx-auto text-gray-100 mb-4" size={64} />
            <p className="text-gray-400 text-sm">Nenhum resultado encontrado para "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
