
import React from 'react';
import { LogOut, ClipboardCheck, Trash2, PowerOff, Star, MessageSquare } from 'lucide-react';

const CheckOutSection: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn space-y-8">
      {/* Time Header */}
      <div className="bg-amber-100 border border-amber-200 p-6 rounded-2xl text-center">
        <p className="text-xs uppercase font-bold text-amber-700 tracking-widest mb-1">Horário Limite</p>
        <h3 className="text-4xl font-serif font-bold text-amber-900">11h da manhã</h3>
      </div>

      {/* Checklist */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold font-serif text-[#8c7355] flex items-center gap-2">
          <ClipboardCheck size={24} />
          Checklist de Saída
        </h3>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
          <ChecklistItem 
            icon={<PowerOff className="text-red-400" />}
            text="Desligar Ar Condicionado e TV" 
          />
          <ChecklistItem 
            icon={<Trash2 className="text-green-400" />}
            text="Retirar o lixo e descartar no hall" 
          />
          <ChecklistItem 
            icon={<LogOut className="text-blue-400" />}
            text="Deixar o cartão na recepção (térreo)" 
          />
          <ChecklistItem 
            icon={<Star className="text-amber-400" />}
            text="Verificar se esqueceu objetos (ex: carregadores)" 
          />
        </div>
      </section>

      {/* Feedback & Review */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-[#8c7355]/20 space-y-4">
        <div className="text-center">
          <h4 className="font-bold text-lg text-gray-800">Sua opinião é importante!</h4>
          <p className="text-sm text-gray-500">Agradecemos sua atenção e feedback para melhorarmos sempre.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <a 
            href="https://wa.me/5562985451980" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold active:scale-[0.98] transition-all"
          >
            <MessageSquare size={20} />
            Enviar Observações via WhatsApp
          </a>
          <div className="p-4 bg-gray-50 rounded-xl text-center border border-gray-100">
            <p className="text-xs text-gray-400 uppercase font-bold mb-2">Contato do Anfitrião</p>
            <p className="text-lg font-bold text-gray-700">(62) 98545-1980</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChecklistItem: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="p-4 flex items-center gap-4 group">
    <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-white transition-colors">{icon}</div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

export default CheckOutSection;
