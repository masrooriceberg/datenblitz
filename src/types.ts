export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  position: string;
  industry: string;
  location: string;
  lastUpdated: string;
}

export interface LeadList {
  id: string;
  title: string;
  description: string;
  industry: string;
  category: string;
  leadCount: number;
  price: number;
  previewLeads: Lead[];
  tags: string[];
  qualityScore: number;
  lastUpdated: string;
  location?: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface LocationSuggestion {
  displayName: string;
  lat: number;
  lon: number;
  type: string;
  postcode?: string;
}