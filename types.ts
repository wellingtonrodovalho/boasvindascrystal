
export enum AppSection {
  HOME = 'home',
  APARTMENT = 'apartment',
  CHECKIN = 'checkin',
  RULES = 'rules',
  LOCAL_GUIDE = 'local_guide',
  CHECKOUT = 'checkout',
  EMERGENCY = 'emergency',
  CHAT = 'chat'
}

export interface LocalPlace {
  name: string;
  category: string;
  description?: string;
  address?: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
  description?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}