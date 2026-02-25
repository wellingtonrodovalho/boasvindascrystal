
import React from 'react';
import { 
  Home, 
  Key, 
  ClipboardList, 
  MapPin, 
  LogOut, 
  PhoneCall, 
  Wifi, 
  Tv, 
  Coffee, 
  Wind, 
  ShieldAlert,
  ShoppingBag,
  Utensils,
  Dumbbell,
  Building,
  Sparkles
} from 'lucide-react';
import { AppSection } from './types';

// Cores extraídas diretamente da logo enviada
export const COLORS = {
  primary: '#5d4017',   // Marrom do tronco
  secondary: '#f1b418', // Amarelo das flores/folhas
  bg: '#fcfaf7',        // Bege claríssimo para o fundo
  text: '#3d2b10',      // Texto em marrom escuro
  accent: '#f1b418'     // Destaques em amarelo
};

export const MENU_ITEMS = [
  { id: AppSection.APARTMENT, title: 'Nosso Apartamento', icon: <Home size={28} />, description: 'Conheça o espaço e eletrônicos' },
  { id: AppSection.CHECKIN, title: 'Check-in', icon: <Key size={28} />, description: 'Acesso e fechadura digital' },
  { id: AppSection.RULES, title: 'Regras da Casa', icon: <ClipboardList size={28} />, description: 'Convívio e cuidados' },
  { id: AppSection.LOCAL_GUIDE, title: 'Guia Local', icon: <MapPin size={28} />, description: 'O que fazer por perto' },
  { id: AppSection.CHECKOUT, title: 'Check-out', icon: <LogOut size={28} />, description: 'Lembretes para sua saída' },
  { id: AppSection.EMERGENCY, title: 'Emergência', icon: <PhoneCall size={28} />, description: 'Contatos importantes' },
];

export const WIFI_INFO = {
  network: 'Cond Crystal Place',
  password: 'crystal@2022'
};

export const EMERGENCY_CONTACTS = [
  { name: 'Polícia Militar', number: '190' },
  { name: 'SAMU', number: '192' },
  { name: 'Corpo de Bombeiros', number: '193' },
  { name: 'Polícia Federal', number: '194' },
  { name: 'Polícia Civil', number: '197' },
  { name: 'Guarda Municipal', number: '153' },
  { name: 'Hospital Estadual (HUGO)', number: '6232014455' },
  { name: 'DEAM (Mulher)', number: '6232012801' },
  { name: 'DEAI (Idoso)', number: '6232011501' },
  { name: 'Ministério Público GO', number: '6232438000' },
];

export const LOCAL_PLACES = [
  { category: 'Restaurantes', name: 'Carne de Sol 1008', address: 'R. 1008, St. Pedro Ludovico, Goiânia' },
  { category: 'Restaurantes', name: 'Areião Restaurante', address: 'Térreo do Condomínio' },
  { category: 'Restaurantes', name: 'Bistrô CHICA DOIDA', address: 'Térreo do Condomínio' },
  { category: 'Panificadora', name: 'Park Pães', address: 'St. Pedro Ludovico, Goiânia', mapUrl: 'https://maps.app.goo.gl/S64NzRtAWUfSZbFQA', wazeUrl: 'https://www.waze.com/ul?q=Park%20P%C3%A3es%20Goi%C3%A2nia' },
  { category: 'Farmácias', name: 'Drogasil', address: 'St. Pedro Ludovico, Goiânia', mapUrl: 'https://maps.app.goo.gl/52k4j9y6wNCYvUuJ8', wazeUrl: 'https://www.waze.com/ul?q=Drogasil%20Goi%C3%A2nia' },
  { category: 'Emergência Médica', name: 'HUGO - Hospital Estadual de Urgências de Goiás', address: 'St. Pedro Ludovico, Goiânia', mapUrl: 'https://maps.app.goo.gl/aRXiJuxnuy4AXJwn6', wazeUrl: 'https://www.waze.com/ul?q=HUGO%20Hospital%20Estadual%20de%20Urg%C3%AAncias%20de%20Goi%C3%A1s' },
  { category: 'Supermercados', name: 'Costa Atacadão', address: 'St. Pedro Ludovico, Goiânia' },
  { category: 'Supermercados', name: 'SmartStore', address: 'Mezanino do Condomínio' },
  { category: 'Shoppings', name: 'Goiânia Shopping', address: 'Av. T-10, St. Bueno, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Goi%C3%A2nia%20Shopping' },
  { category: 'Shoppings', name: 'Shopping Bougainville', address: 'R. 9, St. Marista, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Shopping%20Bougainville' },
  { category: 'Shoppings', name: 'Flamboyant Shopping Center', address: 'Av. Dep. Jamel Cecílio, Jardim Goiás, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Flamboyant%20Shopping%20Center' },
  { category: 'Lazer', name: 'Parque Flamboyant', address: 'Jardim Goiás, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Parque%20Flamboyant' },
  { category: 'Lazer', name: 'Parque Vaca Brava', address: 'St. Bueno, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Parque%20Vaca%20Brava' },
  { category: 'Lazer', name: 'Estádio Serra Dourada', address: 'Jardim Goiás, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Est%C3%A1dio%20Serra%20Dourada' },
  { category: 'Lazer', name: 'Centro Cultural Oscar Niemeyer', address: 'Av. Dep. Jamel Cecílio, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Centro%20Cultural%20Oscar%20Niemeyer' },
  { category: 'Bancos', name: 'Banco Itaú - Agência 7209', address: 'Goiânia, GO', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Banco%20Ita%C3%BA%20Ag%C3%AAncia%207209' },
  { category: 'Bancos', name: 'Bradesco', address: 'Goiânia, GO', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Bradesco%20Goi%C3%A2nia' },
  { category: 'Bancos', name: 'Caixa', address: 'Goiânia, GO', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Caixa%20Goi%C3%A2nia' },
  { category: 'Bancos', name: 'Banco do Brasil - Agência 3486', address: 'Goiânia, GO', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Banco%20do%20Brasil%20Ag%C3%AAncia%203486' },
  { category: 'Feiras', name: 'Feira da Lua', address: 'Praça Tamandaré, Goiânia (Sábados 15h)', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Feira%20da%20Lua%20Goi%C3%A2nia' },
  { category: 'Feiras', name: 'Feira do Sol', address: 'Praça do Sol, Goiânia (Domingos 15h)', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Feira%20do%20Sol%20Goi%C3%A2nia' },
  { category: 'Feiras', name: 'Região da 44', address: 'Setor Norte Ferroviário, Goiânia', mapUrl: 'https://maps.app.goo.gl/vY7Z2Z2Z2Z2Z2Z2Z2', wazeUrl: 'https://www.waze.com/ul?q=Regi%C3%A3o%20da%2044%20Goi%C3%A2nia' },
  { category: 'Lazer', name: 'Parque Areião', address: 'St. Pedro Ludovico, Goiânia' },
  { category: 'Lazer', name: 'Zoológico de Goiânia', address: 'St. Oeste, Goiânia' },
];