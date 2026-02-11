
import React, { useState, useEffect } from 'react';
import { AppSection } from './types';
import { COLORS, MENU_ITEMS } from './constants';
// Add ShieldAlert to the list of imports from lucide-react
import { ChevronLeft, Info, Menu as MenuIcon, X, ShieldAlert } from 'lucide-react';

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

  // Scroll to top when changing sections
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen flex flex-col max-w-lg mx-auto bg-[#f7f3f0] shadow-xl relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#8c7355] text-white px-4 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          {activeSection !== AppSection.HOME && (
            <button 
              onClick={() => setActiveSection(AppSection.HOME)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          <h1 className={`${activeSection === AppSection.HOME ? 'text-2xl' : 'text-xl'} font-bold tracking-tight font-serif`}>
            {activeSection === AppSection.HOME ? 'FLAT IPÊ' : currentTitle}
          </h1>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </header>

      {/* Side Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-3/4 max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center border-bottom pb-4 border-gray-100">
              <h2 className="text-xl font-serif font-bold text-[#8c7355]">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
            </div>
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => { setActiveSection(AppSection.HOME); setIsMenuOpen(false); }}
                className={`text-left p-3 rounded-lg transition-colors ${activeSection === AppSection.HOME ? 'bg-[#f7f3f0] text-[#8c7355] font-bold' : 'text-gray-600'}`}
              >
                Início
              </button>
              {MENU_ITEMS.map(item => (
                <button 
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setIsMenuOpen(false); }}
                  className={`text-left p-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-[#f7f3f0] text-[#8c7355] font-bold' : 'text-gray-600'}`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-gray-100 text-sm text-gray-400 text-center italic">
              Flat Ipê Guest App v1.0
            </div>
          </div>
        </div>
      )}

      {/* Content Area */}
      <main className="flex-1 pb-10">
        {renderSection()}
      </main>

      {/* Quick Access Floating Button for Help */}
      {activeSection !== AppSection.EMERGENCY && (
        <button 
          onClick={() => setActiveSection(AppSection.EMERGENCY)}
          className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-40 animate-pulse"
        >
          <ShieldAlert size={28} />
        </button>
      )}
    </div>
  );
};

export default App;
