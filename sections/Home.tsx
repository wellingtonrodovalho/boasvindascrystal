
import React from 'react';
import { AppSection } from '../types';
import { MENU_ITEMS, COLORS } from '../constants';

interface HomeProps {
  onNavigate: (section: AppSection) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Image / Banner */}
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        <img 
          src="https://picsum.photos/id/431/800/600" 
          alt="Flat Ipê" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
          <p className="text-sm uppercase tracking-widest opacity-80">Goiânia, Brasil</p>
          <h2 className="text-3xl font-serif font-bold">Bem-vindo ao Flat Ipê</h2>
          <p className="text-sm italic mt-1 text-accent">"O aconchego de um lar e o conforto de um hotel."</p>
        </div>
      </div>

      {/* Main Menu Grid */}
      <div className="px-6 py-8 grid grid-cols-1 gap-4">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all active:scale-[0.98] text-left group"
          >
            <div className="bg-[#f7f3f0] text-[#8c7355] p-3 rounded-xl group-hover:bg-[#8c7355] group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="text-gray-300 group-hover:text-[#8c7355]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </button>
        ))}
      </div>

      {/* Address Card */}
      <div className="px-6 pb-8">
        <div className="bg-[#8c7355]/10 border border-[#8c7355]/20 p-4 rounded-xl flex items-start gap-3">
          <div className="text-[#8c7355] mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-bold">Localização</p>
            <p>Av. Edmundo P. de Abreu, 31 - St. Pedro Ludovico, Goiânia - GO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
