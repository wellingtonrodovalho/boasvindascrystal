
import React, { useState, useEffect } from 'react';
import { AppSection } from './types';
import { COLORS, MENU_ITEMS } from './constants';
import { ChevronLeft, Menu as MenuIcon, X, MessageCircle, Home as HomeIcon } from 'lucide-react';

// Sections
import HomeSection from './sections/Home';
import ApartmentSection from './sections/Apartment';
import CheckInSection from './sections/CheckIn';
import RulesSection from './sections/Rules';
import LocalGuideSection from './sections/LocalGuide';
import CheckOutSection from './sections/CheckOut';
import EmergencySection from './sections/Emergency';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = "https://wa.me/5562985451980";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case AppSection.HOME: return <HomeSection onNavigate={setActiveSection} />;
      case AppSection.APARTMENT: return <ApartmentSection />;
      case AppSection.CHECKIN: return <CheckInSection />;
      case AppSection.RULES: return <RulesSection />;
      case AppSection.LOCAL_GUIDE: return <LocalGuideSection />;
      case AppSection.CHECKOUT: return <CheckOutSection />;
      case AppSection.EMERGENCY: return <EmergencySection />;
      default: return <HomeSection onNavigate={setActiveSection} />;
    }
  };

  const currentTitle = MENU_ITEMS.find(item => item.id === activeSection)?.title || 'Flat Ipê';

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfaf7] relative">
      {/* Frozen Header */}
      <header 
        className={`sticky top-0 z-50 px-5 py-4 flex items-center justify-center transition-all duration-300 border-b ${
          activeSection === AppSection.HOME 
            ? (scrolled ? 'bg-[#5d4017]/95 backdrop-blur-md shadow-lg border-[#5d4017]/20' : 'bg-[#5d4017] border-transparent') 
            : 'bg-white/90 backdrop-blur-md shadow-md border-gray-100'
        }`}
      >
        <div className="w-full max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            {activeSection !== AppSection.HOME && (
              <button 
                onClick={() => setActiveSection(AppSection.HOME)}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-[#5d4017]"
                aria-label="Voltar para o início"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <h1 className={`font-serif font-bold transition-all duration-300 ${
              activeSection === AppSection.HOME 
                ? 'text-xl text-[#f1b418]' 
                : 'text-lg text-[#5d4017]'
            }`}>
              {activeSection === AppSection.HOME ? 'FLAT IPÊ' : currentTitle.toUpperCase()}
            </h1>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              activeSection === AppSection.HOME ? 'text-white hover:bg-white/10' : 'text-[#5d4017] hover:bg-gray-100'
            }`}
          >
            {isMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </header>

      {/* Side Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-[#3d2b10]/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-full max-w-[350px] bg-white h-full shadow-2xl p-8 flex flex-col gap-8 animate-slideInRight">
            <div className="flex justify-between items-center border-b pb-6 border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#5d4017]">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-[#5d4017]"><X size={28} /></button>
            </div>
            <nav className="flex flex-col gap-3 overflow-y-auto">
              <button 
                onClick={() => { setActiveSection(AppSection.HOME); }}
                className={`text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${activeSection === AppSection.HOME ? 'bg-[#5d4017] text-[#f1b418] font-bold shadow-lg' : 'text-[#3d2b10] hover:bg-[#fcfaf7]'}`}
              >
                Início
              </button>
              {MENU_ITEMS.map(item => (
                <button 
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); }}
                  className={`text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${activeSection === item.id ? 'bg-[#5d4017] text-[#f1b418] font-bold shadow-lg' : 'text-[#3d2b10] hover:bg-[#fcfaf7]'}`}
                >
                  <span className={`${activeSection === item.id ? 'text-[#f1b418]' : 'text-[#5d4017]'} opacity-80`}>{item.icon}</span>
                  {item.title}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-gray-100 text-[10px] text-gray-400 text-center uppercase tracking-[0.2em] font-bold">
              Flat Ipê • Goiânia, BR
            </div>
          </div>
        </div>
      )}

      {/* Content Area */}
      <main className="flex-1 overflow-x-hidden flex flex-col items-center">
        <div className="w-full max-w-5xl">
          {renderSection()}
        </div>
      </main>

      {/* Professional Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-12 px-6 mt-auto flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col items-center text-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[#5d4017] font-serif font-bold text-xl uppercase tracking-tight">Wellington Rodovalho Fonseca</p>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-black">Corretor de Imóveis</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-[12px] text-gray-500">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[#5d4017] text-[10px] uppercase tracking-widest opacity-60 mb-1">Documentação</p>
              <p><span className="font-bold text-[#5d4017]">CAEPF:</span> 269.462.701/001-49</p>
              <p><span className="font-bold text-[#5d4017]">CRECI:</span> GO 42695</p>
              <p><span className="font-bold text-[#5d4017]">CNAI:</span> 54826</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[#5d4017] text-[10px] uppercase tracking-widest opacity-60 mb-1">Digital</p>
              <a href="https://www.alugagoias.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#f1b418] transition-colors font-medium underline underline-offset-4 decoration-gray-200">www.alugagoias.com.br</a>
              <a href="mailto:contato@alugagoias.com.br" className="hover:text-[#f1b418] transition-colors font-medium">contato@alugagoias.com.br</a>
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[#5d4017] text-[10px] uppercase tracking-widest opacity-60 mb-1">Contato Direto</p>
              <a href="https://wa.me/5562985451980" target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 text-[#5d4017] py-2 px-4 rounded-xl hover:bg-[#25D366]/20 transition-all font-bold inline-flex items-center justify-center gap-2">
                <MessageCircle size={16} className="text-[#25D366]" />
                (62) 98545-1980
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-50 w-full text-[9px] text-gray-300 uppercase tracking-[0.4em] font-black">
            Flat Ipê • Goiânia, BR
          </div>
        </div>
      </footer>

      {/* Quick Access Floating Button - WhatsApp Branding */}
      {activeSection !== AppSection.EMERGENCY && (
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 border-4 border-white flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </a>
      )}

      {/* Floating Home Button */}
      {activeSection !== AppSection.HOME && (
        <button 
          onClick={() => setActiveSection(AppSection.HOME)}
          className="fixed bottom-8 left-8 bg-[#5d4017] text-[#f1b418] p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 border-4 border-white flex items-center justify-center animate-slideUp"
          aria-label="Voltar ao início"
        >
          <HomeIcon size={28} />
        </button>
      )}
    </div>
  );
};

export default App;