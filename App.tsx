
import React, { useState, useEffect } from 'react';
import { AppSection } from './types';
import { COLORS, MENU_ITEMS } from './constants';
import { ChevronLeft, Menu as MenuIcon, X, MessageCircle } from 'lucide-react';

// Sections
import HomeSection from './sections/Home';
import ApartmentSection from './sections/Apartment';
import CheckInSection from './sections/CheckIn';
import RulesSection from './sections/Rules';
import LocalGuideSection from './sections/LocalGuide';
import CheckOutSection from './sections/CheckOut';
import EmergencySection from './sections/Emergency';
import ChatSection from './sections/Chat';

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
      case AppSection.CHAT: return <ChatSection />;
      default: return <HomeSection onNavigate={setActiveSection} />;
    }
  };

  const currentTitle = MENU_ITEMS.find(item => item.id === activeSection)?.title || 'Flat Ipê';

  return (
    <div className="min-h-screen flex flex-col max-w-lg mx-auto bg-[#fcfaf7] shadow-2xl relative">
      {/* Frozen Header */}
      <header 
        className={`sticky top-0 z-50 px-5 py-4 flex items-center justify-between transition-all duration-300 border-b ${
          activeSection === AppSection.HOME 
            ? (scrolled ? 'bg-[#5d4017]/95 backdrop-blur-md shadow-lg border-[#5d4017]/20' : 'bg-[#5d4017] border-transparent') 
            : 'bg-white/90 backdrop-blur-md shadow-md border-gray-100'
        }`}
      >
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
              ? 'text-xl text-[#f8bc15]' 
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
      </header>

      {/* Side Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-[#3d2b10]/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-[300px] bg-white h-full shadow-2xl p-8 flex flex-col gap-8 animate-slideInRight">
            <div className="flex justify-between items-center border-b pb-6 border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#5d4017]">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-[#5d4017]"><X size={28} /></button>
            </div>
            <nav className="flex flex-col gap-3">
              <button 
                onClick={() => { setActiveSection(AppSection.HOME); }}
                className={`text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${activeSection === AppSection.HOME ? 'bg-[#5d4017] text-[#f8bc15] font-bold shadow-lg' : 'text-[#3d2b10] hover:bg-[#fcfaf7]'}`}
              >
                Início
              </button>
              {MENU_ITEMS.map(item => (
                <button 
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); }}
                  className={`text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${activeSection === item.id ? 'bg-[#5d4017] text-[#f8bc15] font-bold shadow-lg' : 'text-[#3d2b10] hover:bg-[#fcfaf7]'}`}
                >
                  <span className={`${activeSection === item.id ? 'text-[#f8bc15]' : 'text-[#5d4017]'} opacity-80`}>{item.icon}</span>
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
      <main className="flex-1 overflow-x-hidden">
        {renderSection()}
      </main>

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
    </div>
  );
};

export default App;