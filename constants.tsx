
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
  Building
} from 'lucide-react';
import { AppSection } from './types';

export const COLORS = {
  primary: '#8c7355',
  secondary: '#d4af37',
  bg: '#f7f3f0',
  text: '#4a3f35',
  accent: '#e6be8a'
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
  { category: 'Restaurantes', name: 'Restaurante Santorini', address: 'Goiânia, GO' },
  { category: 'Restaurantes', name: 'Areião Restaurante', address: 'Térreo do Condomínio' },
  { category: 'Restaurantes', name: 'Bistrô CHICA DOIDA', address: 'Térreo do Condomínio' },
  { category: 'Supermercados', name: 'Costa Atacadão', address: 'St. Pedro Ludovico, Goiânia' },
  { category: 'Supermercados', name: 'SmartStore', address: 'Mezanino do Condomínio' },
  { category: 'Shoppings', name: 'Goiânia Shopping', address: 'Av. T-10, St. Bueno, Goiânia' },
  { category: 'Shoppings', name: 'Flamboyant Shopping', address: 'Jardim Goiás, Goiânia' },
  { category: 'Lazer', name: 'Parque Areião', address: 'St. Pedro Ludovico, Goiânia' },
  { category: 'Lazer', name: 'Zoológico de Goiânia', address: 'St. Oeste, Goiânia' },
];
