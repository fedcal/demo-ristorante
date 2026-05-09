// Tipi TypeScript per i dati mock della Trattoria del Mare

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariApertura {
  lunedi: string;
  martedi: string;
  mercoledi: string;
  giovedi: string;
  venerdi: string;
  sabato: string;
  domenica: string;
}

export interface ServiziRistorante {
  consegnaDomicilio: boolean;
  asportoOnline: boolean;
  tavoliEsterni: boolean;
  tavoliEsteriVistamare: boolean;
  parcheggioConvenzionato: boolean;
  accessibileDisabili: boolean;
  petFriendly: boolean;
  wifiGratuito: boolean;
  ariaCondizionata: boolean;
  postiAlInterno: number;
  postiAiTavoliEsterni: number;
  postiTotali: number;
  salaPrivataEventi: boolean;
  capSalaPrivata: number;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoAttivita {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariApertura;
  servizi: ServiziRistorante;
  metaSeo: MetaSeo;
}

// Categoria unione per tutti i piatti del menu
export type CategoriaMenu = 'antipasti' | 'primi' | 'secondi' | 'contorni' | 'dolci';

export interface CategoriaVoce {
  id: string;
  nome: string;
  ordine: number;
}

export interface Piatto {
  id: number;
  categoria: CategoriaMenu;
  nome: string;
  descrizione: string;
  prezzo: number;
  premium?: boolean;
  allergeni: string[];
}

export interface MenuDegustazione {
  id: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  prezzoConVini: number;
  portate: number;
  durata: string;
  minimoPersone: number;
  note: string;
}

export interface Vino {
  id: number;
  nome: string;
  produttore: string;
  annata: number;
  regione: string;
  tipologia: string;
  abbinamento: string;
  prezzoBottiglia: number;
  prezzoCalice: number;
}

export interface Menu {
  categorie: CategoriaVoce[];
  piatti: Piatto[];
  menuDegustazione: MenuDegustazione[];
  vini: Vino[];
}

export interface Membro {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  image: string;
  specialita: string[];
}

export interface Team {
  team: Membro[];
}

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface Faq {
  faq: FaqItem[];
}
