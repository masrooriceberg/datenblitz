import React from 'react';
import { 
  Laptop, 
  Landmark, 
  HeartPulse, 
  Factory, 
  Building2,
  ChevronRight 
} from 'lucide-react';
import { Industry } from '../types';

const industries: Industry[] = [
  {
    id: '1',
    name: 'Technologie',
    icon: 'laptop',
    description: 'Software, IT-Dienstleistungen, Hardware'
  },
  {
    id: '2',
    name: 'Finanzen',
    icon: 'landmark',
    description: 'Banken, Versicherungen, Investment'
  },
  {
    id: '3',
    name: 'Gesundheit',
    icon: 'heart-pulse',
    description: 'Medizin, Pharma'
  },
  {
    id: '4',
    name: 'Produktion',
    icon: 'factory',
    description: 'Fertigung, Engineering, Industrie'
  },
  {
    id: '5',
    name: 'Immobilien',
    icon: 'building',
    description: 'Immobilien, Bau, Entwicklung'
  }
];

interface IndustrySelectorProps {
  onSelect: (industry: Industry) => void;
}

const getIndustryIcon = (iconName: string) => {
  switch (iconName) {
    case 'laptop':
      return <Laptop className="w-8 h-8 text-blue-600 mr-3" />;
    case 'landmark':
      return <Landmark className="w-8 h-8 text-blue-600 mr-3" />;
    case 'heart-pulse':
      return <HeartPulse className="w-8 h-8 text-blue-600 mr-3" />;
    case 'factory':
      return <Factory className="w-8 h-8 text-blue-600 mr-3" />;
    case 'building':
      return <Building2 className="w-8 h-8 text-blue-600 mr-3" />;
    default:
      return <Building2 className="w-8 h-8 text-blue-600 mr-3" />;
  }
};

export function IndustrySelector({ onSelect }: IndustrySelectorProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Wählen Sie Ihre Branche</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => onSelect(industry)}
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {getIndustryIcon(industry.icon)}
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-gray-800">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}