
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { WIFI_INFO, LOCAL_PLACES, EMERGENCY_CONTACTS } from '../constants';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual do Flat Ipê. Como posso ajudar você hoje? Pode me perguntar sobre a senha do Wi-Fi, dicas de restaurantes ou como usar os eletrônicos.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Fix: Create new GoogleGenAI instance right before the call as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        Você é o Concierge Virtual do Flat Ipê em Goiânia. 
        Seja sempre educado, prestativo e utilize um tom acolhedor e profissional.
        Responda em Português do Brasil.
        
        INFORMAÇÕES DO FLAT:
        - Localização: Av. Edmundo P. de Abreu, 31, Crystal Place, St. Pedro Ludovico.
        - Wi-Fi: Rede "${WIFI_INFO.network}", Senha "${WIFI_INFO.password}".
        - Check-in: 14h | Check-out: 11h.
        - Fechadura: Digite * + DDD (2 dígitos) + 5 primeiros dígitos do celular do titular + #. Ex: *6298545#.
        - Eletrônicos: TV 43' (Netflix, Pluto, Youtube). Ar condicionado tem controle na cabeceira.
        - Lixo: Hall dos elevadores à esquerda.
        - Pet: São bem-vindos (com formulário).
        - Restaurantes Próximos: ${LOCAL_PLACES.filter(p => p.category === 'Restaurantes').map(p => p.name).join(', ')}.
        - Emergências: ${EMERGENCY_CONTACTS.slice(0, 3).map(c => `${c.name}: ${c.number}`).join(', ')}.
        
        Se perguntarem sobre Goiânia, dê dicas de lazer como Parque Areião ou Zoológico.
        Se não souber algo específico, peça para falarem com o anfitrião pelo botão de WhatsApp no menu de Check-out.
      `;

      // Fix: Ensure conversation starts with a user message for Gemini API compatibility.
      // We skip the initial model greeting (index 0) from the conversation history sent to the API.
      const chatHistory = messages.slice(1).map(m => ({
        parts: [{ text: m.text }],
        role: m.role
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...chatHistory, { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      // Fix: Access response.text directly as a property, not a method.
      const aiText = response.text || 'Desculpe, tive um problema ao processar sua pergunta. Pode repetir?';
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Ops! Estou com dificuldade de conexão agora. Tente novamente em instantes.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-gray-50">
      {/* Chat Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`p-2 h-fit rounded-full shadow-sm ${msg.role === 'user' ? 'bg-[#5d4017] text-white' : 'bg-white text-[#5d4017]'}`}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div 
                className={`p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#5d4017] text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-2">
              <Loader2 size={16} className="animate-spin text-[#5d4017]" />
              <span className="text-xs text-gray-400">Digitando...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua dúvida..."
            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-5 pr-14 text-sm focus:ring-2 focus:ring-[#5d4017]/20 transition-all outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`absolute right-2 p-2 rounded-xl transition-all ${
              input.trim() && !isLoading ? 'bg-[#5d4017] text-white shadow-md' : 'text-gray-300'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
          <Sparkles size={10} /> Powered by Gemini AI
        </p>
      </div>
    </div>
  );
};

export default Chat;